import { Link } from "react-router-dom";

export default function TomeItem(props) {
    const level = props.level;
    const magicClass = props.magicClass;
    const school = props.school;

    const targetSchool = "/schools/" + school;
    const targetClass = "/classes/" + magicClass;
    const targetLevel = "/levels/" + level;
    const target = targetSchool + targetClass + targetLevel;

    const levelString = level === 0 ? 'Cantrip' : `Level ${level}`;
    const title = `${levelString} ${school} Spells`;

    return (
        <li>
            <Link to={target}>{title}</Link>
        </li>
    );
}
