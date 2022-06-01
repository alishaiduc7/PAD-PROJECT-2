import styles from "../styles/ShoppingCart.module.css"
import Image from "next/image";
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux";
const ShoppingCart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                    <tr className={styles.tr}>
                        <th></th>
                        <th>Product</th>
                        <th>Extra</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {cart.products.map((product)=>(
                        
                    
                    <tr className={styles.tr} key={product._id}>
                        <td>
                            <div className={styles.imageContainer}>
                            <Image src={product.image} layout="fill" alt="" objectFit="cover"></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                            <span className={styles.extra}>{product.extra.map(a => (
                                <span key = {a._id}>{a.text}     </span>
                            ))}</span>
                        </td>
                        <td>
                            <span className={styles.price}>{product.price}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.total}>{product.price * product.quantity}</span>
                        </td>
                    </tr>


                    ))}  
                    </tbody> 
                                    
                </table>

            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>{cart.total} lei
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>0 lei
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>{cart.total} lei
                    </div>
                    <Link href='/orders/123'>
                    <button className={styles.button}>CHECKOUT</button>
                </Link></div>
            </div>
        </div>
    );
};

export default ShoppingCart