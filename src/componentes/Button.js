import { Component } from "react";

const styles =
{
    button:
    {
        backgroundColor:"blue",
        color:"white",
        padding:"5px",
        cursor:"pointer",
        borderRadius:"15px",
        fontStyle:"italic",
        fontWeight:"bold"
    }
}

class Button extends Component
{
    render()
    {
        return(
            <button style = {styles.button} {...this.props}/>
        );
    }
}

export default Button;