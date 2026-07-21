import "./App.css";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./Data";

function App() {

    let showBooks = true;
    let showBlogs = true;
    let showCourses = true;

    const bookdet =
        showBooks ? <BookDetails books={books} /> : null;

    const content =
        showBlogs ? <BlogDetails blogs={blogs} /> : null;

    const coursedet =
        showCourses ? <CourseDetails courses={courses} /> : null;

    return (

        <div className="container">

            <div className="column">

                <h1>Course Details</h1>

                {coursedet}

            </div>

            <div className="column">

                <h1>Book Details</h1>

                {bookdet}

            </div>

            <div className="column">

                <h1>Blog Details</h1>

                {content}

            </div>

        </div>

    );

}

export default App;