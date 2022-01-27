import React from 'react';
import './Contact.css' ;
const Contact = () => {
    return (
        <div id="contact" className="container contact-container mb-5">
            
            <h1 className="mb-3"> We Provide Only the Best Tours</h1>
            <p className="mb-4">With more than 230 trips to worldwide destinations, including Europe, North  Central, South America, Asia, Australia New Zealand, we continue to offer new ways and the best tours for traveling every year.</p>
            <input className="form-control form-control-sm p-4 mb-5" type="text" placeholder="Write your question...." />
            <button className="btn btn-success p-3"> Get In Touch </button>
        </div>
    );
};

export default Contact;