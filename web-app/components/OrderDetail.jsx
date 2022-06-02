import styles from "../styles/OrderDetail.module.css"
import {useState} from "react";


const OrderDetail = ({total,createOrder}) => {
  
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
  
    const handleClick= () => {
        createOrder(
            {
            customer, 
            address,
            total: total,
            status: 0,
            paymethod: 1
            }
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay {total} lei at delivery.</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name and Surname</label>
                    <input placeholder="Enter your full name" type="text" className={styles.input} onChange={(e) => setCustomer(e.target.value)}></input>  
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Phone number</label>
                    <input type="text" placeholder="Enter your phone number" className={styles.input} >
                    </input>
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea rows={3} cols={30} type="text" placeholder="Enter your address" className={styles.textarea} 
                              onChange={(e) => setAddress(e.target.value)}>        
                    </textarea>
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    );

};

export default OrderDetail