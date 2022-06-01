import styles from "../styles/Footer.module.css"
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                    Work hard. Drink coffee.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR COFFEE SHOP</h1>
                    <p className={styles.text}>Calea Șagului 100,
                    <br /> Timișoara, 
                    <br /> 0752 281 208
                    </p>
                    <p className={styles.text}>Str. Marasesti, 
                    <br /> Piața Victoriei nr. 1-3,
                    <br /> Timișoara, 
                    <br /> 0752 281 208
                    </p>
                </div>
                <div className={styles.card}>
                <h1 className={styles.title}>WORKING HOURS</h1>
                <p className={styles.text}>MONDAY UNTIL FRIDAY
                    <br /> 7:30 - 22:00
                </p>
                <p className={styles.text}>SATURDAY - SUNDAY
                    <br /> 8:30 - 22:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer