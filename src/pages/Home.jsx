import '../assets/css/style.css';
import { MdArrowCircleRight } from "react-icons/md";
import w from '../assets/images/all images/w.png';
import half from '../assets/images/all images/half.png'
import halfShape from '../assets/images/all images/half-shape.png';
import { FaUserDoctor, FaRegCalendarDays } from 'react-icons/fa6';
import { Ri24HoursFill } from "react-icons/ri";
import aboutbg from '../assets/images/all images/about-bg.png';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import halfcirlce3 from '../assets/images/all images/half-circle-3.png';
import services from '../assets/api/services.json';
import faq1 from '../assets/images/all images/home-faq.jpg';
import { useState } from 'react';
import blog from '../assets/api/blogs.json';
import { GoArrowRight } from "react-icons/go";
import contactimg from '../assets/images/all images/contact-us-img.png';
import { FaCodePullRequest } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import drAnkur from '../assets/images/all images/drAnkur2.png';
import d2 from '../assets/images/all images/d2.jpg';
import g1 from '../assets/images/all images/g1.jpg';
import g2 from '../assets/images/all images/g2.jpg';
import g3 from '../assets/images/all images/g3.jpg';
import g4 from '../assets/images/all images/g4.jpg';
import { ScrollAnimate } from './ScrollAnimate';
import slugify from 'slugify'

