import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App';
import Root from "./routes/root";
import Contact from "./routes/contact";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./routes/error-page";
import MyTrip from './routes/myTrip';
import OthersTrip from './routes/othersTrip';
import NewTrip from './routes/newTrip';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "myTrip/",
        element: <MyTrip />,
      }, {
        path: "othersTrip/",
        element: <OthersTrip />,
      }, {
        path: "newTrip/",
        element: <NewTrip />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
