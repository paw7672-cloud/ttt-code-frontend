import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./student/dashboar";
import AdminDashboard from "./admin/adminDashboard";
import Home from "./pages/home";
import Privacy from "./pages/privacy";

import Scholarship from "./pages/scholarship";
import VissionMission from "./pages/vissionMission";
import Testimonial from "./pages/testimonial";
import TermsAndConditions from "./pages/termsandConditions";
import ReturnRefund from "./pages/returnRefund";
import PaymentForm from "./component/paymentForm";
import Registration from "./pages/registration";

import SubjectCards from "./pages/subjectCards";
import AboutPage from "./component/about/aboutpage";
import Concept from "./component/about/concept";
import Ttt from "./component/tttDifferent/tttPage";
import Courses from "./component/courses/coursesPage";
import VariousModules from "./component/courses/variousModules";
import DesignCup from "./component/courses/desginCup";
import OurPrograms from "./component/courses/ourPrograms";
import ForStudents from "./component/whyjointtt/forStudents";
import ForSchools from "./component/whyjointtt/ForSchools";
import ForCorporates from "./component/whyjointtt/forCorporates";
import ForParents from "./component/whyjointtt/forParents";
import ContactUs from "./component/contactUs/contactusPage";

function AppRoutes() {
  return (
    <Routes>
       {/* This is home page routes  */}


        <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/scholarships" element={<Scholarship />} />  
      <Route path="/vission" element={<VissionMission />} />
      <Route path="/testimonial" element={<Testimonial/>}/>
      <Route path="/terms-conditions" element={<TermsAndConditions/>}/>
      <Route path="/return-refund" element={<ReturnRefund/>}/>
      <Route path="/ieeo-payment" element={<PaymentForm/>}/>
      <Route path ="/ieeo-registration" element={<Registration/>}/>
      {/* <Route path ="/login" element={<Login/>}/> */}
      <Route path ="/olympiad" element={<SubjectCards/>}/>




   
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />


 {/* ABOUT US ROUTERS */}

 
        <Route path="/aboutus-introduction" element={<AboutPage />} />
        <Route path="/aboutus-vision" element={<AboutPage />} />
        <Route path="/aboutus-concept" element={<Concept/>}/>

 {/* How ttt different Routes? */}
<Route path="/howdifferent" element={<Ttt />} />



{/* // Routes of courses */}

<Route path="/courses" element={<Courses/>}/>
<Route path="/courses-modules" element={<VariousModules/>}/>

<Route path="/design-cup" element={<DesignCup />} />
<Route path="our-programs"element={<OurPrograms/>}/>

 {/* Why join TTT */}

<Route path="/why/students"element={<ForStudents/>}/>
<Route path="/why/schools"element={<ForSchools/>}/>
<Route path="/why/corporates" element={<ForCorporates/>}/>
<Route path="/why/parents"element={<ForParents/>}/>

{/* //About Us */}

<Route path="/connect/contact" element={<ContactUs/>}/>


    </Routes>
  
   
  );
}

export default AppRoutes;