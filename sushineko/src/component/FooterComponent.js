import React from 'react';


const Footer = (props) =>{
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        Warning:All the food prepared by master chef Neko<i className="fa fa-utensils" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <h3>Social Media</h3>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;