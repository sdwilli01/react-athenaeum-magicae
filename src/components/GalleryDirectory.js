import GalleryItem from './GalleryItem';

export default function GalleryDirectory(props) {
    const title = 'Class Galleries';
    const galleries = props.gallery_list.map((gallery_name) =>
        <GalleryItem key={gallery_name} name={gallery_name}/>
    );

    return (
        <div>
            <h2>{title}</h2>
            <ul>{galleries}</ul>
        </div>
    );
}
