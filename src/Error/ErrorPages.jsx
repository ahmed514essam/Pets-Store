import { useNavigate, useRouteError } from "react-router-dom";
import styles from './ErrorPages.module.css' ;
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
const navigate = useNavigate();
function backhome() {
  navigate("/");
}

  return (
    <div id="error-page" className={styles.errorbig}>
      <h1 className={styles.head}>Oops!</h1>
      <p className={styles.para}>
        This page does not exist , But there are pages that may interest you{" "}
      </p>
<button onClick={backhome} className={styles.btn}>Back To Home</button>
     
    </div>
  );
}
