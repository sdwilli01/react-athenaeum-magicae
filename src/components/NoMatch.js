import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the Athenaeum Magicae home</Link>
            </p>
        </div>
    );
}
