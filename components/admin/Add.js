import styles from "../../styles/ComponentStyles/admin/Add.module.css";

const Add = () => {
  return (
    <div>
      <div className={styles.professional_table}>
        <div className={styles.head_wrapper}>
          <h3 className="red-head">Add Professional</h3>
        </div>
        <div className="container">
          <div className={styles.add_container}>
            <div className="row">
              <div className="col-md-12">
                <div className={styles.add_form}>
                  <div className="text-wrapper">
                    <form className={styles.add_form_fields}>
                      <div className={styles.card_div}>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Name
                          </label>
                          <input type="text" className="form-control" id=" " />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Username
                          </label>
                          <input type="text" className="form-control" id=" " />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Email Address
                          </label>
                          <input type="email" className="form-control" id=" " />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Area
                          </label>
                          <select className="form-control" size={0}>
                            <option value="Lahore">abc</option>
                            <option value="Karachi">abcd</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner}>City</label>
                          <select className="form-control" size={0}>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Geo Codes
                          </label>
                          <input type className="form-control" id=" " />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Description
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Display Picture
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Portfolio Pictures
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFileMultiple"
                            multiple
                          />
                        </div>
                        <div className="form-group">
                          <label className={("category", styles.label_inner)}>
                            Categories
                          </label>
                          <div className="form-check form-check-inline padding-0">
                            <input
                              className="form-check-input category-cbox"
                              type="checkbox"
                              id="inlineCheckbox1"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label category-lbl"
                              htmlFor="inlineCheckbox1"
                            >
                              One
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input category-cbox"
                              type="checkbox"
                              id="inlineCheckbox2"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label category-lbl"
                              htmlFor="inlineCheckbox2"
                            >
                              Two
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input category-cbox"
                              type="checkbox"
                              id="inlineCheckbox3"
                              defaultValue="option3"
                            />
                            <label
                              className="form-check-label category-lbl"
                              htmlFor="inlineCheckbox3"
                            >
                              Three
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label
                            className={styles.label_inner}
                            htmlFor="number"
                          >
                            CNIC
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id=" "
                          />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner}>
                            Additional Areas
                          </label>
                          <input
                            placeholder="Press enter to add additional areas"
                            type="text"
                            className="form-control"
                            id=" "
                          />
                          <div className="area-tags">
                            area
                            <span className="icon-close">x</span>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Office Address
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label className={styles.label_inner} htmlFor>
                            Secondary Address
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-check form-switch status-label">
                          <label
                            className={styles.label_inner}
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Active Status
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckChecked"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          ></label>
                        </div>
                        <div className="form-group mb-0">
                          <label className={styles.label_inner} htmlFor>
                            Contact
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id=" "
                          />
                        </div>
                      </div>
                      <div className={styles.btn_div}>
                        <button
                          type="submit"
                          className={(styles.btn, styles.btn_red)}
                        >
                          <a href="#"> Add Professional </a>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
