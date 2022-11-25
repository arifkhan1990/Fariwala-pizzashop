import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import {UilShoppingBag} from '@iconscout/react-unicons';



export default function Header() {
    return(
        <div className={css.header}>
            {/* LOG SIDE */}
            <div className={css.logo}>
                <Image src={Logo} alt="Logo" width={50} height={50} />
                <span>Fariwala Pizza Shop</span>
            </div>
            {/* menu sidebar */}
            <ul className={css.menu}>
                <li>Home</li>
                <li>Menu</li>
                <li>Contract</li>
            </ul>

            {/* right side */}
            <div className={css.rightSide}>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E"/>
                    <div className={css.badge}>1</div>
                </div>
            </div>

        </div>
    )
};
