import styles from "../../styles/ComponentStyles/admin/Professional.module.scss";
import { useRouter } from "next/router";
import { Table } from "react-bootstrap";
import withAuth from "../auth/withAuth";
import { useEffect, useState } from "react";
import { Get_Profesionals } from "../../pages/api/apiCalls";
import StarRatings from "react-star-ratings";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";

const Professionals = () => {
  const [professional, setProfessional] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [totalpages, setTotalpages] = useState(0);

  useEffect(() => {
    Get_Profesionals(currentpage).then((res) => {
      setTotalpages(res.data.pages);
      const data1 = res.data;
      setProfessional(data1.professionals);
    });
  }, [currentpage]);

  const handlePageClick = (e) => {
    let newpage = e.selected + 1;
    setCurrentpage(newpage);
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
            <th>Average Task Time</th>
            <th>Completed Task Count</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {professional.map((p) => {
            return (
              <tr key={p.id}>
                <td> {p.name}</td>
                <td scope="2">
                  {p.location?.lat} , {p.location?.lang}
                </td>
                <td> {p.city}</td>
                <td>
                  <StarRatings
                    rating={
                      typeof p.average_rating === "number"
                        ? p.average_rating
                        : 0
                    }
                    numberOfStars={5}
                    starRatedColor={"orange"}
                    starDimension={"20px"}
                  />
                </td>
                <td> {p.avg_task_time}</td>
                <td> {p?.completed_task_count}</td>
                <td> {p.active}</td>
                <td className="col-span=2">
                  <Button
                    onClick={() => {
                      router.push(`/admin/edit?id=${p.id}`);
                    }}
                    variant="outline-primary"
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className={styles.paginateDiv}>
        <ReactPaginate
          className={`${styles.paginateComponent} `}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalpages}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          pageClassName={`${styles.page_item} page-item`}
          pageLinkClassName={`${styles.page_link} page-link`}
          previousClassName={`${styles.page_item} page-item`}
          previousLinkClassName={`${styles.page_link} page-link`}
          nextClassName={`${styles.page_item} page-item`}
          nextLinkClassName={`${styles.page_link} page-link`}
          breakClassName={`${styles.page_item} page-item`}
          breakLinkClassName={`${styles.page_link} page-link`}
          containerClassName="pagination"
          activeClassName={`${styles.page_active} active`}
        />
      </div>
    </div>
  );
};

export default withAuth(Professionals);
