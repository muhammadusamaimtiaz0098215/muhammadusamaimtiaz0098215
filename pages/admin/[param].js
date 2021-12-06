import { useRouter } from "next/router";
import Add from "../../components/admin/Add";
import EditProfesional from "../../components/admin/EditProfesional";
import Login from "../../components/admin/Login";
import Professionals from "../../components/admin/Professional";

const varcomp = () => {
  const router = useRouter();
  const { param } = router.query;
  const routeHandler = () => {
    switch (param) {
      case "login":
        return <Login />;

      case "add":
        return <Add />;

      case "professionals":
        return <Professionals />;

      case "edit":
        return <EditProfesional />;

      default:
        break;
    }
  };
  return <>{routeHandler()}</>;
};

export default varcomp;
