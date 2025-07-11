import { Breadcrum } from '../components/ui/Breadcrum'
import '../assets/css/Doctors.css'
import doctors from '../assets/api/doctors.json'
import { NavLink } from 'react-router-dom'
import { ScrollAnimate } from './ScrollAnimate'

export const Doctors = () => {

    return<>

        <Breadcrum title="Our Doctors"/>

        <div className="doctor-first">
            <div className="inside-doctor-first">


                {
                    doctors.map((d, index)=>{

                        const {doctorimage,doctorsname,expertise,formerassociation,id,intro,introtitle,position,qualification} = d;

                        return(

                            <ScrollAnimate animation="bottom-to-top-1 ">
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

    </>

}