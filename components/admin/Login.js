import styles from "../../styles/ComponentStyles/admin/Login.module.scss";
import images from "../../public/assets/images/index";
import { style } from "dom-helpers";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form}>
        <div className>
          <h3 className={styles.title_lg}>
            welcome to <span>Graana.com!</span>
          </h3>
          <div className={styles.text_wrapper}>
            <h4>Sign in</h4>
            <Form
              onSubmit={handleSubmit(onsubmit)}
              className={styles.login_form_fields}
            >
              <Form.Group className={styles.form_group}>
                {/* <label htmlFor="inputEmail">Email address</label> */}
                <Form.Control
                  type="email"
                  {...register("Email", { required: true, maxLength: 32 })}
                  className={styles.form_control}
                  placeholder="Email"
                  name="Email"
                />
                {errors?.Email?.type === "required" && (
                  <p className={styles.Login_p}>Please provide a Valid Email</p>
                )}
              </Form.Group>
              <Form.Group className={styles.form_group}>
                {/* <label htmlFor="inputPassword">Password</label> */}
                <div className="row">
                  {/* className="col-11" */}
                  <div className={`${styles.hidedivset} col-11`}>
                    <Form.Control
                      type="password"
                      {...register("Password", {
                        required: true,
                        minLength: 8,
                        maxLength: 50,
                      })}
                      className={styles.form_control}
                      placeholder="Password"
                      id="inputPassword"
                    />
                    {errors?.Password?.type === "required" && (
                      <p className={styles.Login_p}>
                        Password must have atleast 8 characters
                      </p>
                    )}
                  </div>
                  {/* className="col-1 pt-4 pd-4" */}
                  <div className={`${styles.hideimgset} col-1 pt-4 pd-4`}>
                    <Image src={images.hide} height={10} width={16} />
                  </div>
                </div>
                <a href="#" className={styles.forgot_title}>
                  Forgot your Password?
                </a>
              </Form.Group>
              <div className={styles.btn_div}>
                <div className={styles.btn}>
                  <Button type="submit" className={styles.btn_red}>
                    <a
                      onClick={() => {
                        router.push("/admin/login");
                      }}
                      className="btn text-white"
                    >
                      {" "}
                      Login{" "}
                    </a>
                  </Button>
                  <Button type="submit" className={styles.btn_white}>
                    <a className="btn" href="./list.html">
                      {" "}
                      Sign up{" "}
                    </a>
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
