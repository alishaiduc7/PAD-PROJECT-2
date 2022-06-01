import Layout from '../components/Layout'
import '../styles/globals.css'
import Footer from '../components/Footer';
import store from "../redux/store"
import {Provider} from "react-redux"
//using this file for navigation through app pages (with layout - children)
function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
      <Footer></Footer>
    </Layout>
  </Provider>
  );
}
  
export default MyApp
