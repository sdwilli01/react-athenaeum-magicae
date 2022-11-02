import { useParams } from "react-router-dom";

export default function Gallery(props) {
    let params = useParams();
    const magicClass = params.galleryId
    return (
        <div>Hello, this will be the {magicClass} Gallery someday</div>
    );
}