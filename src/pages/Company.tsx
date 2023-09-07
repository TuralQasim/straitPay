import React from "react";
import Transact from "../components/Transact";

const Company: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="history_title" id="history_title_id">
          <h2>Our Story</h2>
        </div>
        <div className="history_text">
          <p>
            <img src="./data/company/story.png" alt="" />
            The COVID-19 pandemic was a strange and unsettling time for us all,
            the pace at which it moved, the lives it touched, those we lost, and
            the lucky ones who came out the other end, were something we hadn’t
            ever experienced. Ironically, it allowed us to reach for the pause
            button, to take a moment, and ask ourselves why? For a lot of us,
            “why” was about varied personal matters that touched you and me. Why
            am I in this job, why don’t I explore the world more, why don’t I
            appreciate my family more, and a myriad of other topics. For those
            of us at straitPay and our founder Kele, it was also a time of
            reflection and deeper conversations, especially around sub-Saharan
            Africa, notably its economic and developmental challenges. Why
            couldn’t we take a more direct role in the lives of our loved ones
            back home, why couldn’t they access health care as readily as
            Western countries, why couldn’t we invest in our future at the click
            of a button, why was sending money (remittance) seemingly the only
            ever answer? straitPay quickly recognised the lack of a smooth
            financial connection between Africa and Europe, the lack of easily
            accessible companies, existence of complex protocols, and confusing
            rules. So, we set out to do something different, believing that
            there is a better way to interact with Africa beyond just
            remittances. We decided to create a platform that would make it
            simpler and more efficient to send your money, invest your money, or
            spend your money in Africa, on the things that matter to you as an
            African in a way that works for Africa. In Kele’s words “spending,
            investing, and interacting with Africa should be easier and more
            enjoyable, especially because we’re putting back into the
            motherland”. When you use straitPay, you are choosing a platform
            that meaningfully connects you to Africa, and shows the world how
            special Africa truly is! Our story doesn’t end here, it’s only the
            beginning, one we’d love to have you write with us, and maybe
            together we’ll all find our answer to the question “why” Welcome to
            the straitPay family, the journey has only just started …….. <br />
            (To be continued)...
          </p>
        </div>
        <div className="mission_title" id="mission_title_id">
          <h2>Our Mission</h2>
          <p>
            Spending, Investing, and Interacting with Africa should not have to
            require boundless paperwork and brain numbing bureaucracy.
          </p>
        </div>
        <div className="mission_img">
          <img src="./data/company/mission.png" alt="" />
        </div>
        <Transact />
      </div>
    </>
  );
};

export default Company;
