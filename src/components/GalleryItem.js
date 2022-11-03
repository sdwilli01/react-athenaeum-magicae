import { Link } from "react-router-dom";

export default function GalleryItem(props) {
    const targetGallery = "/galleries/" + props.name;
    
    return (
        <li>
            <Link to={targetGallery}>{props.name}</Link>
        </li>
    );
}