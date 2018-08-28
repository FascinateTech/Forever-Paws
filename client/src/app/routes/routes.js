import codeSplittingHelper from './codeSplittingHelper';

const PetIndex = codeSplittingHelper(() => import('../users/routes/pet'));
const Profile = codeSplittingHelper(() => import('../users/routes/pet/Profile'));
const User = codeSplittingHelper(() => import('../users/routes/pet/User'));
const LandingPage = codeSplittingHelper(() => import('../LandingPage'));
const AddPet = codeSplittingHelper(() => import('../shelters/routes/AddPet'));
const Account = codeSplittingHelper(() => import('../shelters/routes/shelter'));
const Login = codeSplittingHelper(() => import('../shelters/routes/Login'));
const MyPet = codeSplittingHelper(() => import('../shelters/routes/Pets'));

export default [
  {
    path: '/',
    component: LandingPage,
    exact: true,
  },
  {
    path: '/pets',
    component: PetIndex,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/user',
    component: User,
    exact: true,
  },
  {
    path: '/portal',
    component: Login,
    exact: true,
  },
  {
    path: '/account',
    component: Account,
    exact: true,
  },
  {
    path: '/addpet',
    component: AddPet,
    exact: true,
  },
  {
    path: '/mypets',
    component: MyPet,
    exact: true,
  },
];
