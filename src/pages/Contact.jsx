import { IoCall, IoLocationSharp } from 'react-icons/io5';
import '../assets/css/Contact.css';
import {Breadcrum} from '../components/ui/Breadcrum';
import { IoIosMail } from 'react-icons/io';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Contact = () => {


    const handelFormSubmit = (formData) => {

        // e.preventDefault();
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);

        const {name, email, contact, date, message} = formInputData;

        const wUrl = (`https://wa.me/+919259744218?text=I%20${name}%20email%20${email}%20mobile%20number%20is%20${contact}%20and%20date%20is%20$%${date}%20and%20${message}`)

         window.open(wUrl, "_blank");
        
    }



    return<>

        <Breadcrum title="Contact Us"/>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.038976712202!2d77.99520617698714!3d30.29295200675124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b1d47663355%3A0xabbb2a263f6ff5f8!2sShree%20Radha%20Vallabh%20Superspeciality%20Hospital%20-%20Urologist%20Dehradun%2FOncologist%2FGeneral%20Surgeon%2FOrthopedics%20Hospital%20In%20Dehradun!5e0!3m2!1sen!2sin!4v1747813590065!5m2!1sen!2sin" width="" height="" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="contact-first">
            <div className="inside-contact-first">
                <div className="inside-contact-first-card">
                    <div className="contact-first-icon">
                        <IoLocationSharp className='contact-icon'/>
                    </div>
                    <div className="contact-first-content">
                        <h2>Help Line</h2>
                        <p>+91-9121887870,  0135-3649209, +91-9259744218</p>
                    </div>
                </div>
                <div className="inside-contact-first-card">
                    <div className="contact-first-icon">
                        < IoIosMail className='contact-icon'/>
                    </div>
                    <div className="contact-first-content">
                        <h2>Location</h2>
                        <p>Shimla Bypass Chowk,Opp. Axis Bank, Near Hilton School Backgate, Dehradun(uK)</p>
                    </div>
                </div>
                <div className="inside-contact-first-card">
                    <div className="contact-first-icon">
                        <IoCall className='contact-icon'/>
                    </div>
                    <div className="contact-first-content">
                        <h2>Email Address</h2>
                        <p>info@radhavallabhhospital.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="tenth-section">
        
                    <p>Fill The Form</p>
                    <h2>Contact Form</h2>
        
                    <div className="inside-tenth-section">
                            
                            <div className="inside-tenth-card i-t-c-2">
                                <form action={handelFormSubmit}>
        
                                    <div className="form-div">
                                        <input name='name' type="text" placeholder='Name' required/>
                                        <input type="text" name='email' placeholder='Email' />
                                    </div>
                                    <div className="form-div fd">
                                        <input type="text" name='contact' placeholder='Your Phone' required />
                                        <input type="date" name='date' placeholder='' />
                                    </div>
                                    <div className="form-div">
                                        <textarea placeholder='Your Message' name="message" id=""></textarea>
                                    </div>
        
                                    {/* <NavLink to={wUrl}> */}
                                        <button type='submit' className="appointment a1 a1111">Send</button>
                                    {/* </NavLink> */}
        
                                </form>
                            </div>
                    </div>
                </div>
        

    </>
}