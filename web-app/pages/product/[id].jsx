import styles from "../../styles/Product.module.css"
import Image from "next/image"
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({product}) => {

    const [price, setPrice] = useState(product.prices[0]);
    const [size, setSize] = useState(0);
    const [extra, setExtra] = useState([]); //using this in order to store our extras 
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    // const product = {
    //     id: 1,
    //     img: "/assets/overview1.jpg",
    //     name: "LATTE",
    //     price: [18, 20, 22],
    //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum, aut sit error, qui tempore labore accusamus reprehenderit, ipsam molestiae dolor assumenda? Ratione quo sed pariatur soluta facilis, rem assumenda!"
    // };

    const changePrice = (number) => {
        setPrice(price + number);
    };  

    //calculate the difference between the product price and product price size and then add it to the actual price
    const handleSize = (sizeIndex) => {
        const diff = product.prices[sizeIndex] - product.prices[size];
        setSize(sizeIndex);
        changePrice(diff);
    };

    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if(checked) {
            changePrice(option.price);
            //taking all the previous items in our array and add the new option
            setExtra(prev =>[...extra, option]);
              
        } else {
            changePrice(-option.price);
            //we delete from our current array the extra that matches with the option id
            setExtra(extra.filter(extra=>extra._id !== option._id));
        }
    };
    const createCartAndAddProduct = async(data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/cart", data);
            if(res.status === 201) {
                //dispatch(reset());
                //router.push(`/orders/${res.data._id}`);
                console.log("successful");
            }
        } catch (err) {
            console.log(err);
        }
    }
    const handleClick = () => {
        createCartAndAddProduct(
            {
                product:[{...product}],
                extra,
                price,
                quantity
            }
        );
        dispatch(addProduct({...product,extra,price,quantity}))
    }

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={product.image} layout="fill" alt="" ></Image>
                </div>
            </div>

            <div className={styles.right}>
                <h1 className={styles.title}>{product.title}</h1>
                <span className={styles.prices}>${price}</span>
                <p className={styles.desc}>{product.description}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>handleSize(0)}>
                        <Image src="/assets/cup.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>handleSize(1)}>
                        <Image src="/assets/cup.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>handleSize(2)}>
                        <Image src="/assets/cup.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>

                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    {product.extras.map(option => (
                        <div className={styles.option}key={option._id} >
                            <input
                                type="checkbox"
                                id={option.text}
                                name={option.text}
                                className={styles.checkbox}
                                onChange={(e) => handleChange(e, option)}
                            ></input>
                            <label htmlFor="double">{option.text}</label>
                        </div>
                    ))}

                    {/* <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="topping"
                            name="topping"
                            className={styles.checkbox}
                        ></input>
                        <label htmlFor="topping">Extra Topping</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="sugar"
                            name="sugar"
                            className={styles.checkbox}
                        ></input>
                        <label htmlFor="sugar">Extra Sugar</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="milk"
                            name="milk"
                            className={styles.checkbox}
                        ></input>
                        <label htmlFor="milk">Vegan Milk</label>
                    </div> */}
                </div>
                <div className={styles.add}>
                    <input onChange={(e)=> setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity}></input>
                    <button className={styles.button} onClick={handleClick}>Add to Cart</button>
                </div>
            </div>

        </div>
    );
};

//params = the id for the product in every link
export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props: {
        product: res.data,
  
      },
    };
  };

export default Product