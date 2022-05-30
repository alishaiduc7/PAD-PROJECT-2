import styles from "../styles/ProductCard.module.css"
import Image from "next/image"


const ProductCard = () => {
    return(
        <div className={styles.container}>
           <Image src="/assets/overview1.jpg" alt="" width="500" height="500" className={styles.image}></Image> 
           <h1 className={styles.title}>CAFEA CU LAPTE</h1>
           <span className={styles.price}>5 lei</span>
           <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi unde, iusto perspiciatis culpa tempore illum? Mollitia saepe ullam ipsam excepturi quia nesciunt optio sequi? Eos dolores vel obcaecati nihil?</p>
        </div>
    )
}

export default ProductCard