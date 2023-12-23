import React from "react";
import ReactDOM from "react-dom/client";
import './../index.css'




// React.createElement => Object => HTMLElement(render) 
// babel converts into React.createElement => React Element js-object => HTMLElement(render)
// const jsx = (<h1 className="heading" id="heading" tabIndex={2}>Heading in react</h1>);

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Card</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestoreCard = (props) => {
    console.log(props);
    return (
        <>
            <div className="res-card" style={styleCard}>
                <img className="res-logo" src={props.img} alt="" />
                <h3>{props.resName}</h3>
                <h5>{props.cuisine}</h5>
                <h5>{props.star} Star</h5>
                <h4>{props.delivery} mins</h4>
            </div>
        </>
    )
}

const Body = () => {
    return (
        <>
            <div className="body">
                <div className="search">
                    Search
                </div>
                <div className="res-container">
                    <RestoreCard resName="Megana Foods"
                        img="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg"
                        cuisine="Noodles, North Indain, Chineses, Asian"
                        star="4.5"
                        delivery="34 mins"
                    />
                    <RestoreCard resName="JFC Foods"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajF8HOwuJg1t83F3ThYClIW9xp4JkZnp82e74TKJjfVgqrnR5W1_r9I2KH31CZVaaf_o&usqp=CAU"
                        cuisine="Burger, South Indain, American, Asian"
                        star="4.2"
                        delivery="30 mins"
                    />
                </div>
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <div className="App">
                <Header />
                <Body />
            </div>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
