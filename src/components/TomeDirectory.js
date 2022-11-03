import { MAGIC_LEVELS } from "../Constants";
import Tome from "./Tome";

export default function TomeDirectory(props) {
    const magicClass = props.magicClass;
    const magicSchool = props.magicSchool;
    const title = magicClass + ' ' + magicSchool + ' Tomes';
    const tomes = [...Array(MAGIC_LEVELS + 1).keys()].map((level) => 
        <Tome key={level} school={magicSchool} level={level} magicClass={magicClass} />
    );

    return (
        <div>
            <h1>{title}</h1>
            <ul>{tomes}</ul>
        </div>
    );
}