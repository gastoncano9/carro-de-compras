import { Component } from 'react';
import  Producto  from '../componentes/Producto';

const styles = 
{
    productos:
    {
        display:"flex",
        justifyContent:"center"
    }
}

class Productos extends Component
{
    render()
    {   
        //esto es un destructuring 
        //y lo que hace es tomar las propiedades con los nombres
        //que estan dentro de this.props
        const { productos, agregarAlCarro } = this.props;//Le estamos diciendo que las propiedades que le pasamos van a ser esas

        return (
            <div style = {styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro = {agregarAlCarro}
                        key = {producto.nombre}
                        producto = {producto}
                    />)}
            </div>
        );
    }
}

export default Productos;