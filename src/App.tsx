import React from "react"
import GlobalStyle from "./assets/global.style"
import { RouterComponent } from "./pages/RouterComponent"

const App = () => {
    return (
        <React.StrictMode>
            <RouterComponent />
            <GlobalStyle />
        </React.StrictMode>
    )

}
export default App