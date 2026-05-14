import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './components/root/root';
import Resume from './pages/resume/resume';
import Catalogue from './pages/catalogue/catalogue';
import Home from './components/home/home';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/catalogue" element={<Catalogue/>}/>
  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App
