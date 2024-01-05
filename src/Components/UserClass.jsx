import React from "react"


class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                name: "User_Name",
                location: "Location"
            }
        }
        //console.log(this.props.name + " child Constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/injamamulhak0804");
        const json = await data.json();
        this.setState ({
            userInfo: json
        })
    }

    render(){
        //console.log(this.props.name+ "Child Render");
        const {name, location, login} = this.state.userInfo
        return (
        <div className='user-card'>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h4>Contact: {login}@gmail.com</h4>
        </div>
        )
    }
}

export default UserClass
