// From https://reactrouter.com/en/main/start/tutorial
import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (
      <>
        <div id="sidebar">
          
          <div>
            <p>Trip Planning App</p>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`myTrip`}>My Trip</Link>
              </li>
              <li>
              <Link to={`othersTrip`}>Others Trip</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"><Outlet /></div>
      </>
    );
  }