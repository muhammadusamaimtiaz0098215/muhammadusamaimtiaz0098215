import styles from "../../styles/ComponentStyles/admin/Login.module.css";
import images from "../../public/assets/images/index";
import { style } from "dom-helpers";
import Image from "next/image";

const Login = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.login_container}>
        <div className={styles.login_form}>
          <div className>
            <h3 className={styles.title_lg}>
              welcome to <span>Graana.com!</span>
            </h3>
            <div className="text-wrapper">
              <h4>Sign in</h4>
              <form className={styles.login_form_fields}>
                <div className={styles.form_group}>
                  {/* <label htmlFor="inputEmail">Email address</label> */}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="inputEmail"
                  />
                </div>
                <div className={styles.form_group}>
                  {/* <label htmlFor="inputPassword">Password</label> */}
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="inputPassword"
                  />
                  <Image src={images.hide} alt="Hide" />
                  <a href="#" className={styles.forgot_title}>
                    Forgot your Password?
                  </a>
                </div>
                <div className={styles.btn_div}>
                  <button
                    type="submit"
                    className={styles.btn}
                    id={styles.btn_red}
                  >
                    <a className="btn text-white" href="./list.html">
                      {" "}
                      Login{" "}
                    </a>
                  </button>
                  <button
                    type="submit"
                    className={styles.btn}
                    id={styles.btn_white}
                  >
                    <a className="btn" href="./list.html">
                      {" "}
                      Sign up{" "}
                    </a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
