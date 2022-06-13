import styles from "../styles/ShoppingCart.module.css"
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import {useState} from "react";
import {useRouter} from "next/router";
import { useDispatch, useSelector } from "react-redux";
import OrderDetail from "../components/OrderDetail";

const ShoppingCart = ({cart_products,totalSum}) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const router = useRouter();
    const [open, setOpen]= useState(false);

    const createOrder = async(data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/orders", data);
            if(res.status === 201) {
                //dispatch(reset());
                router.push(`/orders/${res.data._id}`);
            }
        } catch (err) {
            console.log(err);
        }
        deleteCart();
    }
    const deleteCart = async() => {
        const cartRes = await axios.get("http://localhost:3000/api/cart");
        cartRes.data.map((product)=> deleteCartItem(product._id));
    }
    const deleteCartItem = async(id)=>{
        try{
            const res = await axios.delete("http://localhost:3000/api/cart/"+id);
        }catch(err){
            console.log(err);
        }
    }

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
                        
                    {cart_products.map((product) => (
                    <tr className={styles.tr} key={product._id}>
                        <td>
                            <div className={styles.imageContainer}>
                            <Image src={product.product[0].image} layout="fill" alt="" objectFit="cover"></Image>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>{product.product[0].title}</span>
                        </td>
                        <td>
                            <span className={styles.extra}>{product.extra.map(a => (
                                <span key = {a._id}>{a.text};    </span>
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
                        <b className={styles.totalTextTitle}>Subtotal:</b>{totalSum} lei
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>0 lei
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>{totalSum} lei
                    </div>
                    {/* <Link href='/orders/123'> */}
                    <button className={styles.button} onClick={() => setOpen(true)}>CHECKOUT</button>
                {/* </Link> */}
                </div>
            </div>
            {open && (
            <OrderDetail total={totalSum} createOrder={createOrder}></OrderDetail>
            )}
        </div>
    );
};
export const getServerSideProps = async ()=>{
    const cartRes = await axios.get("http://localhost:3000/api/cart");
    const total = cartRes.data.reduce((a,v) => a = a + v.price * v.quantity , 0);
    return{
        props:{
            cart_products: cartRes.data,
            totalSum: total
        },
    };
};
export default ShoppingCart