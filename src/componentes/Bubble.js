import { Component } from "react";

const styles =
{
    bubble:
    {
        background:"red",
        width:"20px",
        padding:"2px 10px",
        borderRadius:"50%",
        color:"white"
    }
}

class Bubble extends Component
{
    getNumber(n)
    {
        if(!n) return ''

        return n > 9 ? '9+':n;
    }

    render()
    {
        const {value} = this.props;

        return(
            <span style = {styles.bubble}>{this.getNumber(value)}</span>
        );
    }
}

export default Bubble;