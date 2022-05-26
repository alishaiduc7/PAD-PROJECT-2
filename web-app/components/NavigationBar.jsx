import styles from "../styles/NavigationBar.module.css";
import Image from "next/image";

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
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>About Us</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image 
                        	src="/assets/add-to-basket.png" alt="" height="45px" width="45px">
                    </Image>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar