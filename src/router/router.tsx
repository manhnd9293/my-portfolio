import {createBrowserRouter} from "react-router-dom";
import HomePage from "@/pages/home/HomePage.tsx";
import RootLayout from "@/layout/RootLayout.tsx";
import ProjectPage from "@/pages/projects/ProjectPage.tsx";
import BlogPage from "@/pages/blogs/BlogPage.tsx";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        element: <HomePage/>,
        index: true
      },
      {
        path: '/projects',
        element: <ProjectPage/>
      },
      {
        path: '/blogs',
        element: <BlogPage/>
      }
    ]
  },
])