import React, {Component} from "react";


class Welcome extends Component {
    render(){
        return(
            <div className="text-center">
                <h2>Welcome to..</h2>
                <img src="/rentera/rentera-black.png" width="300px"></img>
            <div className="text-center">
            <a href="/signin"><button className="btn btn-dark text-center">Please sign in</button></a>
            </div>
            </div>
        );
    }
}

export default Welcome;