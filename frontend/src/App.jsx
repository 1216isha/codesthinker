import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import ServicesDetail from './components/services/ServicesDetail';
import LoginForm from './components/common/LoginForm';
import CreateAccount from './components/common/SignUp';
import ForgotPasswordPage from './components/common/ForgotPasswordPage';
import Whatsapp from './components/common/Whatsapp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ScrollToTop from './components/common/ScrollToTop';

const MainFunction = () => {
  return (
    <>
      <Whatsapp />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />

    </>
  )
}

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/projects", element: <Projects /> },
      { path: "/team", element: <Team /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services-detail/:id", element: <ServicesDetail /> },


    ]
  },
  
  { path: "/login", element: <LoginForm /> },
  { path: "/signup", element: <CreateAccount /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
])

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <RouterProvider router={router} />
  )
}

export default App