export const Home = () => {
    const visibleCards = 4;
    const [currentIndex, setCurrentIndex] = useState(0);

    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex + visibleCards >= blog.length;



    const handelFormSubmit = (formData) => {

        // e.preventDefault();
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);

        const { name, email, contact, date, message } = formInputData;

        const wUrl = (`https://wa.me/+919259744218?text=I%20${name}%20email%20${email}%20mobile%20number%20is%20${contact}%20and%20date%20is%20$%${date}%20and%20${message}`)

        window.open(wUrl, "_blank");

    }


    const [isActive, setIsActive] = useState(null);

    const activeFaq = (id) => {
        setIsActive(prevId => (prevId === id ? null : id))
    }

    const faq = [
        {
            id: "1",
            title: "Are telemedicine consultations available?",
            content: "Yes, telemedicine consultations are available."
        },
        {
            id: "2",
            title: "Hou much does a consulation cost?",
            content: "Consulatation charges vary depending on the speciality and the doctor's experience. General consultation fees typically range from ₹500 to ₹700"
        },
        {
            id: "3",
            title: "How can I book an appointment?",
            content: "You can book an appointment by calling us at 9259744218, using our online appointment form, or visiting the hospital reception."
        },
        {
            id: "4",
            title: "What payment mode are accepted?",
            content: "We accept cash, credit/debit cards, UPI and digital wallets. Insurance claims are also supported for partnered companies."
        }
    ]

    return <>

        <div className="firstSection">

            <div className="insideFirstSection">
                <div className="insideFirstSectionCard ia">
                    <ScrollAnimate animation="bottom-to-top">
                        <h2>Empowering Health, Transforming Lives</h2>
                        <h1>Advanced Urology & Multispeciality Surgical Excellence</h1>
                        <p>We specialize in state-of-the-art urology and multispeciality surgical care. Backed by modular operation theaters, excellent post-operative care, and advanced ICU support, we are committed to delivering clinical precision, safety, and superior outcomes across every stage of treatment.</p>

                        <NavLink className="noneNav" to="about">
                            <button className="appointment a1">Read More <MdArrowCircleRight className='buttonIcon' /></button>
                        </NavLink>
                    </ScrollAnimate>

                </div>
                <div className="insideFirstSectionCard ia1">
                    <img src={w} className='white-dots' alt="white dots" />
                    <img src={drAnkur} alt="" className="img img1" />
                    <img src={d2} alt="" className="img img2" />
                </div>
            </div>

            <img src={half} alt="half circle" className="half" />
            <img src={halfShape} alt="half shape" className="half-shape" />

        </div>

        <div className="second-section">

            <ScrollAnimate animation="bottom-to-top-1 center">



                <div className="inside-second-section">
                    <div className="inside-second-card isc1">
                        <h2>Get in Touch for <span>Trusted Medical</span> Support</h2>
                        <NavLink className="noneNew" to="/appointment">
                            <button className="second">Make Appointment <FaRegCalendarDays className='ba' /></button>
                        </NavLink>
                    </div>
                    <div className="inside-second-card">
                        <FaUserDoctor className='second-icon' />
                        <h2>Care for Every Stage</h2>
                        <p>Compassionate treatment for all ages under one roof.</p>
                    </div>
                    <div className="inside-second-card">
                        <Ri24HoursFill className='second-icon' />
                        <h2>On Call, Anytime</h2>
                        <p>Immediate medical assistance, 24 hours a day.</p>
                    </div>
                </div>

            </ScrollAnimate>


        </div>


        <div className="third-section">
            <div className="inside-third-section">
                <div className="inside-third-card ia  ii">
                    <img src={aboutbg} className='white-dots white-dots2' alt="white dots" />
                    <img src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/hero-img-1.jpg" alt="" className="img img1 img11" />
                    <img src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/hero-img-2.jpg" alt="" className="img img2 img22" />
                </div>
                <div className="inside-third-card ia1 iaa1">
                    <ScrollAnimate animation="bottom-to-top-1">
                        <h2>we take care of your health</h2>
                    </ScrollAnimate>


                    <ScrollAnimate animation="bottom-to-top-1">
                        <h1>Your Health isn’t just a Responsibility, It’s our Purpose</h1>
                    </ScrollAnimate>

                    <p>Patient-centered care, leveraging expert medical professionals and advanced technology. We prioritize your well-being through ethical, compassionate service, ensuring continuity of care and building trust by taking accountability for your health outcomes.

                    </p>



                    <ScrollAnimate animation="bottom-to-top-1">

                        <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />  Experienced Medical Specialists – Trusted urologists, oncologists, pediatricians, and orthopedic experts.</p>
                        <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' /> Advanced Technology & Facilities  – Equipped with modern diagnostic, surgical, and therapeutic tools.</p>
                        <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />Personalized & Compassionate Care  – Every patient receives tailored treatment focused on long-term wellness.</p>
                        <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' /> Round-the-Clock Emergency Support – 24/7 availability for critical care and urgent medical conditions.</p>
                    </ScrollAnimate>

                    <NavLink className="noneNav" to="about">
                        {/* <button className="appointment a1">Read More <MdArrowCircleRight className='buttonIcon' /></button> */}
                    </NavLink>
                </div>
            </div>
        </div>

        <div className="fourth-section">
            <img src={halfcirlce3} alt="half circle image" className='h3' />
            <div className="inside-fourth-section">
                <div className="inside-fourth-head">
                    <h2>medical services</h2>
                    <h1>Comprehensive Super Speciality Care Under One Roof</h1>
                    <p>Delivering expert care across selected specialties, supported by experienced doctors and modern facilities.</p>

                </div>

                {
                    services.slice(0, 10).map((s, index) => {

                        const { content, id, image, subtitle, title } = s;

                        return (

                            <ScrollAnimate animation="bottom-to-top-1 c3">

                                <div className="inside-fourth-card" key={id}>
                                    <Ri24HoursFill className='f-card-icon' />
                                    <h2>{title}</h2>
                                    <p>{content[0].slice(0, 80) + '...'}</p>


                                    <NavLink className="noneNav" to={`/services/${title}`}>
                                        <button className="new-read">Read More <MdArrowCircleRight className='buttonIcon' /></button>
                                    </NavLink>
                                </div>

                            </ScrollAnimate>


                        )
                    })
                }


            </div>
            {/* <button className="appointment a1">View All <MdArrowCircleRight className='buttonIcon' /></button> */}
        </div>

        <div className="fifthSection">
            <div className="insideFifthSection">

                <div className="abc1">
                    <FaUserDoctor className='appIcon' />
                </div>

                <ScrollAnimate animation="bottom-to-top-1">
                    <div className="app-card">
                        <h2>Open For Appointments</h2>
                        <p>We are delighted to announce that our doors are open, and we are now accepting appointments to serve you better.</p>
                    </div>
                </ScrollAnimate>


                <div className="abc">
                    <ScrollAnimate animation="bottom-to-top-1 ">
                        <NavLink className="noneNav" to="appointment">
                            <button className="appointment a1">Book Now <MdArrowCircleRight className='buttonIcon' /></button>
                        </NavLink>
                    </ScrollAnimate>
                </div>

            </div>
        </div>


        <div className="sixth-section">
            <div className="inside-sixth-section">
                <div className="inside-sixth-card">
                    <h2>how we work</h2>
                    <ScrollAnimate animation="right-to-left">
                        <h1>A Smarter Way to Access Healthcare</h1>
                    </ScrollAnimate>
                </div>

                <div className="inside-sixth-card">
                    <ScrollAnimate animation="bottom-to-top-1 ">
                        <p>We connect you with the right healthcare services, all in one place. Our easy-to-use directory helps you find trusted doctors, book appointments, and get the care you need—quickly and conveniently. Whether it’s routine checkups or specialized treatment, we’re here to guide you every step of the way.</p>
                    </ScrollAnimate>

                </div>
            </div>



            <div className="inside-sixth-section i-s-s">
                <ScrollAnimate animation="bottom-to-top-1 ">
                    <div className="sixth-sub-card">
                        <FaCodePullRequest className='dc-icon' />
                        <p>Submit Request</p>
                    </div>
                </ScrollAnimate>
                <ScrollAnimate animation="bottom-to-top-1 ">
                    <div className="sixth-sub-card">
                        <IoIosCall className='dc-icon' />
                        <p>Confirmation Call</p>
                    </div>
                </ScrollAnimate>
                <ScrollAnimate animation="bottom-to-top-1 ">
                    <div className="sixth-sub-card">
                        <FaCalendarAlt className='dc-icon' />
                        <p>Fix Schedule</p>
                    </div>
                </ScrollAnimate>
                <ScrollAnimate animation="bottom-to-top-1 ">
                    <div className="sixth-sub-card">
                        <FaHospital className='dc-icon' />
                        <p>Visit the Hospital</p>
                    </div>
                </ScrollAnimate>
            </div>

        </div>

        <div className="seventh-section">
            <div className="inside-seventh-section">
                <div className="inside-seventh-card">
                    <img src={faq1} alt="faq" />

                    <div className="faq-card">
                        <div className="inside-faq-card">
                            <h4>20000+</h4>
                            <p>Lives Touched</p>
                        </div>
                        <div className="inside-faq-card i-f-c-1">
                            <h4>6+</h4>
                            <p>specialists</p>
                        </div>
                    </div>

                </div>
                <div className="inside-seventh-card iscisc">
                    <ScrollAnimate animation="right-to-left">
                        <h2>Faqs</h2>
                        <h1>Consultations with Qualified doctors.</h1>
                    </ScrollAnimate>

                    {
                        faq.map((f, index) => {

                            const { content, id, title } = f;

                            const checkActive = id === isActive;

                            return (

                                <ScrollAnimate animation="bottom-to-top-1 ">
                                    <div className="faq" key={id}>
                                        <h3 onClick={() => activeFaq(id)}>  <span>{checkActive ? '-' : '+'}</span> {title}</h3>

                                        {
                                            checkActive && (
                                                <p>{content}</p>
                                            )
                                        }

                                    </div>
                                </ScrollAnimate>


                            )

                        })
                    }

                </div>
            </div>
        </div>

        <div className="eleventh-section">
            <h2></h2>
            <h1>Our Gallery</h1>
            <div className="inside-eleventh-section">
                <ScrollAnimate animation="right-to-left">
                    <div className="gallery-card">
                        <img src={g1} alt="" />
                    </div>
                </ScrollAnimate>

                <ScrollAnimate animation="right-to-left">
                    <div className="gallery-card">
                        <img src={g2} alt="" />
                    </div>
                </ScrollAnimate>


                <ScrollAnimate animation="right-to-left">
                    <div className="gallery-card">
                        <img src={g3} alt="" />
                    </div>
                </ScrollAnimate>

                <ScrollAnimate animation="right-to-left">
                    <div className="gallery-card">
                        <img src={g4} alt="" />
                    </div>
                </ScrollAnimate>

            </div>
        </div>

        <div className="eight-section">
            <div className="inside-eight-section i-e-s-1">
                <h1>Testimonial</h1>
                <h2>What Patients Say About Us</h2>
            </div>
            <div className="inside-eight-section i-e-s">

                <iframe className='frame' width="" height="" src="https://www.youtube.com/embed/rPJYgTkB1b0?si=Bighm-7Rz2USCr-1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <iframe className='frame' width="" height="" src="https://www.youtube.com/embed/BInHiGESdr8?si=213gpmYBK4uhdyuK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </div>

        <div className="ninth-section">
            <h1 className='ninth-heading1'>Our blog</h1>
            <h2 className='ninth-headin2'>Latest Blogs & Articles.</h2>

            <div className="carousel-wrapper">
                <button
                    className="carousel-btn prev"
                    onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                    disabled={isPrevDisabled} // disable at start
                >
                    &#10094;
                </button>

                <div className="inside-ninth-section carousel-inner">
                    {blog.slice(currentIndex, currentIndex + visibleCards).map((b) => {
                        const { id, image, title, intro } = b;
                        return (
                            <div className="blog-card" key={id}>
                                <div className="blog-card-img">
                                    <img src={image} alt="blog image" />
                                </div>
                                <div className="blog-card-content">
                                    <h1>{title.length > 50 ? title.slice(0, 50) + "..." : title}</h1>
                                    <p>{intro[0].length > 60 ? intro[0].slice(0, 60) + "..." : intro[0]}</p>
                                    <NavLink className="noneNav" to={`/blog/${slugify(title, { lower: true })}`}>
                                        <button className="appointment a1 a11">
                                            Read More <GoArrowRight className='buttonIcon' />
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <button
                    className="carousel-btn next"
                    onClick={() => setCurrentIndex(prev => Math.min(prev + 1, blog.length - visibleCards))}
                    disabled={isNextDisabled} // disable at end
                >
                    &#10095;
                </button>
            </div>

        </div>


        <div className="tenth-section">

            <p>Fill The Form</p>
            <h2>Contact Form</h2>

            <div className="inside-tenth-section">

                <div className="inside-tenth-card i-t-c-2">
                    <form action={handelFormSubmit}>

                        <div className="form-div">
                            <input name='name' type="text" placeholder='Name' required />
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