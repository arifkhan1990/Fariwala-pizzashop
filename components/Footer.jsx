import css from '../styles/Footer.module.css';
import {UilFacebook, UilGithub, UilTwitter, UilInstagram} from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from 'next/link';
export default function Footer() {
    return(
        <div className={css.header}>
            {/* LOG SIDE */}
            <div className={css.social}>
                    <Link href='https://www.facebook.com/arif.khan.shubro/'><a target='_blank'><UilFacebook size={35}/></a></Link>
                    <Link href=''><a target='_blank'><UilTwitter size={35}/></a></Link>
                    <Link href='https://github.com/arifkhan1990'><a target='_blank'><UilGithub size={35}/></a></Link>
                    <Link href='https://www.instagram.com/arif.khan.1990/'><a target='_blank'><UilInstagram size={35}/></a></Link>
                </div> 

            {/* right side */}
            <div className={css.rightSide}>
                <div className={css.reservedTit}>
                    <span><Link href='http://entertechbd.com/'><a target='_blank'><span style={{color:"var(--dollarRed)"}}>AGAMIRIT.SOLUTIONS</span></a></Link> &copy; All right reserved.</span>
                </div>
            </div>

        </div>
    )
};
