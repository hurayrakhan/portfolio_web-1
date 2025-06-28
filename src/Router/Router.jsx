import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>
    }
])
export default router