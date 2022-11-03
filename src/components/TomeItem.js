import { Link } from "react-router-dom";

export default function TomeItem(props) {
    const level = props.level;
    const magicClass = props.magicClass;
    const school = props.school;

    const targetSchool = "/schools/" + school;
    const targetClass = "/classes/" + magicClass;
    const targetLevel = "/levels/" + level;
    const target = targetSchool + targetClass + targetLevel;

    const title = 'Level ' + level + ' ' + school + ' spells';

    return (
        <li>
            <Link to={target}>{title}</Link>
        </li>
    );
}