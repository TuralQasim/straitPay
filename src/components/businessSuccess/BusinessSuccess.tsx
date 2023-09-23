import "../businessSuccess/businessSuccess.css";
import { Link } from "react-router-dom";

function BusinessSuccess() {
  return (
    <>
      <div className="standart_form succes_form">
        <div className="succes">
          <img src="./icons/succes.svg" alt="" />
          <p>Account Successfully Created</p>
        </div>
        <div className="succes_download">
          <h4 className="succes_download_title">
            App available for download on:
          </h4>
          <div className="succes_download_links">
            <Link to="">
              <img src="./icons/google_play.svg" alt="" />
              <div className="succes_download_link_text">
                <p>Get it on</p>
                <h3>Google Play</h3>
              </div>
            </Link>
            <Link to="">
              <img src="./icons/app_store.svg" alt="" />
              <div className="succes_download_link_text">
                <p>Download on the</p>
                <h3>App Store</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessSuccess;
