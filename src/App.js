import React, { Suspense, lazy } from "react";
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



// React.createElement => Object => HTMLElement(render) 
// babel converts into React.createElement => React Element js-object => HTMLElement(render)
// const jsx = (<h1 className="heading" id="heading" tabIndex={2}>Heading in react</h1>);

const Grocery = lazy(() => import('./Components/Grocery'))
const About = lazy(() => import('./Components/About'))

const AppLayout = () => {
    return (
        <>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/about" element={<Suspense><About /></Suspense>} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/grocery" element={<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <AppLayout />
    </BrowserRouter>
)
