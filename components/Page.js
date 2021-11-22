import { withRouter } from "next/router";

const NonDashboardRoutes = [
  "/signin",
  "/forgot",
  "/_error",
  "/resetpassword",
  "/resend",
];

const Page = ({ router, children }) => {
  return <>Workable</>;
};

export default withRouter(Page);
