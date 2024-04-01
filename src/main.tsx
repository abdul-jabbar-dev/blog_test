import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogDetails from "./BlogDetails.tsx";
import EditorContainer from "./EditorContainer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs/:blogId",
    element: <BlogDetails />,
  },
  {
    path: "/add-post",
    element: <EditorContainer/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
