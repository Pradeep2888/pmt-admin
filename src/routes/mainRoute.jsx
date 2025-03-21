import { Suspense, lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import PageNotFound from './404';
import * as staticPath from "../core/constants/path-constants";
import DemoAll from '../pages/alldemo/DemoAll.jsx';
import AllProject from '../pages/allproject/AllProject';
import SingleProjectSkeleton from '../pages/singleprojectdetail/SingleProjectSkeleton';
import InboxPage from '../pages/inbox/InboxPage';
import PageFallback from './pageFallback';
import NortificationPageSkeleton from '../pages/nortification/NortificationPageSkeleton.jsx';
import CreateProject from '../pages/project/CreateProject.jsx';
import NewProjectForm from '../pages/project/NewProjectForm.jsx';
import LoginPage from '../pages/auth/LoginPage.jsx';
import SignupPage from '../pages/auth/SignupPage.jsx';
import CreateMember from '../pages/teammember/CreateMember.jsx';
import EditMember from '../pages/teammember/EditMember.jsx';
import EditMemberForm from '../pages/teammember/EditMemberForm.jsx';
import Cookies from 'js-cookie';
import Editprojectformskeleton from '../pages/editproject/Editprojectformskeleton.jsx';
import ProfilePage from '../pages/profile/ProfilePage.jsx';
import UserProfilePage from '../pages/userprofile/UserProfilePage.jsx';







const ApplicationLazyLoad = (Component) => (props) => {
  return (
    <Suspense fallback={<PageFallback />} >
      <Component {...props} />
    </Suspense>
  )
}

// const ApplicationBase = ApplicationLazyLoad(lazy(() => import("../layout/base/baseLayout.jsx")))
const ApplicationBase = ApplicationLazyLoad(
  lazy(() => import("../layout/base/BaseLayout.jsx"))
);




export default function MainRouts() {
  const routes = useRoutes([
    {
      path: staticPath.HOME,
      element: <PrivateRoute element={<ApplicationBase />} />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "alldemo",
          element: <DemoAll />,
        },
        {
          path: "allprojects",
          element: <AllProject />,
        },
        {
          path: "single/project/detail/:id",
          element: <SingleProjectSkeleton />,
        },
        {
          path: "inbox",
          element: <InboxPage />,
        },
        {
          path: "nortification",
          element: <NortificationPageSkeleton />,
        },
        {
          path: "project/create",
          element: <CreateProject />,
        },
        {
          path: "project/create/new",
          element: <NewProjectForm />,
        },
        {
          path: "user/create/new",
          element: <CreateMember />,
        },
        {
          path: "user/list",
          element: <EditMember />,
        },
        {
          path: "user/edit/:id",
          element: <EditMemberForm />,
        },
        {
          path: "/edit/projects/:id",
          element: <Editprojectformskeleton />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/user/:id",
          element: <UserProfilePage />
        }

      ],
    },
    {
      path: staticPath.HOME + "/login",
      element: <PublicRoute element={<LoginPage />} />
    },
    {
      path: staticPath.HOME + "/signup",
      element: <SignupPage />
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return routes;
}




const isAuthenticated = () => {
  const token = Cookies.get("adminToken");
  return !!token; 
};
// const PrivateRoute = ({ element }) => {
//   return isAuthenticated() ? element : <Navigate to={staticPath.HOME + '/login'} />;
// };


// const PublicRoute = ({ element }) => {
//   return isAuthenticated() ? <Navigate to={'/'} /> : element
// };


const PrivateRoute = ({ element }) => {
  return (
    <Suspense fallback={<PageFallback />}>
      {isAuthenticated() ? element : <Navigate to={staticPath.HOME + "/login"} />}
    </Suspense>
  );
};

const PublicRoute = ({ element }) => {
  return (
    <Suspense fallback={<PageFallback />}>
      {isAuthenticated() ? <Navigate to="/" /> : element}
    </Suspense>
  );
};
