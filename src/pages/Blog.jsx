import { Breadcrum } from "../components/ui/Breadcrum"
import '../assets/css/Blog.css'
import { GoArrowRight } from "react-icons/go";
import blog from '../assets/api/blogs.json';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ScrollAnimate } from "./ScrollAnimate";
import slugify from "slugify";

export const Blog = () => {


    return (
        <>
            <Breadcrum title="Blogs" />

            <div className="blog-first">
                <div className="blog-count">
                    <p>{blog.length} Blogs</p>
                </div>

                <div className="inside-blog-first">
                    {blog.map((b, index) => {
                        const { id, image, title, intro } = b;

                        const slug = slugify(title, { lower: true, strict: true });

                        return (
                            <div className="blog-card blog-card-1" key={id}>
                                <div className="blog-card-img">
                                    <img src={image} alt="blog image" />
                                </div>

                                <div className="blog-card-content">
                                    <h1>{title.slice(0, 50) + "..."}</h1>
                                    <p>{intro[0].slice(0, 60) + "..."}</p>

                                    <NavLink className="noneNav" to={`/blog/${slug}`}>
                                        <button className="appointment a1 a11">
                                            Read More <GoArrowRight className="buttonIcon" />
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};