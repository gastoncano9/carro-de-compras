import { Component } from 'react';
import Button from './Button';

const styles = 
{
    producto:
    {
        width:"20%",
        border:"1px solid blue",
        borderRadius:"5px",
        margin:"20px",
        padding:"10px",
        textAlign:"center"
    },

    img:
    {
        width:"100%"
    }
}

class Producto extends Component
{
    render()
    {   
        //usando un destructuring para que producto tome las props
        //que le pasamos en la clase de productos
        const { producto, agregarAlCarro } = this.props;

       return(
        <div style = {styles.producto}>
            <img style = {styles.img} alt = {producto.naombre} src = {producto.imagen}/>
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <Button onClick = { () => agregarAlCarro(producto)}>
                Agregar al carro
            </Button>
        </div>
       )
    }
}

export default Producto;