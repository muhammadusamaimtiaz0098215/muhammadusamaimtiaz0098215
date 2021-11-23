import { useRouter } from "next/router";
import Add from "../../components/admin/Add";
import Login from "../../components/admin/Login";
import Professionals from "../../components/admin/Professional";

const varcomp = () => {
  const router = useRouter();
  const { param } = router.query;
  // console.log(param);
  const routeHandler = () => {
    switch (param) {
      case "login":
        return <Login />;

      case "add":
        return <Add />;

      case "professionals":
        return <Professionals />;

      default:
        break;
    }
  };
  return <>{routeHandler()}</>;
};

export default varcomp;
