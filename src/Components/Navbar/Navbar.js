import React, {Component} from 'react';
import logo from '../../images/logo.jpg'
import style from './Navbar.module.css'
import {Link} from "react-router-dom";
import {FaAlignRight} from "react-icons/all";

class Navbar extends Component {
    state = {
        isOpen: true
    };

    toggleNadler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        return (
            <nav className={style.navbar}>
                <div className={style.logoContainer}>
                    <Link to="/">
                        <img className={style.logo} src={logo} alt="Room resort"/>
                    </Link>
                </div>
                <div className={style.navigation}>
                    <div className={this.state.isOpen ? style['navigation-section'] : style['navigation-show']}>
                        <Link className={style['nav-link']} to="/">Home</Link>
                        <Link className={style['nav-link']} to="/rooms">Rooms</Link>
                    </div>
                    <button onClick={this.toggleNadler} className={style['nav-btn']} type='button'><FaAlignRight/></button>
                </div>
            </nav>
        )

    }
}

export default Navbar;