import Layout from '../components/Layout'
import '../styles/globals.css'

//using this file for navigation through app pages (with layout - children)
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />

  </Layout>
  );
}
  
export default MyApp
