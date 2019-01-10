import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logoBlack from '../images/mf-logo-black.svg'

const Footer = () => {

    return (
        <footer className='containerFooter'>
            <hr />
            <div className='logoBlack'>
                <Link to={'/'}> <img src={logoBlack} alt='logo imagen' /></Link>
            </div>
            <hr className='brFooter' />
            <div className='menuFooter'>
                <div className="company">
                    <h2 className='titleFooter'>Company</h2>
                    <h3 className='subFooter'><Link to="/about">About</Link></h3>
                    <h3 className='subFooter'><Link to="/">Press</Link></h3>
                    <h3 className='subFooter'><Link to="/terms">Terms+Conditions</Link></h3>
                </div>
                <div className="categories">
                    <h2 className='titleFooter'>Categories</h2>
                    <h3 className='subFooter'><Link to="/category/Seating">Seating</Link></h3>
                    <h3 className='subFooter'><Link to="/category/Tables">Tables</Link></h3>
                    <h3 className='subFooter'><Link to="/category/Miscellaneous">Misc</Link></h3>
                </div>
                <div className='social'>
                    <h2 className='titleFooter'>Social</h2>
                    <a className='socialIcon' href="https://instagram.com"><i className="fa fa-instagram"></i></a>
                    <a className='socialIcon' href="https://twitter.com"><i className="fa fa-twitter"></i></a>
                    <a className='socialIcon' href="https://pinterest.com"><i className="fa fa-pinterest-p"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;