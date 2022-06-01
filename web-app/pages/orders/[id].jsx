import styles from "../../styles/Order.module.css"
import Image from "next/image"
import axios from "axios"
const Order = ({order}) => {

    const status = order.status;

    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inProgress
        if(index - status > 1) return styles.undone
    }

    return (
    <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tbody>
                        <tr className={styles.tr}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>
                                <span className={styles.id}>123445454342</span>
                            </td>
                            <td>
                                <span className={styles.name}>
                                    Jon Doe   
                                </span>    
                            </td> 
                            <td>
                                <span className={styles.address}>Timisoara</span>    
                            </td> 
                            <td>
                                <span className={styles.total}>$36</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/assets/payment.png" width={30} height={30} alt=""></Image>
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/assets/check-mark.png" width={20} height={20} alt=""></Image>
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/assets/preparing.png" width={30} height={30} alt=""></Image>
                        <span>Preparing</span>
                            <div className={styles.checkedIcon}>
                                <Image className={styles.checkedIcon} src="/assets/check-mark.png" width={20} height={20} alt=""></Image>
                            </div> 
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/assets/delivery.png" width={30} height={30} alt=""></Image>
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/assets/check-mark.png" width={20} height={20} alt=""></Image>
                        </div> 
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/assets/delivered.png" width={30} height={30} alt=""></Image>
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image className={styles.checkedIcon} src="/assets/check-mark.png" width={20} height={20} alt=""></Image>
                        </div> 
                    </div>
                </div>    
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <div className={styles.totalTextTitle}>Subtotal:</div>$79
                    </div>
                    <div className={styles.totalText}>
                        <div className={styles.totalTextTitle}>Discount:</div>$0
                    </div>
                    <div className={styles.totalText}>
                        <div className={styles.totalTextTitle}>Total:</div>$79
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
      props: {
        order: res.data,
  
      },
    };
  };


export default Order