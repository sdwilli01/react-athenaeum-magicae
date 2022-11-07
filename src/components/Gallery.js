import { useParams } from "react-router-dom";
import SchoolsDirectory from "./SchoolsDirectory";

export default function Gallery(props) {
    let params = useParams();
    const magicClass = params.galleryId;
    const title = 'Welcome to the ' + magicClass + ' gallery!';
    
    return (
        <div>
            <h1>{title}</h1>
            <SchoolsDirectory magicClass={magicClass} />
        </div>
    );
}
