import { useRouter, withRouter } from "next/router";
import Image from "next/image";
import images from "../public/assets/images/index";

const NonDashboardRoutes = [
  "/signin",
  "/forgot",
  "/_error",
  "/resetpassword",
  "/resend",
];

const Page = ({ router, children }) => {
  const route = useRouter();
  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);

  return (
    <div>
      {!isNotDashboard && (
        <div>
          <div className="navbar-main">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a href="/" className="navbar-brand">
                  <Image width={146} height={28} src={images.logo} />
                </a>
                {route.query.param === "login" ? null : (
                  <span>
                    <div className="user-img">
                      <Image src={images.professional} />
                    </div>
                  </span>
                )}
              </div>
            </nav>
          </div>
          {route.query.param === "login" ? null : (
            <div className="sidenav">
              <a
                className="g-cursor-pointer"
                onClick={() => route.push("/admin/login")}
              >
                <span>
                  <Image src={images.home} alt="home" />
                </span>
                Home
              </a>
              <a
                className="g-cursor-pointer"
                onClick={() => route.push("/admin/professionals")}
              >
                <span>
                  <Image
                    className="overview-img"
                    src={images.overview}
                    alt="overview"
                  />
                </span>
                Overview
              </a>
              <a
                className="g-cursor-pointer"
                onClick={() => route.push("/admin/professionals")}
              >
                <span>
                  <Image src={images.pack} alt="pro" />
                </span>
                Professionals
              </a>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default withRouter(Page);
