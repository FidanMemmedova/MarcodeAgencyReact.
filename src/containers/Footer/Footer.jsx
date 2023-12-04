import React from "react";
import styles from "./Footer.module.css";
import logoDark from "../../assets/images/logo/logoDark.png";
import logoLight from "../../assets/images/logo/logoLight.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.changeMode}>
        <div className="container d-flex justify-content-center">
          <div
            classNameName={`${"bg-dark"} justify-content-between bg-dark"} ${
              styles.marCode
            }`}
          >
            <div className={`${"col-2 my-5"} ${styles.marcodeDescription}`}>
              <div className={styles.logo} style={{ width: 285, height: 60 }}>
                <img src={logoLight} alt="logo" className="logoLight" />
                <img src={logoDark} alt="logo" className="logoDark" />
              </div>
              <p
                className={`${"my-3"} ${styles.marcodeDescription}`}
                style={{ width: 285, height: 60 }}
              >
                For businesses who need clarity, productive communication,
                prioritisation and accountability.
              </p>
            </div>
            <div className={`${"col-3 mt-5"} ${styles.contenFooter}`}>
              <div className={styles.descriptionInformation}>
                <p>
                  <a href="#whoAreWe" className={styles.titles}>
                    Haqqımızda
                  </a>
                </p>
                <p>
                  <a href="#services" className={styles.titles}>
                    Xidmətlər
                  </a>
                </p>
                <p>
                  <a href="#ourTeam" className={styles.titles}>
                    Komandamız
                  </a>
                </p>
              </div>
              <div
                className={`${
                  styles.button
                } ${"justify-content-center d-flex"}`}
              >
                <button className={styles.btnContact}>
                  <a
                    href="#digitalWorld"
                    className={`${styles.openForm} ${"btnContact"}`}
                  >
                    Bizimlə əlaqə
                  </a>
                </button>
              </div>
              <p className={`${"text-center container"} ${styles.titles}`}>
                © 2021Marcode All rights reserved
              </p>
            </div>
            <div
              className={`${"col-2 my-5"} ${[
                styles.informationContact,
                styles.titles,
              ]}`}
            >
              <p>+ 994 50 444 44 44</p>
              <p>+ 994 50 444 44 44</p>
              <div className={`${"col-2 d-flex gap-4 mt-5"}`}>
                <img src="./assets/Logo/la_linkedin.svg" alt="linkedin" />
                <img
                  src="./assets/Logo/la_facebook-square.svg"
                  alt="facebook"
                />
                <img src="./assets/Logo/jam_instagram.svg" alt="instagram" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
