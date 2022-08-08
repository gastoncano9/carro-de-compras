import { Component } from "react";

const styles =
{
    detallesCarro:
    {
        background:"white",
        color:"black",
        position:"absolute",
        marginTop:"20px",
        right:0,
        width:"300px",
        height:"250px",
        borderRadius:"15px 0px 0px 15px"
    },
    lista:
    {
        margin:0,
        padding:0,
        listStyle:"none",
    },
    producto:
    {
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        marginTop:35,
        borderBottom:"1px solid grey"
    }
}

class Detalles extends Component
{
    render()
    {
        const { carro } = this.props;

        return(
            <div style = {styles.detallesCarro}>
                <ul style = {styles.lista}>
                    {carro.map(x => <li style = {styles.producto} 
                        key = {x.nombre}>{x.nombre}
                        <img alt = {x.nombre} src = {x.imagen}
                         width = {70} height = {40}/>
                        <span>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        );
    }
}

export default Detalles; 