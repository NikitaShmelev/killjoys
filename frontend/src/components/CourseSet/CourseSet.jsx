import React, {useState} from "react"
import CoursePreview from "../CoursePreview/CoursePreview.jsx"

const CourseSet = (props) => {
    const [courses, setCourses] = useState([
        {id:1, title: "Psycho", body: "Descript"},
        {id:2, title: "PHyso", body: "Descript" },
        {id:3, title: "huiso", body: "Descript"},
        {id:3, title: "huiso", body: "Descript"},
        {id:3, title: "huiso", body: "Descript"},
        {id:3, title: "huiso", body: "Descript"},
        {id:3, title: "huiso", body: "Descript"},
        {id:3, title: "huiso", body: "Descript"},
        {id:3, title: "huiso", body: "Descript"},
    ])

    return(
        <div class="CourseSet">
            {courses.map(() => <CoursePreview/>)}
        </div>
    )
}

export default CourseSet;