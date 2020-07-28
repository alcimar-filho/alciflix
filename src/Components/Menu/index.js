import React from 'react'
import logo from '../../Assets/img/Alciflix-logo.png'
import './menu.css'
//import './Components/ButtonLink'
//import ButtonLink from './Components/ButtonLink'
import Button from '../Button'

function Menu(){
    return(
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={logo} alt='logo da Alciflix'></img>
            </a>
            <Button href='/'>Novo vídeo</Button>
        </nav>
    );
}

export default Menu;