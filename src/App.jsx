import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

import MainPage from "./layouts/mainpage";
import HomePage from "./pages/HomePage";
import DetailChapter from "./pages/DetailChapter";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPage />}>
        <Route index element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailChapter />} />
      </Route >
    )
  )
  return (

    <RouterProvider router={router} />

  )
}
