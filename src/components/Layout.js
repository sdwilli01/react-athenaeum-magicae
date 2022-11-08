import { Outlet, Link } from "react-router-dom";

export default function Layout(props) {
    return (
        <div>
            <div>
                <h1>
                    <Link to="/">Athenaeum Magicae</Link>
                </h1>
            </div>
            <hr/>
            <Outlet />
        </div>
    );
}
