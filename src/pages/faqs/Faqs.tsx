import "../../responsive.css";
import "../faqs/faqs.css";
import React from "react";
import FaqsItem from "../../components/faqsItem/FaqsItem";
import FaqsModal from "../../components/faqsModal/FaqsModal";
import { useState } from "react";
import { Link } from "react-router-dom";

type modalInfoType = {
  title: string;
  text: string;
};
const Faqs: React.FC = () => {
  const [modalInfo, setModalInfo] = useState<modalInfoType>({
    title: "",
    text: "",
  });
  const [modal, setModal] = useState<boolean>(false);
  const checkModal = (e: React.MouseEvent) => {
    const button = e.target as HTMLButtonElement;
    const title = button.querySelector("p")?.textContent;
    const text = button.querySelector("h5")?.textContent;
    if (title && text) {
      setModalInfo({ title: title, text: text });
    }
    setModal(true);
  };
  function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  if (modal) {
    disableScroll();
  } else {
    enableScroll();
  }
  return (
    <>
      <div className="container">
        <div className="faqs_title">
          <h2>You.ve Got Questions? We’ve Got Answers</h2>
          <p>Here are responses and suggestions from the straitPay Team.</p>
        </div>
        <div className="faqs_hero">
          <div className="faqs_sect">
            <h2>General</h2>
            <div className="faqs_items">
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                title="Who is straitPay?"
                text="Straitpay was created to invite financial prosperity and drive in all areas of Africa’s economic growth. Spending, investing, and interacting with Africa should not involve numerous paperwork and brain-numbing bureaucracy."
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Unlike other fintech apps in the market, we simply believe in Africa. We have curated amazing products to ensure you can live anywhere and transact as a local. You are able to care for your loved ones in Africa, spend and invest in the best Africa has to offer. Don't take our word for it; get the app and sign up!"
                title="Why use straitpay?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="We will love to connect with you as well. You can find us on Linkedin, Instagram, twitter and Facebook as @straitpay"
                title="How can I connect with straitPay to report and issue/complaint?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="It's really quick, once you have downloaded our app from the app store. The sign-up process should take less than 2 minutes."
                title="How quickly is it to setup account?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="You don't need any identification register. However, to comply with anti-money checks and keep your transactions safe, we need to verify your identity."
                title="Do I need any form identification to register?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="You can send money from USA to Nigeria, Ghana, Rwanda and South Africa. You can also send money between African countries. We hope to extend our services to other African countries, especially for you."
                title="Which country can I send money to?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Not yet! We do not issue physical cards.Once we start, you'll be the first to know!"
                title="Do I get a physical card with my account?"
              />
            </div>
          </div>
          <div className="faqs_sect">
            <h2>Managing My Account</h2>
            <div className="faqs_items">
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="If you would like to change your information, please reach out to us via support@straitpay.com."
                title="Can I change my account information anytime?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Yes, we take the security of data very seriously and follow strict regulations to make sure it is safe."
                title="Is my information save with straitPay?"
              />
            </div>
          </div>
          <div className="faqs_sect">
            <h2>straitPay Wallet</h2>
            <div className="faqs_items">
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                title="What is straitPay wallet?"
                text="Your straitPay wallet is a secure electronic money wallet representation, which allows you to hold and perform transactions in multi-currency jurisdictions. You can also swap between the currencies. How great is that? We aim to ensure you can live international and spend like a local!"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Depends on where in Africa you want to take your next adventure in! You can have as many wallets as you desire!"
                title="How many wallets can I have?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Once your wallet has been created, you only fund it using either your debit/credit card or your bank account"
                title="How do I fund my wallet?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Card payments to your wallet would reflects Immediately but for bank it relflects as soon as we can confirm the payment has been received from your bank."
                title="How long does it take for the fund to reflect?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="A number of factors usually tend to affect funds reflecting in your wallet. These could be bank processing checks, compliance and anti-money laundering checks, or our payment partner system delays. If your funds don't reflect after 48 hours, please reach out to us at support@straitpay.com and we will do our best to resolve all your complaint."
                title="Why has my fund not reflected in my wallet?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Yes! you can transfer money to your friends and family that have a straitpay wallet, all you need is their wallet id. Yes its that simple!"
                title="Can I initiate wallet to wallet transfer?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="If you fund your local wallet using an international issued card (e.g. GBP or USD), then we charge a small fee to complete this for you."
                title="Will I be charged a fee to top-up my wallet?"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="This depends on the mode of delivery. If your payment was made with Debit Card, we just need to wait for your card confirmation and we will convert your funds and send the payment to your recipient immediately. We estimate to credit your wallet within 48hrs and a confirmation will be sent to your email when completed."
                title="How long does it take for a friend and family to receive funds?"
              />
            </div>
          </div>
          <div className="faqs_sect">
            <h2>Other Services</h2>
            <div className="faqs_items">
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="Build wealth & legacy through our partnerships, you access a safe route to the expansive African capital & goods market."
                title="straitPay wealth"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="straitPay Airtime and Bills allows you to by airtime and pay for cable, utility and internet subcriptions for your friends and families from the comfort of your home."
                title="straitPay Airtime and BIlls"
              />
              <FaqsItem
                setModal={setModal}
                checkModal={checkModal}
                text="straitPay Protect makes it possible for you to protect your loved ones by purchasing different health insurance packages for them irrespective of the country they are in. We have been able to achieve this with our partnership with Fleri. Download our app and give your loved ones the opportunity of a healthier lifestyle."
                title="straitPay protect"
              />
            </div>
          </div>
        </div>
        <div className="faqs_footer">
          <h2>Got More Questions?</h2>
          <Link to="mailto:support@straitpay.com">Let’s Have It</Link>
        </div>
      </div>
      {modal && <FaqsModal modalInfo={modalInfo} setModal={setModal} />}
    </>
  );
};

export default Faqs;
