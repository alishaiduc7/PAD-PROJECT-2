import styles from "../styles/HomeOverview.module.css";
import Image from "next/image";
import {useState} from "react";

const HomeOverview = () => {

    //when clicking the arrow, the state will be increasing/decreasing
    const [index, setIndex] = useState(0);
    const  images = [
        "/assets/overview1.jpg",
        "/assets/overview2.jpg",
        "/assets/overview3.jpg",
    ];

    const handleArrow = (direction) => {
        if(direction === "l") {
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === "r") {
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
    // console.log(index)
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={() => handleArrow("l")}>
                <Image src="/assets/chevron-left.png" alt="" width="64" height="64" objectFit="contain"></Image>
            </div>

            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                    {images.map((img, i) => (
                        <div className={styles.imageContainer} key={i}>
                            <Image src={img} layout='fill' alt="" objectFit="contain" ></Image>
                        </div>
                    ))} 
                
            </div>

            <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow("r")} >
                <Image src="/assets/chevron-right.png" alt="" width="64" height="64" objectFit="contain"></Image>
            </div>
                
        </div>
    )
}

export default HomeOverview