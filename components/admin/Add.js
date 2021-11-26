import { Form, Button } from "react-bootstrap";
import styles from "../../styles/ComponentStyles/admin/Add.module.scss";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect } from "react";
import { CityAPI } from "../../pages/api/apiCalls";

const Add = () => {
  let city_ID = "";
  useEffect(() => {
    CityAPI().then((res) => {
      console.log(res.data[0].name);
      let len = res.data.length;
      city_ID = res.data;

      console.log(city_ID[2]);
    });
  });

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
                    <Form
                      onSubmit={handleSubmit(onsubmit)}
                      className={styles.add_form_fields}
                    >
                      <div className={styles.card_div}>
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Name
                          </Form.Label>
                          <Form.Control
                            {...register("Name", {
                              required: true,
                              minLength: 3,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            type="text"
                          />
                        </Form.Group>
                        {errors?.Name?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Username
                          </Form.Label>
                          <Form.Control
                            {...register("Username", {
                              required: true,
                              minLength: 3,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            type="text"
                            id=" "
                          />
                        </Form.Group>
                        {errors?.Username?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Email Address
                          </Form.Label>
                          <Form.Control
                            {...register("Email", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            type="email"
                            id=" "
                          />
                        </Form.Group>
                        {errors?.Email?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            City
                          </Form.Label>
                          <Form.Select
                            {...register("City", {
                              required: true,
                            })}
                          >
                            <option>Please select your City</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                          </Form.Select>
                        </Form.Group>
                        {errors?.City?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Area
                          </Form.Label>
                          <Form.Select
                            {...register("Area", {
                              required: true,
                            })}
                            aria-label="Default select example"
                          >
                            <option>Please Select Your Area from here</option>
                            <option>abc</option>
                            <option>abcd</option>
                          </Form.Select>
                        </Form.Group>
                        {errors?.Area?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Geo Codes
                          </Form.Label>
                          <Form.Control
                            {...register("GeoCodes", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            id=" "
                          />
                        </Form.Group>{" "}
                        {errors?.GeoCodes?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Description
                          </Form.Label>
                          <Form.Control
                            {...register("Description", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            as="textarea"
                            id="exampleFormControlTextarea1"
                            defaultValue={""}
                          />
                        </Form.Group>{" "}
                        {errors?.Description?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Display Picture
                          </Form.Label>
                          <Form.Control
                            {...register("DisplayPicture", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            type="file"
                            id="formFile"
                          />
                        </Form.Group>
                        {errors?.DisplayPicture?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Portfolio Pictures
                          </Form.Label>
                          <Form.Control
                            {...register("PortfolioPicture", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            type="file"
                            id="formFileMultiple"
                            multiple
                          />
                        </Form.Group>
                        {errors?.PortfolioPicture?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Categories
                          </Form.Label>
                          <div className="form-check form-check-inline padding-0">
                            <input
                              className={styles.category_cbox}
                              type="checkbox"
                              id="inlineCheckbox1"
                              //defaultValue="option1"
                              value="One"
                              {...register("Category", {
                                required: true,
                              })}
                            />
                            {errors?.Category?.type === "required" && (
                              <p className={styles.Login_p}>
                                This field is required
                              </p>
                            )}
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
                              //defaultValue="option2"
                              value="Two"
                              {...register("Category", {
                                required: true,
                              })}
                            />
                            {errors?.Category?.type === "required" && (
                              <p className={styles.Login_p}>
                                This field is required
                              </p>
                            )}
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
                              //defaultValue="option3"
                              value="Three"
                              {...register("Category", {
                                required: true,
                              })}
                            />
                            {errors?.Category?.type === "required" && (
                              <p className={styles.Login_p}>
                                This field is required
                              </p>
                            )}
                            <label
                              className="form-check-label category-lbl"
                              htmlFor="inlineCheckbox3"
                            >
                              Three
                            </label>
                          </div>
                        </Form.Group>
                        <Form.Group className={`${styles.form_group} mt2`}>
                          <Form.Label
                            className={styles.label_inner}
                            htmlFor="number"
                          >
                            CNIC
                          </Form.Label>
                          <Form.Control
                            {...register("CNIC", {
                              required: true,
                              maxLength: 13,
                            })}
                            className={styles.form_control}
                            type="number"
                            id=" "
                          />
                        </Form.Group>
                        {errors?.CNIC?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Additional Areas
                          </Form.Label>
                          <Form.Control
                            {...register("AdditionalAreas", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            placeholder="Press enter to add additional areas"
                            type="text"
                            id=" "
                          />

                          <div className={styles.area_tags}>
                            area
                            <span className="icon-close">x</span>
                          </div>
                        </Form.Group>{" "}
                        {errors?.AdditionalAreas?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={`${styles.form_group} pt-3`}>
                          <Form.Label className={styles.label_inner}>
                            Office Address
                          </Form.Label>
                          <Form.Control
                            {...register("OfficeAddress", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            as="textarea"
                            id="exampleFormControlTextarea1"
                            defaultValue={""}
                          />
                        </Form.Group>
                        {errors?.OfficeAddress?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group className={styles.form_group}>
                          <Form.Label className={styles.label_inner}>
                            Secondary Address
                          </Form.Label>
                          <Form.Control
                            {...register("SecondaryAddress", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            as="textarea"
                            id="exampleFormControlTextarea1"
                            defaultValue={""}
                          />
                        </Form.Group>
                        {errors?.SecondaryAddress?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group
                          className={styles.form_group}
                          //className="form-check form-switch status-label"
                        >
                          <Form.Label
                            className={styles.label_inner}
                            htmlFor="flexSwitchCheckChecked"
                          >
                            Active Status
                          </Form.Label>
                          <Form.Switch>
                            <Form.Control
                              className={`${styles.form_check_input} form-check-input`}
                              //className={styles.form_check_input}
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              {...register("ActiveStatus", {
                                required: true,
                              })}
                            />
                          </Form.Switch>
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          ></label>
                        </Form.Group>{" "}
                        {errors?.ActiveStatus?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                        <Form.Group
                          className={styles.form_group}
                          // className="form-group mb-0"
                        >
                          <Form.Label className={styles.label_inner}>
                            Contact
                          </Form.Label>
                          <Form.Control
                            {...register("Contact", {
                              required: true,
                              maxLength: 32,
                            })}
                            className={styles.form_control}
                            type="number"
                          />
                        </Form.Group>
                        {errors?.Contact?.type === "required" && (
                          <p className={styles.Login_p}>
                            This field is required
                          </p>
                        )}
                      </div>
                      <div className={styles.btn_div}>
                        <Button
                          type="submit"
                          className={(styles.btn, styles.btn_red)}
                        >
                          <a
                            onClick={() => {
                              router.push("/admin/add");
                            }}
                          >
                            {" "}
                            Add Professional{" "}
                          </a>
                        </Button>
                      </div>
                    </Form>
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
