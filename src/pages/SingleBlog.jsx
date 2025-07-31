import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/ui/Breadcrum";
import blog from "../assets/api/blogs.json";
import "../assets/css/Blog.css";
import { ScrollAnimate } from "./ScrollAnimate";
import parse from "html-react-parser";

export const SingleBlog = () => {
  const Params = useParams();

  return (
    <>
      <Breadcrum title={Params.id} />

      <div className="single-service">
        <div className="inside-single-service">
          <div className="inside-single-service-card service-card-1">
            {blog.map((b) => {
              const {
                id,
                image,
                image2,
                intro,
                intro10,
                intro11,
                intro2,
                intro3,
                intro3long,
                intro3short,
                intro4,
                intro4long,
                intro4short,
                intro5,
                intro5long,
                intro5long2,
                intro5short,
                intro6,
                intro6long,
                intro6short,
                intro7,
                intro7long,
                intro7short,
                intro8,
                intro8long,
                intro9,
                intro9long,
                intro9short,
                title,
                title10,
                title11,
                title2,
                title3,
                title4,
                title5,
                title6,
                title7,
                title8,
                title9,
              } = b;

              return (
                Params.id === title && (
                  <div className="service-main-content ibb" key={id}>
                    <ScrollAnimate animation="right-to-left">
                      <img src={image} alt="" className="main-service" />
                    </ScrollAnimate>

                    <ScrollAnimate animation="bottom-to-top-1 ">
                      {intro.map((para, index) => (
                        <p key={index}>{parse(para.trim())}</p>
                      ))}
                    </ScrollAnimate>

                    {/* <ScrollAnimate animation="bottom-to-top-1 ">
                      <h2>{title2}</h2>
                      <p>{parse(intro2)}</p>
                    </ScrollAnimate> */}

                    <ScrollAnimate animation="bottom-to-top-1">
                      {image2 && (
                        <img
                          src={image2}
                          alt="Section Image"
                          className="my-4 w-full max-w-2xl mx-auto rounded-lg shadow-md"
                        />
                      )}

                      <h2>{title2}</h2>


                      <p>{parse(intro2)}</p>
                    </ScrollAnimate>


                    {title3 && (
                      <ScrollAnimate animation="bottom-to-top-1 ">
                        <h2>{title3}</h2>
                        <p>{parse(intro3)}</p>
                      </ScrollAnimate>
                    )}

                    {intro3long.length > 0 && (
                      <ScrollAnimate animation="bottom-to-top-1 ">
                        {intro3long.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                        <p>{parse(intro3short)}</p>
                      </ScrollAnimate>
                    )}

                    <ScrollAnimate animation="bottom-to-top-1 ">
                      <h2>{title4}</h2>
                      <p>{parse(intro4)}</p>
                      {intro4long.map((para, index) => (
                        <p key={index}>{parse(para.trim())}</p>
                      ))}
                      <p>{parse(intro4short)}</p>
                    </ScrollAnimate>

                    <ScrollAnimate animation="bottom-to-top-1 ">
                      <h2>{title5}</h2>
                      <p>{parse(intro5)}</p>
                      {intro5long.map((para, index) => (
                        <p key={index}>{parse(para.trim())}</p>
                      ))}
                      {intro5short && <p>{parse(intro5short)}</p>}
                      {intro5long2.map((para, index) => (
                        <p key={index}>{parse(para.trim())}</p>
                      ))}
                    </ScrollAnimate>

                    <ScrollAnimate animation="bottom-to-top-1 ">
                      <h2>{title6}</h2>
                      <p>{parse(intro6)}</p>
                      {intro6long.map((para, index) => (
                        <p key={index}>{parse(para.trim())}</p>
                      ))}
                      {intro6short && <p>{parse(intro6short)}</p>}
                    </ScrollAnimate>

                    <ScrollAnimate animation="bottom-to-top-1 ">
                      <h2>{title7}</h2>
                      <p>{parse(intro7)}</p>
                      {intro7long.map((para, index) => (
                        <p key={index}>{parse(para.trim())}</p>
                      ))}
                      <p>{parse(intro7short)}</p>
                    </ScrollAnimate>

                    {title8 && (
                      <ScrollAnimate animation="bottom-to-top-1">
                        <h2>{title8}</h2>
                        {(intro8.length > 0 ? intro8 : intro8long).map((para, index) => (
                          <p key={index}>{parse((para || "").trim())}</p>
                        ))}
                      </ScrollAnimate>
                    )}


                    <ScrollAnimate animation="bottom-to-top-1 ">
                      <h2>{title9}</h2>
                      {intro9 && <p>{parse(intro9)}</p>}
                      {intro9long.map((para, index) => (
                        <p key={index}>{parse(para.trim())}</p>
                      ))}
                      <p>{parse(intro9short)}</p>
                    </ScrollAnimate>

                    {title10 && (
                      <>
                        <h2>{title10}</h2>
                        <p>{parse(intro10)}</p>
                      </>
                    )}

                    {title11 && (
                      <>
                        <h2>{title11}</h2>
                        <p>{parse(intro11)}</p>
                      </>
                    )}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
