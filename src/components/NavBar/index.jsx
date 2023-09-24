import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget'
import style from './style.module.css'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"> 
            <div className="container-fluid">
                <Link to='/'><img src='../img/nintendo.png' alt='logo nintendo' className={style['logo_home']}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='category/nuevo' className={style['nav_btn']}>Nuevos Juegos</Link>
                        <Link to='category/clasico' className={style['nav_btn']}>Juegos Clasicos</Link>
                        <Link to='category/lanzamiento' className={style['nav_btn']}>Proximos lanzamientos</Link>
                        <a className="nav-link" href="#"><CartWidget/></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar