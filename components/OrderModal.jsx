import {Modal, useMantineTheme } from "@mantine/core";
import css from '../styles/OrderModal.module.css';
import { useState } from "react";
import { createOrder } from "../lib/orderHandler";
import toast, {Toaster} from "react-hot-toast";
import {useStore} from "../store/store";
import {useRouter} from "next/router";
export default function OrderModal({opened, setOpened, PaymentMethod}) {
    const theme = useMantineTheme();
    const router = useRouter();
    const [FormData, setFormData] = useState({})

    const handleInput = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const id = await createOrder({...FormData, total, PaymentMethod});
        toast.success("Order Place Successfully");
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('order', id);
        }

        router.push(`/order/${id}`);
    }
    const resetCart = useStore((state)=> state.resetCart);
    const total = typeof window !== 'undefined' && localStorage.getItem('total');
    return(
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened = {opened}
        onClose={()=>setOpened(null)}
      >
        {/* Modal content */}
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <input onChange={handleInput} type="text" name="name" required placeholder="Enter Name"/>
            <input onChange={handleInput} type="text" name="phone" required placeholder="Enter Phone Number"/>
            <textarea onChange={handleInput} name="address" rows={3} placeholder="Enter Address"></textarea>

            <span>
                You will pay <span>$ {total}</span> on delevery
            </span>
            <button type="submit" className="btn">Place Order</button>
        </form>
        <Toaster />
      </Modal>
    )
}