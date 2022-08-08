import { Component } from "react";

const styles = 
{
    title:
    {
        textAlign:"center",
        marginTop:"20px"
    }
}

class Title extends Component
{
    render()
    {
        return(
            <h1 style = {styles.title}>Tienda</h1>
        );
    }
}

export default Title;