import React from 'react';
import './Footer.css';
import linkedIn from './../../assests/linkedln.png'
import github from './../../assests/github.png'
import gmail1 from './../../assests/gmail1.jpg';

const Footer = () => {
    return ( 
        <div className="footer-container">
        <div className="footer-links">
                <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/harshitsaini-12/">
                    <img src={linkedIn} alt="" className="footer-link-img" />
                    LinkedIn
                </a>
                <a className="footer-link" target="_blank" href="https://github.com/Harshitsaini-12">
                    <img src={github} alt="" className="footer-link-img" />
                    Github
                </a>
                <a className="footer-link" target="_blank" href="https://sleepy-shore-99772.herokuapp.com/">
                    <img src={gmail1} alt="" className="footer-link-img" />
                    NewsLetter
                </a>
        </div>
        </div>
     );
}
 
export default Footer;