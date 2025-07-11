import { useParams } from "react-router-dom"
import { Breadcrum } from "../components/ui/Breadcrum"
import doctors from '../assets/api/doctors.json';
import { ScrollAnimate } from "./ScrollAnimate";

export const Singledoctor =  () => {

    const Params = useParams();

    return<>

        <Breadcrum title={Params.id}/>

        {
            doctors.map((d, index)=>{

                const {doctorimage,doctorsname,expertise,formerassociation,id,intro,introtitle,position,qualification} = d;

                
                
                return <>
                    
                    {Params.id === doctorsname && (

                        

                    <div className="div" key={id}>

                        <ScrollAnimate animation="right-to-left">
                        <div className="single-doctor-first">
                            <div className="inside-single-doctor-first">
                                <div className="doctor-first-img">
                                    <img src={doctorimage} alt="" />
                                </div>
                                <div className="doctor-first-content">
                                    <h3>{position}</h3>
                                    <h2>{doctorsname}</h2>
                                    <p>{intro}</p>
                                </div>
                            </div>
                        </div>

                        </ScrollAnimate>
                        

                            
                        <ScrollAnimate animation="bottom-to-top-1 ">
                        <div className="single-doctor-second">
                            <div className="inside-single-doctor-second">
                                <h2>{position}</h2>
                                <h3>Qualification</h3>

                                {
                                    qualification.map((q, index)=> {
                                        return(
                                            <p key={index}>{q}</p>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        </ScrollAnimate>


                        <ScrollAnimate animation="bottom-to-top-1 ">

                        <div className="single-doctor-second">
                            <div className="inside-single-doctor-second">
                                <h2>{position}</h2>
                                <h3>Expertise</h3>

                                {
                                    expertise.map((q, index)=> {
                                        return(
                                            <p key={index}>{q}</p>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        </ScrollAnimate>
                        
                        <ScrollAnimate animation="bottom-to-top-1 ">


                        <div className="single-doctor-second">
                            <div className="inside-single-doctor-second">

                                {formerassociation != " " && (
                                    <>
                                <h2>{position}</h2>
                                <h3>Former Association</h3>

                                {
                                    formerassociation.map((q, index)=> {
                                        return(
                                            <p key={index}>{q}</p>
                                        )
                                    })
                                }
                                    </>
                                )}

                            </div>
                        </div>
                        </ScrollAnimate>



                    </div>
                    )}
                    
                </>

            })
        }


    </>

}