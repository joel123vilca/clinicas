
import React, {Component} from 'react'; 
import imagen from '../img/clinica2.jpg';

class Landing extends Component{
    render(){
        return(
            <div>
                <h2 className="titulo-clinica">CLINICA LOSTANAU</h2>
                <table>
                    <tr>
                        <td rowSpan="6" className="contiene-img"><img src={imagen} className="perfil-img" /></td>
                        <td>icono</td>
                        <td>calle bolognesi</td>
                    </tr>
                    <tr>
                        <td>icono</td>
                        <td>calle bolognesi</td>
                    </tr>
                    <tr>
                        <td>icono</td>
                        <td>calle bolognesi</td>
                    </tr>
                    <tr>
                        <td>icono</td>
                        <td>calle bolognesi</td>
                    </tr>
                    <tr>
                        <td>icono</td>
                        <td>calle bolognesi</td>
                    </tr>
                    <tr>
                        <td>icono</td>
                        <td>calle bolognesi</td>
                    </tr>
                    
                </table>
            </div>
        )
    }
}

export default Landing;