import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"

const ProductList = ({productList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST COFFEE IN TOWN</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse perspiciatis tempora porro voluptates, ut hic non voluptas ab quibusdam rem minus modi deserunt debitis omnis iste, a cumque expedita neque.</p>
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