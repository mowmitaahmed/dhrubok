import React from 'react';
import Footer from '../Footer';
import SideBar from '../SideBar';
import Form from './Form';

const FormArea = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">

                <SideBar />

                <div className="col-sm-9 col-sm-offset-3 col-md-10 offset-md-2 main">
                    <h1 className="page-header">Form</h1>
                    <Form />
                    <Footer />
                </div>
            </div>
        </div>
        </>
    );
};

export default FormArea;