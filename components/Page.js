import { withRouter } from "next/router";

const NonDashboardRoutes = [
  "/signin",
  "/forgot",
  "/_error",
  "/resetpassword",
  "/resend",
];

const Page = ({ router, children }) => {
  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);

  return <>
    { !isNotDashboard && <>Side-Bar Component Here</> }
    { children }
  </>;
};

export default withRouter(Page);
