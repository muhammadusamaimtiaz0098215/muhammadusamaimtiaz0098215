import styles from "../../styles/ComponentStyles/admin/Professionals.module.css";
import Image from "next/image";
import images from "../../public/assets/images/index";
import image from "next/image";
import { useRouter } from "next/router";

const Professionals = () => {
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="pl-30" scope="col">
              Professional
            </th>
            <th scope="col">Location</th>
            <th scope="col">City</th>
            <th scope="col">Rating</th>
            <th scope="col">Category</th>
            <th scope="col">Location</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="pl-30" scope="row">
              <Image className="mic-icon" src={images.mic} alt="mic" />
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
          <tr>
            <th className="pl-30" scope="row">
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
          <tr>
            <th className="pl-30" scope="row">
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
          <tr>
            <th className="pl-30" scope="row">
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
          <tr>
            <th className="pl-30" scope="row">
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
          <tr>
            <th className="pl-30" scope="row">
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
          <tr>
            <th className="pl-30" scope="row">
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
          <tr>
            <th className="pl-30" scope="row">
              <span className="img-span">
                <Image src={images.professional} alt="pro" />
              </span>
              Uzair Services
            </th>
            <td>New Garden Town</td>
            <td>Lahore</td>
            <td>
              <Image src={images.rating} alt="rating" />
            </td>
            <td>Plumbing</td>
            <td>Bahria Town, Islamabad</td>
            <td>+92 300 xxxxxxx</td>
            <td>
              <Image className="phone-icon" src={images.phone} alt="phone" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Professionals;
