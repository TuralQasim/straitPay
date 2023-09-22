import "../../responsive.css";
import "../faqsBusiness/faqsBusiness.css";
import React from "react";
import FaqsBusinessItem from "../../components/faqsBusinessItem/FaqsBusinessItem";
import FaqsModal from "../../components/faqsModal/FaqsModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const FaqsBusiness: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  const checkOpen = (i: number) => {
    if (open == i) {
      return setOpen(null);
    }
    setOpen(i);
  };
  const faqsBisiness = {
    FaqsBusiness1: [
      {
        title: "Who is straitPay?",
        content:
          "Straitpay was created to invite financial prosperity and drive in all areas of Africa’s economic growth. Spending, investing, and interacting with Africa should not involve numerous paperwork and brain-numbing bureaucracy.",
      },
      {
        title: "Why use straitPay?",
        content:
          "Choose straitPay because we're not just another fintech app – we're your trusted partner in financial growth. If you're an SME looking to thrive, straitPay is your ideal choice. We're passionate about the potential of SMEs and have designed our products to empower you. With straitPay, you can effortlessly manage international transactions, support your operations, and seize growth opportunities. We believe in your success, and we're here to help you achieve it. Join us today and experience the difference for yourself!",
      },
      {
        title: "How can I connect with straitPay to report an issue/complaint?",
        content:
          "We're eager to connect with you too! Reach out to us on LinkedIn, Instagram, Twitter, and Facebook via @straitpay. We're here to assist you, so don't hesitate to get in touch.",
      },
      {
        title: "How quickly  can I open a straitPay business account",
        content:
          "You can open your straitPay Business account in a breeze, typically in about 10 minutes. Simply fill out a short form, and we'll guide you through the onboarding process. Your journey with straitPay begins swiftly! We’ll need to review your business account application and start the on-boarding process.",
      },
      {
        title: "Do I need any form of identification to register?",
        content:
          "Yes, we'll need your business registration certificate, tax identification number, and proof of your bank account. These help us ensure your security and compliance.",
      },
      {
        title: "Which countries can I send money to?",
        content:
          "Currently, you can send money from the USA to Nigeria, Ghana, Rwanda, and South Africa. You can also send money between African countries. We're constantly expanding, so stay tuned for more exciting destinations!",
      },
      {
        title: "How much will it cost to open a business account?",
        content:
          "It's absolutely free! We won't burden you with monthly fees. You only pay for the transactions you initiate. Your success is our success, and we're here to support your growth.",
      },
    ],
    FaqsBusiness2: [
      {
        title: "Can I edit my business details?",
        content:
          "Of course, you can! If you need to update your business details, please reach out to our support team. They'll guide you through the process and ensure everything is in order.",
      },
      {
        title: "Can I have more than one straitPay business account?",
        content:
          "You can have one business account per business name. If you run multiple businesses, you can set up multiple business accounts on straitPay. We're here to accommodate your business.",
      },
      {
        title:
          "Can I move money between my personal and business straitPay accounts?",
        content:
          "Yes, you can effortlessly transfer funds between your personal straitPay wallets and your straitPay Business wallets. Flexibility is key with straitPay!",
      },
      {
        title: "Can I create a payment link and send it to my customer?",
        content:
          "Absolutely! You can create payment links so your customers can make payments  directly into your straitPay Business wallet.",
      },
      {
        title: "Is my information safe with Straitpay?",
        content:
          "Your security is our priority. We adhere to strict regulations to ensure the safety of your data. Your trust in us is valued and protected.",
      },
      {
        title: "How can I make payments on the platform?",
        content:
          "We offer multiple ways to perform transactions on straitPay Business. You can choose between bank accounts or cards, whichever method suits you best. Your convenience is our concern!",
      },
      {
        title: "Can my business collaborate with straitpay?",
        content:
          "Absolutely! We're open to collaboration. Just drop us an email at support@straitpay.com and let's explore exciting opportunities together. We look forward to working with you!",
      },
    ],
  };
  return (
    <>
      <div className="faqs_question_bg">
        <div className="container">
          <div className="faqs_question">
            <h2>You.ve Got Questions? We’ve Got Answers</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="faqs_hero">
          <div className="faqs_sect faqs_sect_business">
            <h2>General</h2>
            <div className="faqs_items faqs_business_items">
              {faqsBisiness.FaqsBusiness1.map((item, i) => {
                return (
                  <FaqsBusinessItem
                    key={i}
                    title={item.title}
                    checkOpen={checkOpen}
                    open={open}
                    index={i}
                    content={item.content}
                  />
                );
              })}
            </div>
          </div>
          <div className="faqs_sect faqs_sect_business">
            <h2>Managing My Account</h2>
            <div className="faqs_items faqs_business_items">
              {faqsBisiness.FaqsBusiness2.map((item, i) => {
                return (
                  <FaqsBusinessItem
                    key={i}
                    title={item.title}
                    checkOpen={checkOpen}
                    open={open}
                    index={i + faqsBisiness.FaqsBusiness1.length}
                    content={item.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="faqs_footer faqs_business_footer">
          <h2>Got More Questions?</h2>
          <Link to="mailto:support@straitpay.com">Let’s Have It</Link>
        </div>
      </div>
    </>
  );
};

export default FaqsBusiness;
