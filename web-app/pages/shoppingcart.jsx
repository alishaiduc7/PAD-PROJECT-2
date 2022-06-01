import styles from "../styles/ShoppingCart.module.css"
import Image from "next/image";

const ShoppingCart = () => {
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
                    <tr>
                        <td>
                            <div className={styles.imageContainer}>
                            <Image src="/assets/overview4.jpg" layout="fill" alt="" objectFit="cover"></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Caffee Latte</span>
                        </td>
                        <td>
                            <span className={styles.extra}>Extra Milk</span>
                        </td>
                        <td>
                            <span className={styles.price}>5 lei</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>10 lei</span>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            <div className={styles.imageContainer}>
                            <Image src="/assets/overview4.jpg" layout="fill" alt="" objectFit="cover"></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Caffee Latte</span>
                        </td>
                        <td>
                            <span className={styles.extra}>Extra Milk</span>
                        </td>
                        <td>
                            <span className={styles.price}>5 lei</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>10 lei</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.imageContainer}>
                            <Image src="/assets/overview4.jpg" layout="fill" alt="" objectFit="cover"></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Caffee Latte</span>
                        </td>
                        <td>
                            <span className={styles.extra}>Extra Milk</span>
                        </td>
                        <td>
                            <span className={styles.price}>5 lei</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>10 lei</span>
                        </td>
                    </tr>   
                    </tbody>                 
                </table>

            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>20lei
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>0lei
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>20lei
                    </div>

                    <button className={styles.button}>CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart