import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/ui/Breadcrum";
import blog from "../assets/api/blogs.json";
import "../assets/css/Blog.css";
import { ScrollAnimate } from "./ScrollAnimate";
import parse from "html-react-parser";
import slugify from 'slugify'

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
                image3,
              
                image6,
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
                intro10long,
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
                paragraph,
              } = b;

              return (
                Params.id === slugify(title, { lower: true,strict: true }) && (
                  <div className="service-main-content ibb" key={id}>
                    <ScrollAnimate animation="right-to-left">
                      <img src={image} alt="" className="main-service" />
                    </ScrollAnimate>

                    {Array.isArray(intro) && (
                      <ScrollAnimate animation="bottom-to-top-1">
                        {intro.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                      </ScrollAnimate>
                    )}

                    <ScrollAnimate animation="bottom-to-top-1">
                      {image2 && (
                        <img
                          src={image2}
                          alt="Section Image"
                          className="my-4 w-full max-w-2xl mx-auto rounded-lg shadow-md"
                        />
                      )}
                      {title2 && <h2>{title2}</h2>}
                      {intro2 && <p>{parse(intro2)}</p>}
                      {intro3 && <p>{parse(intro3)}</p>}
                    </ScrollAnimate>

                    {title3 && (
                      <ScrollAnimate animation="bottom-to-top-1">
                        <h2>{title3}</h2>
                        {intro3 && <p>{parse(intro3)}</p>}
                      </ScrollAnimate>
                    )}

                    {Array.isArray(intro3long) && intro3long.length > 0 && (
                      <ScrollAnimate animation="bottom-to-top-1">
                        {intro3long.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                        {intro3short && <p>{parse(intro3short)}</p>}
                        {paragraph && <p>{parse(paragraph)}</p>}
                      </ScrollAnimate>
                    )}

                    <ScrollAnimate animation="bottom-to-top-1">
                       {image3 && (
                        <img
                          src={image3}
                          alt="Section Image"
                          className="my-4 w-full max-w-2xl mx-auto rounded-lg shadow-md"
                        />
                      )}
                      {title4 && <h2>{title4}</h2>}
                      {intro4 && <p>{parse(intro4)}</p>}
                      {Array.isArray(intro4long) &&
                        intro4long.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                      {intro4short && <p>{parse(intro4short)}</p>}
                    </ScrollAnimate>

                    <ScrollAnimate animation="bottom-to-top-1">
                      {title5 && <h2>{title5}</h2>}
                      {intro5 && <p>{parse(intro5)}</p>}
                      {Array.isArray(intro5long) &&
                        intro5long.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                      {intro5short && <p>{parse(intro5short)}</p>}
                      {Array.isArray(intro5long2) &&
                        intro5long2.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                    </ScrollAnimate>

                    <ScrollAnimate animation="bottom-to-top-1">
                       {image6 && (
                        <img
                          src={image6}
                          alt="Section Image"
                          className="my-4 w-full max-w-2xl mx-auto rounded-lg shadow-md"
                        />
                      )}
                      {title6 && <h2>{title6}</h2>}
                      {intro6 && <p>{parse(intro6)}</p>}
                      {Array.isArray(intro6long) &&
                        intro6long.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                      {intro6short && <p>{parse(intro6short)}</p>}
                    </ScrollAnimate>

                    <ScrollAnimate animation="bottom-to-top-1">
                      {title7 && <h2>{title7}</h2>}
                      {intro7 && <p>{parse(intro7)}</p>}
                      {Array.isArray(intro7long) &&
                        intro7long.map((para, index) => (
                          <p key={index}>{parse(para.trim())}</p>
                        ))}
                      {intro7short && <p>{parse(intro7short)}</p>}
                    </ScrollAnimate>

                    {title8 && (
                      <ScrollAnimate animation="bottom-to-top-1">
                        <h2>{title8}</h2>
                        {(Array.isArray(intro8) && intro8.length > 0
                          ? intro8
                          : intro8long || []
                        ).map((para, index) => (
                          <p key={index}>{parse((para || "").trim())}</p>
                        ))}
                      </ScrollAnimate>
                    )}

                    {(title9 || intro9 || (intro9long && intro9long.length)) && (
                      <ScrollAnimate animation="bottom-to-top-1">
                        {title9 && <h2>{title9}</h2>}
                        {intro9 && <p>{parse(intro9)}</p>}
                        {Array.isArray(intro9long) &&
                          intro9long.map((para, index) => (
                            <p key={index}>{parse(para.trim())}</p>
                          ))}
                        {intro9short && <p>{parse(intro9short)}</p>}
                      </ScrollAnimate>
                    )}

                    {(title10 || intro10 || (intro10long && intro10long.length)) && (
                      <ScrollAnimate animation="bottom-to-top-1">
                        <h2>{title10}</h2>
                        {intro10 && <p>{parse(intro10)}</p>}
                        {Array.isArray(intro10long) &&
                          intro10long.map((para, index) => (
                            <p key={index}> {parse(para.trim())}</p>
                          ))}
                      </ScrollAnimate>
                    )}

                    {title11 && (
                      <>
                        <h2>{title11}</h2>
                        {intro11 && <p>{parse(intro11)}</p>}
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
