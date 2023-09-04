import React from "react";
import { Link } from "react-router-dom";
import FeaturesItem from "../components/FeaturesItem";
import ExpectItem from "../components/ExpectItem";
import PeopleItem from "../components/PeopleItem";
import Transact from "../components/Transact";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="home_hero">
          <h1>
            The Smoothest Way
            <br /> To Spend & Invest In Africa
          </h1>
          <p>
            We invest your money in top-notch assets to help you accumulate
            wealth and meet your financial objectives.
          </p>
          <div className="home_hero_btns">
            <Link to="" className="google_play">
              <img src="../src/icons/google_play.svg" alt="" />
              Get on Play Store
            </Link>
            <Link to="">
              <img src="../src/icons/app_store.svg" alt="" />
              Get on App Store
            </Link>
          </div>
        </div>
        <div className="map_img">
          <img src="../src/icons/map.svg" alt="" />
        </div>
        <div className="features">
          <div className="features_item_empty">
            <h2>Our features</h2>
            <p>
              We curate solutions with you in mind. Ensuring you live global and
              spend like a local.
            </p>
          </div>
          <FeaturesItem
            title="Swap Currency"
            phar="Enjoy multi-currency Wallet that you can swap."
            src="../src/data/home/iphone1.png"
          />
          <FeaturesItem
            title="Instant Payment"
            phar="Send to anyone in Africa smoothly and cheaper than most banks."
            src="../src/data/home/iphone2.png"
          />
          <FeaturesItem
            title="Protect"
            phar="Ensure your loved ones get medical care anywhere in Africa - eliminate the stress of expensive hospital bills."
            src="../src/data/home/iphone3.png"
          />
          <FeaturesItem
            title="Wealth"
            phar="Build wealth & legacy - through our partnerships, you access a safe route to the expansive African capital & goods market."
            src="../src/data/home/iphone4.png"
          />
          <FeaturesItem
            title="Airtime & Bills"
            phar="From the comfort of anywhere in the world, purchase the essentials for yourself and your loved ones in Africa."
            src="../src/data/home/iphone5.png"
          />
        </div>
        <div className="expect">
          <div className="expect_title">
            <h2>What You Can Expect</h2>
            <p>
              We are simply passionate about offering solutions that provide
              convenience and access to Africa!
            </p>
          </div>
          <div className="expect_hero">
            <ExpectItem
              src="../src/icons/expect1.svg"
              text="Open a free account and start transacting within minutes."
            />
            <ExpectItem
              src="../src/icons/expect2.svg"
              text="Send your money the way that suits you – using bank cards & accounts, or simply using a mobile number."
            />
            <ExpectItem
              src="../src/icons/expect3.svg"
              text="No hidden costs & pay out in Africa to wallets, banks, or mobile."
            />
            <ExpectItem
              src="../src/icons/expect4.svg"
              text="We love Africa & working hard to simply cover all of Africa."
            />
            <ExpectItem
              src="../src/icons/expect5.svg"
              text="Multi factor authentication to prevent unauthorised access."
            />
            <ExpectItem
              src="../src/icons/expect6.svg"
              text="With you in mind our services are designed to grow your wealth & benefit growth of Africa."
            />
          </div>
        </div>
        <div className="people">
          <div className="people_title">
            <h2>What People Who Use straitPay Say</h2>
            <p>
              Interacting with Africa should not have to require boundless
              paperwork and brain numbing bureaucracy
            </p>
          </div>
          <div className="people_hero">
            <PeopleItem
              name="Phil"
              src="../src/icons/people1.svg"
              phar="I have done many business trips travelling from country to country carrying 4 - 5 separate currencies in cash. straitPay clearly solves my problem with its local currency digital wallet."
            />
            <PeopleItem
              name="Phil"
              src="../src/icons/people2.svg"
              phar="I have done many business trips travelling from country to country carrying 4 - 5 separate currencies in cash. straitPay clearly solves my problem with its local currency digital wallet."
            />
            <PeopleItem
              name="Phil"
              src="../src/icons/people3.svg"
              phar="I have done many business trips travelling from country to country carrying 4 - 5 separate currencies in cash. straitPay clearly solves my problem with its local currency digital wallet."
            />
            <PeopleItem
              name="Phil"
              src="../src/icons/people4.svg"
              phar="I have done many business trips travelling from country to country carrying 4 - 5 separate currencies in cash. straitPay clearly solves my problem with its local currency digital wallet."
            />
          </div>
        </div>
        <div className="awards">
          <div className="awards_title">
            <h2>Awards</h2>
            <p>StartUp Award 2023</p>
          </div>
          <div className="awards_hero">
            <div className="awards_left">
              <img src="../src/data/home/awards1.png" alt="" />
              <p>StartUp Award 2023</p>
            </div>
            <div className="awards_right">
              <img src="../src/data/home/awards2.png" alt="" />
              <p>StartUp Award 2023</p>
            </div>
          </div>
        </div>
        <Transact />
      </div>
    </>
  );
};

export default Home;
