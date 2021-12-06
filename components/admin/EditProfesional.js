import styles from "../../styles/ComponentStyles/admin/Edit_Professionals.module.scss";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { View_Professional } from "../../pages/api/apiCalls";
import { AreaAPI, CategoryAPI, CityAPI } from "../../pages/api/apiCalls";

const EditProfesional = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formfields, setFormfields] = useState({
    active: false,
    area: "",
    average_rating: 0,
    avg_task_time: 0,
    city: "",
    categories: [],
    cnic: "",
    completed_task_count: 0,
    description: "",
    email: "",
    location: {},
    media: [{ path: "" }],
    name: "",
    office_address: "",
    password: "",
    phone: "",
    secondary_office_address: "",
    username: "",
  });

  const [city, setCity] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedcity, setSelectedCity] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedcategory, setSelectedcategory] = useState([
    formfields.categories,
  ]);
  const [test, setTest] = useState([]);

  const CityIdSelector = (e) => {
    console.log(e.target.value);
    cityIdConverter(e.target.value);
  };

  const cityIdConverter = (e) => {
    console.log(e);
    city.map((m) => {
      m.name == e ? setSelectedCity(m.id) : null;
    });
  };

  const selectcity = () => {
    let items = [];
    city.map((c) =>
      items.push(
        <option key={c?.id} value={c?.value} name={c?.name}>
          {c?.name}
        </option>
      )
    );

    return items;
  };

  const selectarea = () => {
    let areas_arr = [];
    areas.map((a) =>
      areas_arr.push(
        <option key={a?.id} value={a?.name}>
          {a?.name}
        </option>
      )
    );
    return areas_arr;
  };

  const selectcategory = () => {
    let category_arr = [];
    category.map((c) =>
      category_arr.push(
        <option key={c.id} value={c?.id}>
          {c?.name}
        </option>
      )
    );
    return category_arr;
  };

  let data11 = selectcategory();
  let data22 = formfields.categories;
  const selectcategorychange = (e) => {
    data11.map((x) => {
      x.props.value == e.target.value
        ? setSelectedcategory([...selectedcategory, x.props.children])
        : null;
    });
    setTest([...selectedcategory, e.target.value]);
  };
  const clickcheck = (category) => {
    let s = selectedcategory.filter((item) => item !== category);
    setSelectedcategory([...s]);
  };

  const onChange = (e) => {
    let img = e.target.files[0];
    if (img) {
      setFormfields({ ...formfields, media: e.target.files[0] });
    }
  };
  useEffect(() => {
    View_Professional(id).then((res) => {
      console.log(res.data.professionalDetails);

      setFormfields({
        ...formfields,
        name: res.data.professionalDetails.name,
        username: res.data.professionalDetails.username,
        email: res.data.professionalDetails.email,
        city: res.data.professionalDetails.city,
        area: res.data.professionalDetails.area,
        location: res.data.professionalDetails.location,
        description: res.data.professionalDetails.description,
        categories: res.data.professionalDetails.categories,
        cnic: res.data.professionalDetails.cnic,
        office_address: res.data.professionalDetails.office_address,
        secondary_office_address:
          res.data.professionalDetails.secondary_office_address,
        active: res.data.professionalDetails.active,
        phone: res.data.professionalDetails.phone,
        media: res.data.professionalDetails.media[0]?.path,
      });

      CityAPI().then((res) => {
        setCity(res.data);
      });

      AreaAPI(selectedcity).then((res) => {
        setAreas(res.data);
      });

      CategoryAPI().then((res) => {
        setCategory(res.data);
      });
    });
    // setSelectedcategory(formfields.categories);
  }, [selectedcity]);

  const onSubmit = (data) => {
    console.log("MY DATA", data);
    try {
      const body = {
        ...data,
        photo: displayPicState,
      };
      let formData = new FormData();

      let d = { ...body };

      for (let key in d) {
        if (key !== "categories") {
          formData.append(key, d[key]);
        }
      }
      data.categories?.forEach((a, index) => {
        formData.append(`categories[${index}]`, a);
      });
    } catch (error) {}
  };

  return (
    <div>
      {console.log("HELLO", selectedcategory)}
      <div>
        <div className={styles.professional_table}>
          <div className={styles.head_wrapper}>
            <h3 className="red-head">Edit Professional</h3>
          </div>
          <div className="container">
            <div className={styles.add_container}>
              <div className="row">
                <div className="col-md-12">
                  <div className={styles.add_form}>
                    <div className="text-wrapper">
                      <Form
                        onSubmit={handleSubmit(onSubmit)}
                        className={styles.add_form_fields}
                      >
                        <div className={styles.card_div}>
                          <Form.Group className={styles.form_group}>
                            <Form.Label className={styles.label_inner}>
                              Name
                            </Form.Label>
                            <Form.Control
                              {...register("name", {
                                // required: true,
                                minLength: 3,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              type="text"
                              name="name"
                              defaultValue={formfields.name}
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
                              {...register("username", {
                                // required: true,
                                minLength: 3,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              type="text"
                              name="username"
                              defaultValue={formfields.username}
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
                              {...register("email", {
                                // required: true,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              type="email"
                              name="email"
                              valdefaultValueue={formfields.email}
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
                              id="areacheck"
                              {...register("city", {
                                // required: true,
                              })}
                              name="city"
                              onChange={(e) => CityIdSelector(e)}
                            >
                              <option value={formfields.city}>
                                {formfields.city}
                              </option>
                              {selectcity()}
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
                              {...register("area", {
                                // required: true,
                              })}
                              aria-label="Default select example"
                              value={formfields.area}
                            >
                              {selectarea()}
                              <option value="">{formfields.area}</option>
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
                              {...register("geocodes", {
                                // required: true,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              name="location"
                              value={formfields.location}
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
                              {...register("description", {
                                // required: true,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              as="textarea"
                              id="exampleFormControlTextarea1"
                              name="description"
                              defaultValue={formfields.description}
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
                              {...register("displaypicture", {
                                // required: true,
                                maxLength: 32,
                              })}
                              multiple
                              className={styles.form_control}
                              type="file"
                              id="formFile"
                              onChange={(e) => {
                                ondisplaypichange(e);
                              }}
                              name="photo"
                              value={formfields.media[0].path}
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
                              {...register("portfoliopicture", {
                                // required: true,
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
                          <Form.Group
                            className={`${styles.form_group} mb-0 pb-3`}
                          >
                            <Form.Label className={styles.label_inner}>
                              Categories
                            </Form.Label>
                            <Form.Select
                              {...register("categories", {
                                // required: true,
                              })}
                              onChange={(e) => selectcategorychange(e)}
                              name="categories"
                              value={formfields.categories.name}
                            >
                              {selectcategory()}

                              <option value="">
                                Please Select your Category
                              </option>
                            </Form.Select>
                          </Form.Group>
                          {data22.map((cat) => {
                            return (
                              <div className={styles.categories_maindiv}>
                                <div
                                  className={`${styles.categoty_tags} `}
                                  id="demo"
                                >
                                  {cat.name}
                                  <span
                                    className="icon-close"
                                    onClick={() => {
                                      clickcheck(cat);
                                    }}
                                  >
                                    x
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                          <Form.Group className={`${styles.form_group} mt-3`}>
                            <Form.Label
                              className={styles.label_inner}
                              htmlFor="number"
                            >
                              CNIC
                            </Form.Label>
                            <Form.Control
                              {...register("CNIC", {
                                // required: true,
                                maxLength: 13,
                              })}
                              className={styles.form_control}
                              type="number"
                              name="cnic"
                              value={formfields.cnic}
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
                              {...register("additionalareas", {
                                // required: true,
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
                              {...register("officeaddress", {
                                // required: true,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              as="textarea"
                              id="exampleFormControlTextarea1"
                              name="office_address"
                              value={formfields.office_address}
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
                              {...register("secondaryaddress", {
                                // required: true,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              as="textarea"
                              id="exampleFormControlTextarea1"
                              name="secondary_office_address"
                              value={formfields.secondary_office_address}
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
                                {...register("activestatus", {
                                  // required: true,
                                })}
                                name="active"
                                defaultChecked={formfields.active}
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
                              {...register("contact", {
                                // required: true,
                                maxLength: 32,
                              })}
                              className={styles.form_control}
                              type="number"
                              name="phone"
                              value={formfields.phone}
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
                            <a> Add Professional </a>
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
    </div>
  );
};

export default EditProfesional;
