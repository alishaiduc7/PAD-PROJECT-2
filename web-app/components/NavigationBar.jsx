import styles from "../styles/NavigationBar.module.css";
import Image from "next/image";
import Link from "next/link"
const NavigationBar = () => {
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
                    <li className={styles.listItem}>Home</li>
                    </Link>
                    </div>
                    <div>
                    <Link href={`/menu`}>
                    <li className={styles.listItem}>Menu</li>
                    </Link>
                   </div>
                    <li className={styles.listItem}>About Us</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Link href={`/shoppingcart`}>
                    <Image 
                        	src="/assets/add-to-basket.png" alt="" height="45px" width="45px">
                    </Image>
                    </Link>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar