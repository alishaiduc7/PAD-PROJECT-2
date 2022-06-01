import ProductList from "../components/ProductList"
import axios from "axios"

export default function Menu({productList}){
    return (
        <ProductList productList={productList}></ProductList>
    );
}

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        productList: res.data,
      },
    };
  };