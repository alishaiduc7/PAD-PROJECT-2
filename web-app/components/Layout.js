import NavigationBar from "./NavigationBar"

//children is used by app.js
const Layout = ({children}) => {
    return (
        <div>
            <NavigationBar/>
            {children}
        </div>
    )
}

export default Layout