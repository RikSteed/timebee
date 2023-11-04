import { Navigate, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import ErrorComponent from "./components/Dashboard/Pages/ErrorComponent";
import Timesheet from "./components/Dashboard/Pages/Timesheet";
import UploadDocuments from "./components/Dashboard/Pages/UploadDocuments";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: (
      <ErrorComponent code={"404"} message={"We cannot find the page"} />
    ),
    children: [
      { path: "/", element: <Navigate to="timesheet" replace /> },
      { path: "/timesheet", element: <Timesheet /> },
    ],
  },
]);
