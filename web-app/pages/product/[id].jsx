import styles from "../../styles/Product.module.css"
import Image from "next/image"
import { useState } from "react";
const Product = () => {

    const [size, setSize] = useState(0);
    const product = {
        id: 1,
        img: "/assets/overview1.jpg",
        name: "LATTE",
        price: [18, 20, 22],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum, aut sit error, qui tempore labore accusamus reprehenderit, ipsam molestiae dolor assumenda? Ratione quo sed pariatur soluta facilis, rem assumenda!"
    };

    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={product.img} layout="fill" alt="" ></Image>
                </div>
            </div>

            <div className={styles.right}>
                <h1 className={styles.title}>{product.name}</h1>
                <span className={styles.price}>${product.price[size]}</span>
                <p className={styles.desc}>{product.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                        <Image src="/assets/cup.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                        <Image src="/assets/cup.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                        <Image src="/assets/cup.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>

                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        ></input>
                        <label htmlFor="double">Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
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
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}></input>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Product