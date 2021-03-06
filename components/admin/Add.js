import { Form, Button, InputGroup } from "react-bootstrap";
import styles from "../../styles/ComponentStyles/admin/Add.module.scss";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Add_professionalsAPI,
  AreaAPI,
  CategoryAPI,
  CityAPI,
} from "../../pages/api/apiCalls";
import withAuth from "../auth/withAuth";

const Add = () => {
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedcity, setSelectedcity] = useState(0);

  const [categoryId, setCategoryId] = useState([]);

  const [test, setTest] = useState([]);

  const [selectedcategory, setSelectedcategory] = useState([]);

  const [displayPicState, setDisplayPicState] = useState({});

  useEffect(() => {
    CityAPI().then((res) => {
      setCities(res.data);
    });

    AreaAPI(selectedcity).then((res) => {
      setAreas(res.data);
    });

    CategoryAPI().then((res) => {
      setCategories(res.data);
    });
  }, [selectedcity, selectedcategory, test]);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const selectcity = () => {
    let items = [];
    cities.map((c) =>
      items.push(
        <option key={c?.id} value={c?.id} name={c?.name}>
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
    categories.map((c) =>
      category_arr.push(
        <option key={c.id} value={c?.id}>
          {c?.name}
        </option>
      )
    );
    return category_arr;
  };

  const categoryIdConverter = () => {
    let empty = [];
    categories.map((xx) => {
      empty.push(xx.name, xx.id);
    });
    setCategoryId(empty);
    return empty;
  };

  const AreaIdHandler = (e) => {
    setSelectedcity(e.target.value);
  };
  let data11 = selectcategory();
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

  const ondisplaypichange = (e) => {
    let files = e.target.files[0];
    setDisplayPicState(files);
  };

  const onSubmit = async (data) => {
    try {
      let emptyid = [];
      let foo = categoryIdConverter();

      selectedcategory.map((m) => {
        foo.map((f, index) => {
          m == f ? emptyid.push(foo[index + 1]) : null;
        });
      });

      data.categories = emptyid;

      cities.map((c) => {
        data.city == c.id ? (data.city = c.name) : null;
      });

      const body = {
        ...data,
        photo: displayPicState,
      };

      console.log("d pic", displayPicState);
      let formData = new FormData();

      let d = { ...body };

      for (let key in d) {
        if (key !== "categories") {
          formData.append(key, d[key]);
        }
      }
      console.log(data);
      data.categories?.forEach((a, index) => {
        formData.append(`categories[${index}]`, a);
      });

      const res = await Add_professionalsAPI(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
                            {...register("username", {
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
                            {...register("email", {
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
                            id="areacheck"
                            {...register("city", {
                              required: true,
                            })}
                            onChange={(e) => AreaIdHandler(e)}
                          >
                            <option value="">Please Select your City</option>
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
                              required: true,
                            })}
                            aria-label="Default select example"
                          >
                            <option value="">
                              Please Select your City First for Area Options
                            </option>
                            {selectarea()}
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
                            {...register("description", {
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
                            {...register("displaypicture", {
                              required: true,
                              maxLength: 32,
                            })}
                            multiple
                            className={styles.form_control}
                            type="file"
                            id="formFile"
                            onChange={(e) => {
                              ondisplaypichange(e);
                            }}
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
                        <Form.Group
                          className={`${styles.form_group} mb-0 pb-3`}
                        >
                          <Form.Label className={styles.label_inner}>
                            Categories
                          </Form.Label>
                          <Form.Select
                            {...register("categories", {
                              required: true,
                            })}
                            onChange={(e) => selectcategorychange(e)}
                          >
                            <option value="">
                              Please Select your Category
                            </option>
                            {selectcategory()}
                          </Form.Select>
                        </Form.Group>
                        {/* <div>
                          <Chips value={selectedcategory} />
                        </div> */}
                        {selectedcategory.map((cat) => (
                          <div className={styles.categories_maindiv}>
                            <div
                              className={`${styles.categoty_tags} `}
                              id="demo"
                            >
                              {cat}
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
                        ))}
                        <Form.Group className={`${styles.form_group} mt-3`}>
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
                            {...register("additionalareas", {
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
                            {...register("officeaddress", {
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
                            {...register("secondaryaddress", {
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
                              {...register("activestatus", {
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
                            {...register("contact", {
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
  );
};

export default withAuth(Add);
