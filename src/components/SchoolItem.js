import { Link } from "react-router-dom";

export default function SchoolItem(props) {
    const targetSchool = "/schools/" + props.school
    const targetClass = "/classes/" + props.magicClass
    const target = targetSchool + targetClass
    return (
        <li>
            <Link to={target}>{props.school}</Link>
        </li>
    );
}