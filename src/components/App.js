import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

// import Head from './Head';
// import LandingPage from '';
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home'),
  loading: () => <div>Loading...</div>
});

const LoadableLandingPage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'about' */ '../pages/site/LandingPage/index.jsx'
    ),
  loading: () => <div>Loading...</div>
});

const App = () => (
  // <div className="app">
  //   <Head />

  //   <nav aria-label="main navigation">
  //     <NavLink exact to="/" activeClassName="active">
  //       Home
  //     </NavLink>{' '}
  //     {/* <NavLink exact to="/about" activeClassName="active">
  //       About
  //     </NavLink> */}
  //   </nav>

  //   <main className="main">
  //     <Switch>
  //       <Route exact path="/" component={LoadableHome} />
  //       {/* <Route path="/about" component={LoadableAbout} /> */}
  //     </Switch>
  //   </main>

  //   <footer />
  // </div>
  <Switch>
    <Route path="/" exact component={LoadableLandingPage} />
    {/* <Route
          path="/"
          render={(props) => {
            const subdomain = window.location.hostname.split('.');
            if (subdomain && subdomain.length > 2 && !subdomain.includes('www'))
              return <UserWebsiteRoutes {...props} subdomain={subdomain[0]} />;
            return <MarketingSiteRoutes {...props} />;
          }}
        /> */}
  </Switch>
);

// import React, { useEffect } from 'react';
// import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// // import { UserWebsiteRoutes } from '../pages/userSite';

// // import ScrollToTop from './util';
// import Loadable from 'react-loadable';

// import Head from './Head';

// const LoadableHome = Loadable({
//   loader: () => import(/* webpackChunkName: 'home' */ './Home'),
//   loading: () => <div>Loading...</div>
// });
// // import signUpRoutes from "../pages/main/signUpRoutes";
// const App = ({ history }) => {
//   const subDomain = localStorage.getItem('sub_domain');

//   return (
//     // <ScrollToTop>
//       <Switch>
//         <Route path="/" component={LoadableHome} />
//         {/* <Route
//           path="/"
//           render={(props) => {
//             const subdomain = window.location.hostname.split('.');
//             if (subdomain && subdomain.length > 2 && !subdomain.includes('www'))
//               return <UserWebsiteRoutes {...props} subdomain={subdomain[0]} />;
//             return <MarketingSiteRoutes {...props} />;
//           }}
//         /> */}
//       </Switch>
//     // </ScrollToTop>
//   );
// };

export default withRouter(App);
