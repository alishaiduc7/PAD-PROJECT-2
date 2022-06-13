import styles from "../styles/NavigationBar.module.css";
import Image from "next/image";
import Link from "next/link"
import { useSelector } from "react-redux";

const NavigationBar = () => {

    const quantity = useSelector(state => state.cart.quantity)
    return (
        <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.logo}>
            <Image src="/assets/coffee.png" alt="" width="64" height="64"></Image>
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>Soft Coffee Shop</div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
               
                <div>
                <Link href={`/`}> 
                <li className={styles.listItem}>Home
                
                </li>
                </Link>
                </div>
                <div>
                <Link href={`/menu`}>
                <li className={styles.listItem}>Menu
                
                </li>
                </Link >
               </div>
               
               <div>
               <Link href={'/about'}>
                <li className={styles.listItem}>About Us
                </li>
                </Link>
                </div>
            </ul>
        </div>
        <Link href={`/shoppingcart`} passHref>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image 
                         src="/assets/add-to-basket.png" alt="" height="45px" width="45px" className={styles.addtocart}>
                    </Image>
                <div className={styles.counter}>{/*{quantity}*/}</div>
                </div>
            </div>
        </Link>
    </div>
);
};

export default NavigationBar