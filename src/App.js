import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from './Components/Header';
import Body from './Components/Body';
import './../index.css';
import { BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Card from "./Components/Card";
import Error from "./Components/Error";
import { Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/Redux/appStore";


// React.createElement => Object => HTMLElement(render) 
// babel converts into React.createElement => React Element js-object => HTMLElement(render)
// const jsx = (<h1 className="heading" id="heading" tabIndex={2}>Heading in react</h1>);

const Grocery = lazy(() => import('./Components/Grocery'))
// const About = lazy(() => import('./Components/About'))

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "zamam"
        }
        setUserName(data.name)
    }, [])

    return (
        <>
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: userName }}>
                    <div className="App">
                        <Header />
                        <Routes>
                            <Route path="/" element={<Body />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/grocery" element={<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>} />
                            <Route path="/card" element={<Card />} />
                            <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </UserContext.Provider>
            </Provider>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <AppLayout />
    </BrowserRouter>
)
