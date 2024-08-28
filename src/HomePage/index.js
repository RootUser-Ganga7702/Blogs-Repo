import { Component} from "react"
import SideNavbar from "../TopNavSide";
import "./index.css"
import AnimatedList from "../AddBlog";


class WhatIsWhat extends Component{

    render(){
    return (
        <div className="whatIsWhat">
        <SideNavbar />
        <div style={{ marginLeft: '260px', padding: '5px' }}>
            <AnimatedList /> 
        </div>
    </div>
 )
}
}

export default WhatIsWhat;