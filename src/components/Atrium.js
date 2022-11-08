import { MAGICAL_CLASSES } from '../Constants';
import GalleryDirectory from './GalleryDirectory';

export default function Atrium(props) {
    return (
        <div>
            <h2>Welcome to the library of magic!</h2>
            <GalleryDirectory gallery_list={MAGICAL_CLASSES}/>
        </div>
    );
}
