import React from "react";
import styles from "../Home/app.module.css";
import {
  DESCRIPTION1,
  DESCRIPTION2,
  DESCRIPTION3,
  PHONE_NUMBER,
  CONNECT,
} from "../../constants/index.js";
import logo from "../../images/logo1.PNG";
import phone2 from "../../images/phone2.png";
import phone3 from "../../images/phone3.png";
import silver from "../../images/silver.png";
import blue from "../../images/blue.png";
import gold from "../../images/gold.png";
import pink from "../../images/pink.png";
import contact from "../../images/contact.JPG";

function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <button className={styles.menuBtn} type="button">
              <span className={styles.btnLine}></span>
              <span className={styles.btnLine}></span>
              <span className={styles.btnLine}></span>
              <span className={styles.btnLine}></span>
            </button>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="#">
                  Что нового
                </a>
              </li>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="#">
                  Цвет
                </a>
              </li>
              <li className={styles.menuItem}>
                <a className={styles.menuLink} href="#">
                  Заказать
                </a>
              </li>
            </ul>
            <a className={styles.logo}>
              <img className={styles.logoImg} src={logo} alt="логотип сайта" />
            </a>
            <a className={styles.phone} href="tel:5555555">
              <div>{PHONE_NUMBER}</div>
            </a>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.headline}>
          <div className={styles.container}>
            <h1 className={styles.title}>PHONE 25 PRO</h1>
            <img
              className={styles.headlineImg}
              src={phone2}
              alt="PHONE 25 PRO"
            />
            <button className={styles.headlineBtn} href="#">
              ВЫБРАТЬ
            </button>
          </div>
        </section>
        <section className={styles.news}>
          <div className={styles.container}>
            <h2 className={styles.newsTitle}>ЧТО НОВОГО</h2>
            <div className={styles.newsInfo}>
              <div className={styles.newsText}>
                <b>
                  <div>{DESCRIPTION1}</div>
                </b>
                <p>
                  <div>{DESCRIPTION2}</div>
                </p>
                <p>
                  <div>{DESCRIPTION3}</div>
                </p>
              </div>
              <img className={styles.imagesNews} src={phone3} alt="phone" />
            </div>
          </div>
        </section>
        <section className={styles.color}>
          <div className={styles.container}>
            <h2 className={styles.colorTitle}>ВЫБЕРИТЕ СВОЙ ЦВЕТ</h2>
            <ul className={styles.colorList}>
              <li className={styles.colorItem}>
                <img src={silver} alt="Silver" />
                <h3>Silver</h3>
                <p>Серебристый</p>
              </li>
              <li className={styles.colorItem}>
                <img src={blue} alt="Blue" />
                <h3>Blue</h3>
                <p>Синий</p>
              </li>
              <li className={styles.colorItem}>
                <img src={gold} alt="Gold" />
                <h3>Gold</h3>
                <p>Золотистый</p>
              </li>
              <li className={styles.colorItem}>
                <img src={pink} alt="Pink" />
                <h3>Pink</h3>
                <p>Розовый</p>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.contactInner}>
              <form className={styles.contactForm} action="#">
                <h2 className={styles.contactTitle}>ХОЧЕШЬ PHONE 25 PRO?</h2>
                <input
                  className={styles.contactInput}
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className={styles.contactInput}
                  type="tel"
                  placeholder="Номер телефона"
                />
                <p>{CONNECT}</p>
                <button type="submit">ЗАКАЗАТЬ</button>
              </form>
              <img className={styles.contactImg} src={contact} alt="phone" />
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <a className={styles.footerLink} href="#">
              Политика конфиденциальности
            </a>
            <a className={styles.logo}>
              <img className={styles.logoImg} src={logo} alt="логотип сайта" />
            </a>
            <a className={styles.phone} href="tel:5555555">
              <div>{PHONE_NUMBER}</div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
