import React from "react";
import { Link } from "react-router-dom";

function NewsText2() {
  return (
    <div className="blog_text_hero">
      <img src="./data/blog/new_title.png" alt="" />
      <h2>straitPay Just Got Even Better!</h2>
      <p>
        In our end-of-the-year newsletter, we announced that we were working on
        the release of straitPay 2.0 before the end of Q1 2023.
      </p>
      <p>
        We believe it is important to continue to innovate to ensure we can
        bring Africa closer to the world and ensure transactions across Africa
        are smooth for you.{" "}
      </p>
      <p>We are pleased to introduce the new and improved straitPay app 2.0.</p>
      <p>straitPay 2.0 Provides:</p>
      <ul>
        <li>
          <strong>Faster Verification Process</strong> : We have further
          improved the automation of our user verifications so you would not
          have to wait for your account to be verified before initiating your
          first transfer!
        </li>
        <li>
          <strong>Upgraded Wallet Feature</strong> : The wallet feature is back
          and better. Enjoy the benefits of holding your funds in multiple local
          currencies for easy transactions. You can create GHS, NGN, USD and RWF
          wallets and make transactions like a local. You can also swap between
          wallets at great rates! Come and experience a bigger and better Wallet
          Feature.
        </li>
        <li>
          <strong>Airtime and Bills</strong> : Want to recharge your family or
          friends' airtime? Pay for their DSTV, Cable Networks? Easy! straitPay
          has got you covered. You can now pay for airtime and bills for not
          just you but your friends and families no matter where you are and in
          whatever currency you have.
        </li>
        <li>
          <strong>Wealth</strong>: Are you thinking of investing in African
          stocks? ±Running a beta version, you will be able to invest in stock
          options offered by our partners to boost your income/wealth across
          Africa. We aim to provide you with access to stock options throughout
          Africa, where we operate, and allow you to benefit from expanding your
          investment portfolio in Africa.{" "}
        </li>
        <li>
          <strong>Open Banking</strong>: We have introduced this feature to make
          payments in Africa smoother.. Open Banking is a system that allows
          banks and non-banking institutions to share financial information. In
          other words, it enables non-banks to provide banking services. This
          feature allows you to make quick, convenient, and direct payments
          while utilising the straitPay platform. For example, you can use your
          bank account/app to make payments straight on the straitPay platform.
          You would not need to enter card details or look for your bank account
          number to perform or complete a transaction. We are proud to be
          offering this in Africa within African banks. Check it out when making
          a payment in Nigeria.
        </li>
        <li>
          <strong>Payment Links</strong>: With straitPay, you can now generate
          payment links to request payment from friends or family via your
          wallet without the hassle of sending bank account details or your
          walled ID. You simply share this link using any social media link such
          as WhatsApp, signal, or email, or they could simply scan your QR code.
        </li>
      </ul>
      <img src="./data/blog/new_1.png" alt="" />
      <p>
        So, what are you waiting for? <Link to="">Upgrade</Link> to the latest
        version of the straitPay app today and start experiencing all of these
        exciting features. Your day just got a whole lot better!
      </p>
      <p>
        We simply believe in Africa and every time you use straitPay, you are
        choosing a platform that connects you to Africa.
      </p>
      <p>
        Remember to send us a mail at{" "}
        <Link to="mailto:support@straitpay.com">support@straitpay.com</Link>, if
        you’re having any issues. We’re always here to help.
      </p>
    </div>
  );
}

export default NewsText2;
