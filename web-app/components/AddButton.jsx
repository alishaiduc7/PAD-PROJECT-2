import styles from "../styles/AddButton.module.css";
const AddButton = ({setClose}) => {
    return <div onClick={() => setClose(false)} className={styles.addButton}>Add new product</div>
};

export default AddButton;