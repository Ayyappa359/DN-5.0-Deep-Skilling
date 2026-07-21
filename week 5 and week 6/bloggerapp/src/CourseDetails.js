import React from "react";

function CourseDetails(props) {

    return (

        <ul>

            {
                props.courses.map((course) =>

                    <div key={course.id}>

                        <h2>{course.cname}</h2>

                        <h4>{course.date}</h4>

                    </div>

                )
            }

        </ul>

    );

}

export default CourseDetails;