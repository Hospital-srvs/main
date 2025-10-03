// import "../../assets/css/footer.css";
import "../../assets/css/Footer.css"
import newlogo from "../../assets//images/logo/newlogo.png";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegCalendarDays } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="insideFooter">
          <div className="footerWidget">
            {/* image logo footer */}
            <img src={newlogo} alt="" className="logo logo1" />

            <p>Shree Radha Vallabh Super Speciality Hospital, Dehradun</p>
            <p className="de">Empowering Health, Transforming Lives</p>
            <p>
              Delivering comprehensive super speciality care under one roof, we
              combine advanced technology, expert doctors, and compassionate
              service.
            </p>

            <div className="socialIcon">
              <a
                href="https://www.facebook.com/people/Shree-Radha-Vallabh-Superspeciality-Hospital/61573830445084/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="footerSocialIcon" />
              </a>
              <a
                href="https://www.instagram.com/srv_hospital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="footerSocialIcon" />
              </a>
            </div>
          </div>
          <div className="footerWidget">
            <h2>Quick Links</h2>

            <NavLink className="none" to="/">
              <p>Home</p>
            </NavLink>
            <NavLink className="none" to="/about">
              <p>About Us</p>
            </NavLink>
            <NavLink className="none" to="/doctors">
              <p>Our Team</p>
            </NavLink>

            <NavLink className="none" to="/contact">
              <p>Contact Us</p>
            </NavLink>

            <NavLink className="noneNav" to="appointment">
              <button className="appointment">
                <p>Book Appointment</p>
                <FaRegCalendarDays className="ba" />
              </button>
            </NavLink>
          </div>
          <div className="footerWidget">
            <h2>Contact Details</h2>
            <p>
              <IoLocationSharp className="footerIcon" /> Shimla Bypass
              Chowk,Opp. Axis Bank, &nbsp;&nbsp; Near Hilton School Backgate, Dehradun(UK)
            </p>
            <p>
             
                <IoIosMail className="footerIcon" />
              
              info@radhavallabhhospital.com
            </p>
            <p id="call">
              <IoCall className="footerIcon" /> +0135-3649209
              <span>+919121887870 </span>
              <span>+91 9259744218 </span>
            
            </p>
          </div>
          <div className="footerWidget">
            <h2>Location</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.038976712202!2d77.99520617698714!3d30.29295200675124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b1d47663355%3A0xabbb2a263f6ff5f8!2sShree%20Radha%20Vallabh%20Superspeciality%20Hospital%20-%20Urologist%20Dehradun%2FOncologist%2FGeneral%20Surgeon%2FOrthopedics%20Hospital%20In%20Dehradun!5e0!3m2!1sen!2sin!4v1747813590065!5m2!1sen!2sin"
              width=""
              height=""
              style={{ border: "0", height: "250px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
};
