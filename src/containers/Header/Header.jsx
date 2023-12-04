import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import commonStyles from "../../assets/styles/commonStyles.module.css";
import logoLight from "../../assets/images/logo/logoLight.png";
import logoDark from "../../assets/images/logo/logoDark.png";

const Header = () => {
 const [burgerClass, setBurgerClass]=useState("burger-bar unclicked")
 const [menuClass, setMenuClass]=useState("menu hidden")
 const [isMenuClicked, setIsMenuClicked]=useState(false)
  return (
    <>
      <header>
        <div className={commonStyles.cont}>
          <div className={styles.contRow}>
            <div className={styles.logo}>
              <a href="index.html">
                <img src={logoLight} alt="logo" className={styles.logoLight} />
                <img src={logoDark} alt="logo" className={styles.logoDark} />
              </a>
            </div>
         
            <nav >
              <ul className={`${styles.menu}`}>
                <li>
                  <a href="#whoAreWe">Haqqımızda</a>
                </li>
                <li>
                  <a href="#services">Xidmətlər</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#ourTeam">Komandamız</a>
                </li>
                <li>
                  <a href="#digitalWorld" className={styles.openForm}>
                    Əlaqə
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.lang}>
              <a href="#"> AZ </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 9L12 15L6 9"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <ul className={styles.dropdownMenu}>
                <li>
                  <a href="#">EN</a>
                </li>
                <li>
                  <a href="#">RU</a>
                </li>
              </ul>
            </div>
            <div className={styles.theme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.dark}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0811 2.50904C12.2746 2.85242 12.2484 3.27745 12.0141 3.59442C11.1598 4.75008 10.7488 6.17395 10.8557 7.60706C10.9625 9.04018 11.5802 10.3873 12.5964 11.4035C13.6126 12.4197 14.9597 13.0374 16.3929 13.1443C17.826 13.2511 19.2498 12.8401 20.4055 11.9859C20.7225 11.7516 21.1475 11.7253 21.4909 11.9188C21.8343 12.1124 22.0319 12.4895 21.9957 12.882C21.8209 14.7734 21.1111 16.5758 19.9493 18.0785C18.7875 19.5811 17.2218 20.7218 15.4353 21.3671C13.6489 22.0124 11.7156 22.1355 9.86177 21.7221C8.0079 21.3088 6.3101 20.376 4.96702 19.0329C3.62394 17.6898 2.69115 15.992 2.27778 14.1381C1.86441 12.2843 1.98757 10.351 2.63284 8.56459C3.27811 6.77816 4.4188 5.21244 5.92145 4.05065C7.4241 2.88886 9.22654 2.17904 11.1179 2.00426C11.5104 1.96799 11.8876 2.16566 12.0811 2.50904ZM9.31629 4.43908C8.53868 4.72043 7.8055 5.12204 7.14478 5.63289C5.94266 6.56232 5.0301 7.81489 4.51389 9.24404C3.99767 10.6732 3.89914 12.2198 4.22984 13.7029C4.56054 15.186 5.30677 16.5442 6.38123 17.6187C7.45569 18.6931 8.81394 19.4394 10.297 19.7701C11.7801 20.1008 13.3267 20.0022 14.7559 19.486C16.185 18.9698 17.4376 18.0573 18.367 16.8551C18.8779 16.1944 19.2795 15.4612 19.5608 14.6836C18.5077 15.0646 17.3781 15.2233 16.2441 15.1387C14.3333 14.9962 12.5371 14.1726 11.1822 12.8177C9.82729 11.4628 9.0037 9.66661 8.8612 7.7558C8.77664 6.62183 8.93528 5.4922 9.31629 4.43908Z"
                  fill="#F7C720"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={styles.light}
              >
                <g clip-path="url(#clip0_456_7387)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21C11 20.4477 11.4477 20 12 20Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.51286 3.51262C3.90339 3.1221 4.53655 3.1221 4.92708 3.51262L6.34708 4.93262C6.7376 5.32314 6.7376 5.95631 6.34708 6.34683C5.95655 6.73736 5.32339 6.73736 4.93286 6.34683L3.51286 4.92683C3.12234 4.53631 3.12234 3.90314 3.51286 3.51262Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.653 17.6532C18.0435 17.2627 18.6767 17.2627 19.0672 17.6532L20.4872 19.0732C20.8777 19.4638 20.8777 20.0969 20.4872 20.4875C20.0967 20.878 19.4635 20.878 19.073 20.4875L17.653 19.0675C17.2625 18.6769 17.2625 18.0438 17.653 17.6532Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21C20.4477 13 20 12.5523 20 12Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.34708 17.6532C6.7376 18.0438 6.7376 18.6769 6.34708 19.0675L4.92708 20.4875C4.53655 20.878 3.90339 20.878 3.51286 20.4875C3.12234 20.0969 3.12234 19.4638 3.51286 19.0732L4.93286 17.6532C5.32339 17.2627 5.95655 17.2627 6.34708 17.6532Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.4872 3.51262C20.8777 3.90314 20.8777 4.53631 20.4872 4.92683L19.0672 6.34683C18.6767 6.73736 18.0435 6.73736 17.653 6.34683C17.2625 5.95631 17.2625 5.32314 17.653 4.93262L19.073 3.51262C19.4635 3.1221 20.0967 3.1221 20.4872 3.51262Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_456_7387">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.hamburger}>
          <div className={`${styles.line1} 'burgerClass'`}></div>
          <div className={`${styles.line2} 'burgerClass'`}></div>
          <div className={`${styles.line3} 'burgerClass'`}></div>
        </div>
      </header>
    </>
  );
};

export default Header;
