<<<<<<< HEAD
import codeSplittingHelper from './codeSplittingHelper';

const HomePage = codeSplittingHelper(() => import('./components/HomePage'));
const LandingPage = codeSplittingHelper(() => import('./components/LandingPage'));
=======
// import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
>>>>>>> progress css

export default [
  {
    path: '/',
    component: LandingPage,
    exact: true,
  },
  {
    path: '/pets',
    component: HomePage,
    exact: true,
  },
];
