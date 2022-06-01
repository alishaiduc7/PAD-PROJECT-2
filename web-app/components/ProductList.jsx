import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"

const ProductList = ({productList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST COFFEE IN TOWN</h1>
            <p className={styles.desc}>Everyone should believe in something. I believe I will have another coffee.</p>
            <div className={styles.wrapper}>
                { 
                    (productList || []).map((product) => (
                    <ProductCard key={product._id} product={product}/>
                )) } 
        
            </div>   
        </div>
    )
}

export default ProductList