import styles from "../styles/ProductCard.module.css"
import Image from "next/image"


const ProductCard = ({ product }) => {
    return(
        <div className={styles.container}>
           <Image src={product.image} alt="" width="500" height="500" className={styles.image}></Image> 
           <h1 className={styles.title}>{product.title}</h1>
           <span className={styles.price}>{product.prices[0]} lei</span>
           <p className={styles.desc}>{product.desc}</p>
        </div>
    )
}

export default ProductCard