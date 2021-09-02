import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
// =
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePage from './pages/CreatePage';
import ProfilePage from './pages/ProfilePage';
import Loader from './components/Loader';
import PostModal from './components/PostModal';
import { checkUser, setIsLoading } from './store/slices/authSlice';
// import Modal from './components/Modal';

function App() {
   const isLoading = useSelector((state) => state.auth.isLoading);

   const dispatch = useDispatch();
   // get;
   useEffect(() => {
      if (localStorage.getItem('jwt')) {
         dispatch(checkUser())
            .then(unwrapResult)
            .catch(() => localStorage.removeItem('jwt'));
      } else {
         dispatch(setIsLoading(false));
      }
   }, [dispatch]);

   const location = useLocation();
   const background = location.state?.background;
   // console.log(background);

   return isLoading ? (
      <div className='flex items-center justify-center h-screen w-full'>
         <Loader />
      </div>
   ) : (
      <div className='App'>
         <Switch location={background || location}>
            <Route path='/login' exact>
               <LoginPage />
            </Route>
            <Route path='/register' exact>
               <RegisterPage />
            </Route>
            <Route path='/' exact>
               <IndexPage />
            </Route>
            <Route path='/create' exact>
               <CreatePage />
            </Route>
            <Route path='/profile/:_id' exact>
               <ProfilePage />
            </Route>
         </Switch>
         {background && (
            <Route path='/posts/:_id'>
               <PostModal />
            </Route>
         )}
      </div>
   );
}

export default App;

{
   /* // u
//  {isAuth}
// !
// </Post>// </Post> */
}
