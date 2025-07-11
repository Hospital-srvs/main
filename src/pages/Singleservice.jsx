import { useParams } from "react-router-dom"
import { Breadcrum } from "../components/ui/Breadcrum"
import services from '../assets/api/services.json';
import { NavLink } from 'react-router-dom';
import '../assets/css/SingleService.css'
import { SiConsul } from "react-icons/si";
import { FaRegCalendar } from "react-icons/fa";
import { RiStethoscopeLine } from "react-icons/ri";
import { TbHealthRecognition } from "react-icons/tb";
import { ScrollAnimate } from "./ScrollAnimate";

export const Singleservice = () => {

    const Params = useParams();

    return<>

        <Breadcrum title={Params.id}/>

        <div className="single-service">
            <div className="inside-single-service">
                <div className="inside-single-service-card service-card-1">

                    {
                        services.map((s, index)=>{

                            const {content, id, image, subtitle, title} = s;
                            
                            return(
                                <>
                                    {Params.id == title &&(
                                        <div className="service-main-content" key={id}>

                                            <ScrollAnimate animation="right-to-left">
                                                <img src={image} alt="" className="main-service" />
                                            </ScrollAnimate>

                                            <ScrollAnimate animation="bottom-to-top-1 ">
                                                <h3>{subtitle}</h3>
                                            </ScrollAnimate>

                                            <ScrollAnimate animation="bottom-to-top-1 ">

                                                {content.map((c, index)=>{

                                                    return(
                                                        <p key={index}>• {c}</p>
                                                    )
                                                })}

                                            </ScrollAnimate>


                                        </div>
                                    )}
                                </>
                            )

                        })
                    }

                </div>
                <div className="inside-single-service-card service-card-2">

                    <div className="side-widget">

                        <ScrollAnimate animation="bottom-to-top-1 ">
                            <h2>Services</h2>
                        </ScrollAnimate>


                        {
                                    services.map((s, index)=>{

                                        const {content, id, image, subtitle, title} = s;


                                        return(

                                            <NavLink className="none none1" to={`/services/${title}`}>
                                                <p key={id}>
                                                    {title}
                                                </p>

                                            </NavLink>

                                        )


                                    })                                
                                }

                    </div>


                </div>
            </div>
        </div>



        <div className="single-service-second">

            <h2>Our Steps</h2>
            <h1>Our Working Process</h1>

            <div className="inside-single-service-second">
                    
                        <div className="second-service-card sc1">
                    <ScrollAnimate animation="bottom-to-top-1 ">
                            <SiConsul className="s-icon"/>
                            <h3>Submit Request</h3>
                            <p>Fill in your details on our website or call our front desk.</p>
                    </ScrollAnimate>
                        </div>


                    <div className="second-service-card sc2"
                    >
                        <ScrollAnimate animation="bottom-to-top-1 ">
                        <FaRegCalendar className="s-icon"/>
                        <h3>Confirmation Call</h3>
                        <p>Our team will connect with you to verify and confirm the booking.</p>

                        </ScrollAnimate>
                    </div>

                    <div className="second-service-card sc2">
                        <ScrollAnimate animation="bottom-to-top-1 ">
                        <RiStethoscopeLine className="s-icon"/>
                        <h3>Fix Schedule</h3>
                        <p>Appointment is set as per availability</p>

                        </ScrollAnimate>
                    </div>

                    <div className="second-service-card sc1">
                        <ScrollAnimate animation="bottom-to-top-1 ">
                        <TbHealthRecognition className="s-icon"/>
                        <h3>Visit the Hospital</h3>
                        <p>Walk in at your confirmed time and receive expert, personalized care.</p>

                        </ScrollAnimate>
                    </div>

            </div>
        </div>

    </>
}