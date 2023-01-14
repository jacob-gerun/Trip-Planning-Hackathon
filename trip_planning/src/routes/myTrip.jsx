import { Link } from "react-router-dom";
export default function MyTrip() {
    return (
        <div >
            <Link to="/newTrip">
                <button type="button">
                    Add a new Trip.
                </button>
            </Link>
        </div>
    );
}