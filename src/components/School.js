import { useParams } from "react-router-dom";
import TomeDirectory from "./TomeDirectory";

export default function School(props) {
    let params = useParams();
    const magicSchool = params.schoolId;
    const magicClass = params.classId;
    const title = 'Welcome to the ' + magicSchool + ' school for ' + magicClass + 's!';

    return (
        <div>
            <h2>{title}</h2>
            <TomeDirectory magicSchool={magicSchool} magicClass={magicClass} />
        </div>
    );
}
