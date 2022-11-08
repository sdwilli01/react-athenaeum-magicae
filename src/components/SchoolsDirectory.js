import { MAGIC_SCHOOLS } from "../Constants";
import SchoolItem from "./SchoolItem";

export default function SchoolsDirectory(props) {
    const title = 'Magical Schools';
    const magicClass = props.magicClass;
    const schools = MAGIC_SCHOOLS.map((school) => 
        <SchoolItem key={school} school={school} magicClass={magicClass} />
    );

    return (
        <div>
            <h2>{title}</h2>
            <ul>{schools}</ul>
        </div>
    );
}
