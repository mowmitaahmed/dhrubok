import React from 'react';

const Footer = () => {
    return (
        <div className="border-top border-secondary fixed-bottom col-sm-9 col-sm-offset-3 col-md-10 offset-md-2 main">
            <div className="d-flex justify-content-around">
                <div className="pe-5">
                    <h6>University:</h6>
                    <p>Mowmita Ahmed Chowdhury</p>
                </div>
                <div className="pe-5">
                    <h6>Subject:</h6>
                    <p>Computer Science and Engineering</p>
                </div>
                <div>
                    <h6>Passing Year:</h6>
                    <p>2017</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;