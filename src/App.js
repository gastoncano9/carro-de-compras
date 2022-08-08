import { Component} from 'react';
import  Productos  from './componentes/Productos';
import Title from './componentes/Title';
import Navbar from './componentes/Navbar';

class App extends Component
{
  state = 
  {
    productos: 
    [
      {
        nombre:'tomate',
        precio:1500,
        imagen:'../imagenes-productos/tomate.jpg'
      },
      {
        nombre:'lechuga',
        precio:1000,
        imagen:'../imagenes-productos/lechuga.jpg'
      },
      {
        nombre:'arbeja',
        precio:2000,
        imagen:'../imagenes-productos/arbejas.jpg'
      }
    ],

    carro:[],

    esCarroVisible:false
  };

  agregarAlCarro = (producto) =>
  {
    const { carro } = this.state;

    if(carro.find(x => x.nombre === producto.nombre))
    {
      const nuevoCarro = carro.map(x => x.nombre === producto.nombre
        ?
        ({
          ...x,
          cantidad: x.cantidad + 1
        })
        :x)

      return this.setState({carro:nuevoCarro});
    }

    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad:1
      })
    });
  }

  mostrarCarro = () =>
  {
    if(!this.state.carro.length)
    {
      return
    }
    this.setState({esCarroVisible:!this.state.esCarroVisible});
  }

  render()
  {
    const {esCarroVisible} = this.state;

    return (
      <div>
        <Navbar 
        carro = {this.state.carro}
        esCarroVisible = {esCarroVisible}
        mostrarCarro = {this.mostrarCarro}
        />
        <Title/>
        <Productos
        //aca le estamos pasando las propiedades que van a tener cuando
        //llamen a la clase Productos
          agregarAlCarro = {this.agregarAlCarro}
          productos = {this.state.productos}
        />
      </div>
    );
  }
}

export default App;
