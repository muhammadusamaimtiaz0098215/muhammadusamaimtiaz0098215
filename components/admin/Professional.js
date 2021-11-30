import styles from "../../styles/ComponentStyles/admin/Professional.module.scss";
import Image from "next/image";
import images from "../../public/assets/images/index";
import image from "next/image";
import { useRouter } from "next/router";
import { Table } from "react-bootstrap";
import withAuth from "../auth/withAuth";
import { useEffect, useState } from "react";
import { Get_Profesionals } from "../../pages/api/apiCalls";
import StarRatings from "react-star-ratings";

const Professionals = () => {
  const [professional, setProfessional] = useState([]);

  useEffect(() => {
    Get_Profesionals().then((res) => {
      console.log("HERE:", res.data);
      const data = res.data;
      setProfessional(res.data);
    });
  }, []);

  const rating_check = () => {
    console.log("Rating check", professional);
    // professional.map((p) => {
    //   console.log(".......", p?.average_rating);
    // });
    console.log("Rating", professional?.average_rating);
  };

  const router = useRouter();

  return (
    <div className={styles.professional_table}>
      <div className={styles.head_wrapper}>
        <h3 className="red-head">Professionals</h3>
        <span>
          <a className="add-anchor" onClick={() => router.push("./add")}>
            +
          </a>
        </span>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>City</th>
            <th>Rating</th>
            <th>Avg Task Time</th>
            <th>Completed Task Count</th>
            <th>Status</th>{" "}
          </tr>
        </thead>
        <tbody>
          {professional.map((p) => {
            return (
              <tr>
                <td> {p.name}</td>
                <td scope="2">
                  {p.location?.lat} , {p.location?.lang}
                </td>
                <td> {p.city}</td>

                <StarRatings
                  rating={
                    typeof p.average_rating === "number" ? p.average_rating : 0
                  }
                  numberOfStars={5}
                  starRatedColor={"orange"}
                  starDimension={"20px"}
                />
                <td></td>
                <td> {p.avg_task_time}</td>
                <td> {p?.completed_task_count}</td>
                <td> {p.active}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default withAuth(Professionals);
