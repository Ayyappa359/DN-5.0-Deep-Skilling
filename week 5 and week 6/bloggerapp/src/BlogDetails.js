import React from "react";

function BlogDetails(props) {

    return (

        <ul>

            {
                props.blogs.map((blog) =>

                    <div key={blog.id}>

                        <h2>{blog.title}</h2>

                        <h4>{blog.author}</h4>

                        <p>{blog.content}</p>

                    </div>

                )
            }

        </ul>

    );

}

export default BlogDetails;