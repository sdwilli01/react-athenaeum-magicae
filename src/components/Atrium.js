import { MAGICAL_CLASSES } from '../Constants';
import GalleryDirectory from './GalleryDirectory';

export default function Atrium(props) {
    return (
        <div>
            <h1>Welcome to the Athenaeum Magicae!</h1>
            <GalleryDirectory gallery_list={MAGICAL_CLASSES}/>
        </div>
    );
}
