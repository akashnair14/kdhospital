import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Doctors from './pages/Doctors'
import DoctorProfile from './pages/DoctorProfile'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Contact from './pages/Contact'
import Emergency from './pages/Emergency'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import DepartmentDetail from './pages/DepartmentDetail'

function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="services/:id" element={<DepartmentDetail />} />
                    <Route path="doctors" element={<Doctors />} />
                    <Route path="doctors/:id" element={<DoctorProfile />} />
                    <Route path="appointment" element={<Appointment />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:id" element={<BlogArticle />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="emergency" element={<Emergency />} />
                    <Route path="privacy" element={<PrivacyPolicy />} />
                    <Route path="terms" element={<TermsOfService />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
