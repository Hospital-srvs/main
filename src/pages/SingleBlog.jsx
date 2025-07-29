import { useParams } from "react-router-dom"
import { Breadcrum } from "../components/ui/Breadcrum"
import blog from '../assets/api/blogs.json'
import '../assets/css/Blog.css'
import { ScrollAnimate } from "./ScrollAnimate"

export const SingleBlog = () => {

    const Params = useParams();

    return <>

        <Breadcrum title={Params.id} />

        <div className="single-service">
            <div className="inside-single-service">
                <div className="inside-single-service-card service-card-1">




                    {
                        blog.map((b, index) => {

                            const { id, image, intro, intro10, intro11, intro2, intro3, intro3long, intro3short, intro4, intro4long, intro4short, intro5, intro5long, intro5long2, intro5short, intro6, intro6long, intro6short, intro7, intro7long, intro7short,intro8, intro8long, intro9, intro9long, intro9short,title, title10, title11, title2, title4, title5, title6, title7, title8, title9, title3
                            } = b;

                            return (
                                <>
                                    {Params.id == title && (
                                        <div className="service-main-content ibb" key={id}>

                                            <ScrollAnimate animation="right-to-left">
                                                <img src={image} alt="" className="main-service" />
                                            </ScrollAnimate>


                                            {/* <h3>{intro}</h3> */}


                                            <ScrollAnimate animation="bottom-to-top-1 ">
                                                <p>{intro}</p>
                                            </ScrollAnimate>

                                            <ScrollAnimate animation="bottom-to-top-1 ">
                                                <h2>{title2}</h2>
                                                <p>{intro2}</p>
                                            </ScrollAnimate>

                                            <ScrollAnimate animation="bottom-to-top-1 ">
                                                <h2>{title3}</h2>
                                                <p>{intro3}</p>

                                            </ScrollAnimate>


                                            <ScrollAnimate animation="bottom-to-top-1 ">

                                                {
                                                    intro3long.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }
                                                <p>{intro3short}</p>
                                            </ScrollAnimate>


                                            <ScrollAnimate animation="bottom-to-top-1 ">

                                                <h2>{title4}</h2>
                                                <p>{intro4}</p>
                                                {
                                                    intro4long.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }

                                                <p>{intro4short}</p>
                                            </ScrollAnimate>

                                            <ScrollAnimate animation="bottom-to-top-1 ">

                                                <h2>{title5}</h2>
                                                <p>{intro5}</p>

                                                {
                                                    intro5long.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }

                                                <p>{intro5short}</p>
                                                {
                                                    intro5long2.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }
                                            </ScrollAnimate>


                                            <ScrollAnimate animation="bottom-to-top-1 ">

                                                <h2>{title6}</h2>
                                                <p>{intro6}</p>

                                                {
                                                    intro6long.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }

                                                <p>{intro6short}</p>
                                            </ScrollAnimate>


                                            <ScrollAnimate animation="bottom-to-top-1 ">

                                                <h2>{title7}</h2>
                                                <p>{intro7}</p>

                                                {
                                                    intro7long.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }

                                                <p>{intro7short}</p>
                                            </ScrollAnimate>

                                            <ScrollAnimate animation="bottom-to-top-1 ">
                                                <h2>{title8}</h2>
                                                <p>{intro8}</p>
                                                {
                                                    intro8long.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }
                                                
                                            </ScrollAnimate>


                                            <ScrollAnimate animation="bottom-to-top-1 ">

                                                <h2>{title9}</h2>
                                                <p>{intro9}</p>

                                                {
                                                    intro9long.map((i, index) => {
                                                        return (
                                                            <p>{i}</p>
                                                        )
                                                    })
                                                }
                                                <p>{intro9short}</p>
                                            </ScrollAnimate>


                                            <h2>{title10}</h2>
                                            <p>{intro10}</p>

                                            <h2>{title11}</h2>
                                            <p>{intro11}</p>







                                            {/* {content.map((c, index)=>{

                                                return(
                                                    <p key={index}>• </p>
                                                )
                                            })} */}

                                        </div>
                                    )}
                                </>
                            )

                        })
                    }

                </div>
                {/* <div className="inside-single-service-card service-card-2">

                    <div className="side-widget">

                        <h2>Services</h2>

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


                </div> */}
            </div>
        </div>

    </>
}