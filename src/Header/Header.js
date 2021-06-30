import React  from 'react'
import './Header.css'



class Header extends React.Component {

    cliquer = (destination) => {
        console.log("navigation vers " + destination);
    }


    render () {
        console.log(this.props)
        return (
            <nav>
                <ul className='liste'>
                    <li onClick={() => this.cliquer('accueil')} className='items'>Accueil</li>
                    <li onMouseOver={() => this.cliquer('services')} className='items'>Services</li>
                    <li onDoubleClick={() => this.cliquer('contact')} className='items'>Contact</li>
                </ul>
            </nav>
        )
    }
}


export default Header;
