
import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const UserProfile = lazy(() => import('./pages/UserProfile.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return <BrowserRouter><Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<UserProfile/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  </Routes></BrowserRouter>;
}
