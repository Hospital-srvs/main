import { useState } from 'react';
import contactimg from '../assets/images/all images/contact-us-img.png';
import { Breadcrum } from '../components/ui/Breadcrum';


export const Appointment = () => {


    const handelFormSubmit = (formData) => {

        // e.preventDefault();
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);

        const {name, email, contact, date, message} = formInputData;

        const wUrl = (`https://wa.me/+919259744218?text=I%20${name}%20email%20${email}%20mobile%20number%20is%20${contact}%20and%20date%20is%20$%${date}%20and%20${message}`)

         window.open(wUrl, "_blank");
        
    }


    return<>

        <Breadcrum title="Appointment"/>

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