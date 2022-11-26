import Image from "next/image";
import Layout from "../components/Layout";
import css from '../styles/Cart.module.css';
import {useStore} from '../store/store';
import { client, urlFor } from "../lib/client";
import toast, {Toaster} from 'react-hot-toast';
import { useState } from "react";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";
export default function Cart(){
    const CartData = useStore((state)=>state.cart);
    const removePizza = useStore((state)=>state.removePizza);
    const [PaymentMethod, setPaymentMethod] = useState(null);
    const [Order, setOrder] = useState(
        typeof window !== 'undefined' && localStorage.getItem('order')
    )
    const handleRemoveItem = (id) => {
        removePizza(id);
        toast.error('Pizza Items Remove in Cart')
    };
    
    const router = useRouter();
    const total = () => CartData.pizzas.reduce((a,b)=> a + b.quantity * b.price, 0);

    const handleOnDelevery = () => {
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total', total());
    };

    const handleCheckout= async() => {
        typeof window !== 'undefined' && localStorage.setItem('total', total());
        setPaymentMethod(1);

        const response = await fetch('/api/stripe', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(CartData.pizzas)
        });

        if(response.status === 500) return;

        const data = await response.json();
        toast.loading("Redirecting...");
        router.push(data.url);

    }
    return(
        <Layout>
            <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.pizzas.length > 0 &&
                            CartData.pizzas.map((pizza, id)=>{
                                const src = urlFor(pizza.image).url();
                                return(
                                    <tr key={id}>
                                    <td className={css.imageTd}>
                                        <Image loader={()=>src} src={src} alt="" objectFit='cover' width={55} height={55}/>
                                    </td>
                                    <td>{pizza.name}</td>
                                    <td>
                                        {
                                            pizza.size === 0 ?
                                            'Small' :
                                            pizza.size === 1 ?
                                            'Medium' :
                                            'Large'
                                        }
                                    </td>
                                    <td>{pizza.price}</td>
                                    <td>{pizza.quantity}</td>
                                    <td>{pizza.price * pizza.quantity}</td>
                                    <td style={{color: "var(--dollarRed)", cursor: 'pointer'}} onClick={()=>handleRemoveItem(id)}>x</td>
                                </tr>
                            )})
                            }
                        </tbody>
                    </table>
                </div>
                {/* summary */}
                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.CartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span> ${total()}</span>
                        </div>
                    </div>
                    {!Order && CartData.pizzas.length > 0 ? (
                        <div className={css.buttons}>
                            <button className="btn" onClick={handleOnDelevery}>Pay on Delivery</button>
                            <button className="btn" onClick={handleCheckout}>Pay Now</button>
                        </div>
                    ):null}

                </div>
            </div>
            <Toaster />
            {/* payment modal */}
            <OrderModal 
            opened = {PaymentMethod === 0} 
            setOpened = {setPaymentMethod}
            PaymentMethod = {PaymentMethod}
            />
        </Layout>
    )
}