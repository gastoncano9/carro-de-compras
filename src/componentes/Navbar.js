import { Component } from "react";
import Logo from './Logo';
import Carro from './Carro';

const styles =
{
    navbar:
    {
        display:"flex",
        alignItems:"center",
        height:"100px",
        backgroundColor:"#2B7CD3",
        padding:"0 50px",
        justifyContent:"space-between"
    }
}

class Navbar extends Component
{
    render()
    {
        const {carro, esCarroVisible, mostrarCarro} = this.props;

        return(
            <nav style = {styles.navbar}>
                <Logo/>
                <Carro 
                carro = {carro}
                esCarroVisible = {esCarroVisible}
                mostrarCarro = {mostrarCarro}
                />
            </nav>
        );
    }
}

export default Navbar;