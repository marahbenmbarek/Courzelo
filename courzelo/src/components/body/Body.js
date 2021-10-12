import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './authentification/login'
import Home from './home/home';
import Register from './authentification/register';
import ActivationEmail from './authentification/ActivationEmail';
import {useSelector} from 'react-redux'
import NotFound from '../util/NotFound/NotFound'
import ForgotPass from './authentification/ForgetPassword';
import ResetPass from '../body/authentification/ResetPassword'
import Profile from './profile/Profile'
import Courses from './courses/GererCours/courses';
import Admin from '../dashboard/index'
import DetailAddCourse from './courses/GererCours/DetailAddCourse'


import Gerercoursemodifsupp from './courses/GererCours/gerecoursemodifsupp'
import MyCourses from './courses/GererCours/MyCourses'


import GererCourses from './courses/GererCourses'
import GraduationEtudiant from './courses/GraduationEtudiant'
import QuizResults from './courses/QuizResults'
import AddCourse from './courses/GererCours/addcourse'
import Modifiersupcourse from './courses/GererCours/modifier_sup_course'
import Modifiersupcoursform from './courses/GererCours/modifierFormCoursDetails'
import Modifiersupintro from './courses/GererCours/modifierIntro'
import Modifiersupchapitres from './courses/GererCours/modifierChapitres'
import Modifiersupconclusion from './courses/GererCours/modifierConclusion'
import CourseByCategory from './courses/GererCours/CourseByCategory'
import qst from './courses/components/UserForm'
import DetailCourse from './courses/GererCours/DetailCourse';
import PhaseADetail from './courses/GererCours/PhaseADetail';
import PhaseBDetail from './courses/GererCours/PhaseBDetail';
import PhaseCDetail from './courses/GererCours/PhaseCDetail';
import PhaseDDetail from './courses/GererCours/PhaseDDetail';
import PhaseEDetail from './courses/GererCours/PhaseEDetail';
import PhaseFDetail from './courses/GererCours/PhaseFDetail';
import PhaseGDetail from './courses/GererCours/PhaseGDetail';
import PhaseHDetail from './courses/GererCours/PhaseHDetail';
import QuizDetail from './courses/GererCours/QuizDetail';

import Chapitre0Detail from './courses/GererCours/Chapitre0Detail';
import Chapitre1Detail from './courses/GererCours/Chapitre1Detail';
import Chapitre2Detail from './courses/GererCours/Chapitre2Detail';
import Chapitre3Detail from './courses/GererCours/Chapitre3Detail';
import Chapitre4Detail from './courses/GererCours/Chapitre4Detail';
import AllCourses from './courses/GererCours/AllCourses';
import Contact from './contact/contact'
import AboutUS from './AboutUS/AboutUs'
import Index from '../dashboard/index'
import Header from './header footer/header'
import Blog from './blog/home'
import FreeCourses from './courses/GererCours/FreeCourses'
import PayedCourses from './courses/GererCours/PayedCourses'
import Certification from './Certification/Certification'
import Panier from './panier/panier'
import Categorie from './categorie/categorie'
import Progress from './Progress/Progress';




function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged,isAdmin} = auth
    return (
        <>
        <Header/>
        <section>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/AboutUS" component={AboutUS} exact />
                

                <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />

                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />

                <Route path="/profile" component={isLogged ? Profile : NotFound} exact />
                
                <Route path="/MyCourses" component={isLogged ? MyCourses : NotFound} exact />
                <Route path="/DetailAddCourse" component={isLogged ? DetailAddCourse : NotFound} exact />
                
                <Route path="/QuizResults" component={isLogged ? QuizResults : NotFound} exact />
                <Route path="/GraduationEtudiant" component={isLogged ? GraduationEtudiant : NotFound} exact />
                <Route path="/GererCourses" component={isLogged ? GererCourses : NotFound} exact />
                <Route path="/Gerercoursemodifsupp" component={isLogged ? Gerercoursemodifsupp : NotFound} exact />
                <Route path="/addcourse/:token" component={isLogged ? AddCourse : NotFound} exact />
                
                <Route path="/modifiersupcourse/:id" component={isLogged ? Modifiersupcourse : NotFound} exact />
                <Route path="/modifiersupcoursform/:id" component={isLogged ? Modifiersupcoursform : NotFound} exact />
                <Route path="/modifiersupintro/:id" component={isLogged ? Modifiersupintro : NotFound} exact />
                <Route path="/modifiersupchapitres/:id" component={isLogged ? Modifiersupchapitres : NotFound} exact />
                <Route path="/modifiersupconclusion/:id" component={isLogged ? Modifiersupconclusion : NotFound} exact />

                <Route path="/DetailCourse/:id" component={isLogged ? DetailCourse : NotFound} exact />
                <Route path="/PhaseADetail/:id" component={isLogged ? PhaseADetail : NotFound} exact />
                <Route path="/PhaseBDetail/:id" component={isLogged ? PhaseBDetail : NotFound} exact />
                <Route path="/PhaseCDetail/:id" component={isLogged ? PhaseCDetail : NotFound} exact />
                <Route path="/PhaseDDetail/:id" component={isLogged ? PhaseDDetail : NotFound} exact />
                <Route path="/PhaseEDetail/:id" component={isLogged ? PhaseEDetail : NotFound} exact />
                <Route path="/PhaseFDetail/:id" component={isLogged ? PhaseFDetail : NotFound} exact />
                <Route path="/PhaseGDetail/:id" component={isLogged ? PhaseGDetail : NotFound} exact />
                <Route path="/PhaseHDetail/:id" component={isLogged ? PhaseHDetail : NotFound} exact />

                <Route path="/QuizDetail/:id" component={isLogged ? QuizDetail : NotFound} exact />
                <Route path="/Chapitre0Detail/:id" component={isLogged ? Chapitre0Detail : NotFound} exact />
                <Route path="/Chapitre1Detail/:id" component={isLogged ? Chapitre1Detail : NotFound} exact />
                <Route path="/Chapitre2Detail/:id" component={isLogged ? Chapitre2Detail : NotFound} exact />
                <Route path="/Chapitre3Detail/:id" component={isLogged ? Chapitre3Detail : NotFound} exact />
                <Route path="/Chapitre4Detail/:id" component={isLogged ? Chapitre4Detail : NotFound} exact />

                <Route path="/CourseByCategory/:categorie" component={isLogged ? CourseByCategory : NotFound} exact />

                <Route path="/courses" component={isLogged ? GererCourses : NotFound} component={Courses} exact />
                <Route path="/allcourses" component={AllCourses} exact /> 
                <Route path="/FreeCourses"component={isLogged ? GererCourses : NotFound}  component={FreeCourses} exact /> 

                <Route path="/PayedCourses"component={isLogged ? GererCourses : NotFound}  component={PayedCourses} exact /> 

                <Route path="/qst" component={isLogged ? qst : NotFound} exact />

                <Route path="/admin" component={Admin} exact />

                <Route path="/blog" component={isLogged? Blog: NotFound} exact/>
            
                <Route path="/index" component={isAdmin? Index: NotFound} exact/>

                <Route path="/admin" component={Admin} exact />
                <Route path="/certification" component={Certification} exact />

                <Route path="/panier" component={isLogged ? Panier : NotFound} exact />
                <Route path="/categorie" component={isLogged ? Categorie : NotFound} exact />


                <Route path="/progress" component={isLogged ? Progress : NotFound} exact />
                



            </Switch>
        </section>
        </>
    )
}

export default Body
                