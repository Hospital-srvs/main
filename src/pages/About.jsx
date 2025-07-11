import { Breadcrum } from "../components/ui/Breadcrum";
import aboutbg from '../assets/images/all images/about-bg.png';
import '../assets/css/About.css';
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdArrowCircleRight } from "react-icons/md";
import about from '../assets/images/all images/improving-img.jpg';
import half from '../assets/images/all images/half.png'
import services from '../assets/api/services.json';
import { Ri24HoursFill } from "react-icons/ri";
import { LuNotepadText } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import blog from '../assets/api/blogs.json';
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";
import doctors from '../assets/api/doctors.json'
import {ScrollAnimate} from './ScrollAnimate';

export const About = () => {
    return<>
        <Breadcrum title="About Us"/>

        <div className="third-section">
                    <div className="inside-third-section about-section">
                        <div className="inside-third-card ia  ii">
                            <img src={aboutbg} className='white-dots white-dots2' alt="white dots" />
                            <img src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/hero-img-1.jpg" alt="" className="img img1 img11" />
                            <img src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/hero-img-2.jpg" alt="" className="img img2 img22" />
                        </div>
                        <div className="inside-third-card ia1 iaa1">
                            <ScrollAnimate animation="right-to-left">
                                <h2>we take care of your health</h2>
                            </ScrollAnimate>
                            <ScrollAnimate animation="right-to-left">
                                <h1>we are providing best & affordable health care</h1>
                            </ScrollAnimate>
                            <ScrollAnimate animation="bottom-to-top-1 ">
                                <p>At Shree Radha Vallabh Super Speciality Hospital, Dehradun, our journey began with a simple yet profound mission—to provide accessible, high-quality healthcare with compassion and integrity. What started as a modest clinic has now transformed into a super speciality hospital, driven by our commitment to patient well-being and the trust of those we serve. From Sanskriti Clinic to Shree Radha Vallabh Super Speciality Hospital.</p>
                                <p>Our story began with Sanskriti Clinic in Dehradun, where Dr. Ankur Sangal, a dedicated urologist, provided specialized care to patients facing urological concerns. With every successful treatment, word spread, and more people began seeking consultation, placing their faith in our expertise.</p>
                                <p>As the patient base grew, so did the responsibility to provide comprehensive care. While the clinic offered expert diagnosis and treatment, we realized that some patients required additional in-house facilities, advanced procedures, and extended post-treatment care—things that a clinic alone couldn’t always provide.</p>
                            </ScrollAnimate>
        
                            {/* <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />Mental health Solutions</p>
                            <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />Rapid Patient Improvement</p>
                            <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />World Class Treatment</p>
        
                            <button className="appointment a1">Read More <MdArrowCircleRight className='buttonIcon' /></button> */}
                        </div>
                    </div>
                </div>
        

        <div className="about-first">
            <div className="inside-about-first">
                <div className="inside-about-first-card">
                    <img src={about} alt="about img" />
                </div>
                <div className="inside-about-first-card">
                    <ScrollAnimate animation="right-to-left">
                        <h2>we take care of your health</h2>
                    </ScrollAnimate>
                    <ScrollAnimate animation="right-to-left">
                            <h1>A Hospital Built on Patient Trust & Need</h1>
                    </ScrollAnimate>

                            <ScrollAnimate animation="bottom-to-top-1 ">
                                <p>Many of our patients, grateful for the care they received, encouraged us to expand into a full-fledged super speciality hospital—a place where they could get all medical services under one roof with the same trust, ethics, and excellence they had experienced at the clinic. Their support and belief in us became the foundation of Shree Radha Vallabh Super Speciality Hospital.</p>
                                <p>We envisioned a hospital that goes beyond treatment—where every patient is treated with empathy, dignity, and cutting-edge medical expertise. A place where advanced technology meets personalized care, ensuring that no one has to go elsewhere for world-class treatment.</p>
                            </ScrollAnimate>

                </div>
            </div>
            <img className="asd" src={half} alt="half image" />
        </div>

        {/* <div className="about-second">
            <div className="inside-about-second">
                <h2>Top Services</h2>
                <h1>We're Providing Best Services</h1>

                <div className="about-service-card">

                    {
                        services.slice(0,3).map((s, index)=>{

                            const {content, id, image, subtitle, title} = s;

                            return(
                                <div className="inside-fourth-card i-f-c-a" key={id}>
                                    <Ri24HoursFill className='f-card-icon'/>
                                    <h2>Eye Care</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque harum quam....</p>
                                    <button className="new-read">Read More <MdArrowCircleRight className='buttonIcon' /></button>
                                </div>
                            )

                        })
                    }

                </div>

            </div>
        </div> */}

        <div className="about-third">
            <div className="inside-about-third">
                <h2>Caring For The Health Of You And Your Family.</h2>
                    <div className="about-third-card">
                        <div className="inside-about-third-card" style={{display:"none"}}>
                             <p>Our is to deliver the highest quality healthcare services. We believe that everyone deserves access to excellent medical care without compromising on quality.</p>

                                <h2>A Commitment to Excellence & Care</h2>

                            <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />Today, Shree Radha Vallabh Super Speciality Hospital stands as a center of excellence, offering super speciality care in urology, oncology, orthopedics, and critical care. Our in-house medical team ensures that every process follows strict Standard Operating Procedures (SOPs) to maintain efficiency, accuracy, and patient safety.</p>
                            <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />But what truly sets us apart is our unwavering commitment to every individual who walks through our doors. Whether it's a life-saving surgery, specialized treatment, or preventive healthcare, we continue to serve with the same passion, dedication, and integrity that started this journey</p>

                            <h2>Looking Ahead – A Future Built on Care</h2>

                            <p className="bullet-p"><IoMdArrowDroprightCircle className='bullet' />Our mission remains unchanged—to make quality super speciality healthcare accessible to all, set new benchmarks in medical excellence, and continue building lasting relationships with our patients.</p>
                            <p className="bullet-p">As we grow, we remain rooted in the values that defined us from the start—trust, compassion, and patient-first care. Because at Shree Radha Vallabh Super Speciality Hospital, your health isn’t just a responsibility—it’s our purpose.</p>

                            {/* <button className="appointment a1">Read More <MdArrowCircleRight className='buttonIcon' /></button> */}
                        </div>
                        <div className="inside-about-third-card" style={{width:"100%"}}>

                            <div className="inner-about-third-card">
                                <div className="inner-about-card-icon">
                                    <LuNotepadText className="wer" />
                                </div>
                                <div className="inner-about-card-content">
                                    <h3>A Commitment to Excellence & Care</h3>
                                    <p>Today, Shree Radha Vallabh Super Speciality Hospital stands as a center of excellence, offering super speciality care in urology, oncology, orthopedics, and critical care. Our in-house medical team ensures that every process follows strict Standard Operating Procedures (SOPs) to maintain efficiency, accuracy, and patient safety.</p>
                                    <p>But what truly sets us apart is our unwavering commitment to every individual who walks through our doors. Whether it's a life-saving surgery, specialized treatment, or preventive healthcare, we continue to serve with the same passion, dedication, and integrity that started this journey</p>
                                </div>
                            </div>
                            <div className="inner-about-third-card">
                                <div className="inner-about-card-icon">
                                    <LuNotepadText className="wer" />
                                </div>
                                <div className="inner-about-card-content">
                                    <h3>Looking Ahead – A Future Built on Care</h3>
                                    <p>Our mission remains unchanged—to make quality super speciality healthcare accessible to all, set new benchmarks in medical excellence, and continue building lasting relationships with our patients.</p>
                                    <p>As we grow, we remain rooted in the values that defined us from the start—trust, compassion, and patient-first care. Because at Shree Radha Vallabh Super Speciality Hospital, your health isn’t just a responsibility—it’s our purpose.</p>
                                </div>
                            </div>
                            {/* <div className="inner-about-third-card">
                                <div className="inner-about-card-icon">
                                    <LuNotepadText className="wer" />
                                </div>
                                <div className="inner-about-card-content">
                                    <h3>Medical History</h3>
                                    <p>our medical history is a vital piece of information that provides healthcare.</p>
                                </div>
                            </div> */}

                        </div>
                    </div>

            </div>
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

        <div className="about-fourth">
            <div className="inside-about-fourth">
                    <h2>Our Best Doctors</h2>
                    <h1>Meet Our Doctors.</h1>

                    <div className="doctor-first">
            <div className="inside-doctor-first">


                {
                    doctors.map((d, index)=>{

                        const {doctorimage,doctorsname,expertise,formerassociation,id,intro,introtitle,position,qualification} = d;

                        return(

                            <ScrollAnimate animation="right-to-left">

                                <NavLink to={`/doctor/${doctorsname}`} className="noneNav">
                                    <div className="team-card-main" key={id}>
                                        <div className="team-card-img-main">
                                            <img src={doctorimage} alt="" />
                                        </div>
                                        <div className="team-card-content-main">
                                            <h3>{position}</h3>
                                            <h2>{doctorsname}</h2>
                                            <p>{intro.slice(0,40)+"..."}</p>
                                        </div>
                                    </div>
                                </NavLink>

                            </ScrollAnimate>

                            

                        )
                    })
                }

                
            </div>
        </div>

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

                <h1>our blog</h1>
                <h2>Latest Blogs & Articles.</h2>

            <div className="inside-ninth-section">

                    {
                        blog.map((b, index)=>{

                            const {id,image,title, intro} = b;

                            return(

                                <ScrollAnimate animation="bottom-to-top-1 center">

                                    <div className="blog-card">
                                        <div className="blog-card-img">
                                            <img src={image} alt="blog image" />
                                        </div>
                                        <div className="blog-card-content">
                                            <h1>{title.slice(0,50)+"..."}</h1>
                                            <p>{intro[0].slice(0,60) + "..."}</p>

                                            <NavLink className="noneNav" to={`/blog/${title}`}>
                                                <button className="appointment a1 a11">Read More <GoArrowRight className='buttonIcon' /></button>
                                            </NavLink>


                                        </div>
                                    </div>

                                </ScrollAnimate>


                            )
                        })
                    }

            </div>
        </div>


    </>
} 