import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout";
import AddJob from "../pages/AddJob";
import EditJob from "../pages/EditJob";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "add-job",
            element: <AddJob />,
          },
          {
            path: "edit-job",
            element: <EditJob />,
          },
        ],
      },
])

export default routes;