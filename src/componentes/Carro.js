import  { Component } from 'react';
import Bubble from './Bubble';
import Detalles from './Detalles';

const styles =
{
    carro:
    {
        border:"none",
        padding:"15px",
        background:"green",
        borderRadius:"15px",
        cursor:"pointer"
    },
    bubble:
    {
        position:"relative",
        left: 6.5,
        top: 15
    }
}

class Carro extends Component
{
    render()
    {
        const { carro, esCarroVisible, mostrarCarro } = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad , 0);

        return(
            <div>
                <span style = {styles.bubble}>
                    {cantidad > 0 ? <Bubble value = {cantidad}/>:
                    null
                    }
                </span>

                <button onClick = {mostrarCarro} style = {styles.carro}>
                    Carro
                </button>

                {esCarroVisible ? <Detalles carro = {carro}/>:null}
            </div>
        );
    }
}

export default Carro;