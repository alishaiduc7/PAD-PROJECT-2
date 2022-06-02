import styles from "../../styles/Admin.module.css"
import Image from "next/image";
import axios from "axios";
import {useState} from "react";
import AddButton from "../../components/AddButton";
import Add from "../../components/Add";
const Index = ({orders,products, admin}) => {
    const [productsList, setProductsList] = useState(products);
    const [ordersList, setOrdersList] = useState(orders);
    const [close, setClose] = useState(true);
    const status = ["preparing", "on the way", "delivered"];

    const handleDelete = async (id)=>{
        try{
            const res = await axios.delete("http://localhost:3000/api/products/"+id);
            setProductsList(productsList.filter(product => product._id !== id));
        }catch(err){
            console.log(err);
        }
    };
    const handleStatus = async (id)=>{
        const item=ordersList.filter(order=>order._id==id)[0];
        const currentStatus=item.status;
        try{
            const res=await axios.put("http://localhost:3000/api/orders/"+id,{status: currentStatus+1});
            setOrdersList([
                res.data,
                ...ordersList.filter(order => order._id !== id),
            ]);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                {admin && <AddButton setClose={setClose}/>}
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {productsList.map((product)=>(
                        <tbody key={product._id}>
                            <tr className={styles.trTitle}>
                                <td>
                                    <Image src={product.image} width={50} height={50} alt="" objectFit="cover"></Image>
                                </td>
                                <td>{product._id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>${product.prices[0]}</td>
                                <td>
                                    <button className={styles.button}>Edit</button>
                                    <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                {!close && <Add setClose={setClose}/>}
            </div>
            <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
            <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {ordersList.map((order)=>(
                    <tbody key={order._id}>
                        <tr className={styles.trTitle}>
                            <td>{order._id}</td>
                            <td>{order.customer}</td>
                            <td>${order.total_price}</td>
                            <td>{order.payment_method === 0 ? <span>cash</span> : <span>paid</span>}</td>
                            <td>{status[order.status]}</td>
                            <td>
                                <button onClick={()=>handleStatus(order._id)}>Next Stage</button>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx)=>{
    const myCookie = ctx.req?.cookies || "";
    let admin=true;
    if(myCookie.token !== process.env.TOKEN){
        admin=false;
        return{
            redirect:{
                destination:"/admin/login",
                permanent:false,
            }
        };
    }
    const productRes = await axios.get("http://localhost:3000/api/products");
    const orderRes = await axios.get("http://localhost:3000/api/orders");

    return{
        props:{
            orders: orderRes.data,
            products: productRes.data,
            admin
        },
    };
};
export default Index;