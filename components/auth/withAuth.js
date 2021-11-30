import { useRouter } from "next/router";

const withAuth = (Wrapped) => {
  return (props) => {
    const router = useRouter();

    const token_retreived = localStorage.getItem("token");

    if (!token_retreived) {
      router.push("/admin/login");
      return null;
    } else {
      return <Wrapped {...props} />;
    }
    return null;
  };
};
export default withAuth;
