import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BlogItem from "../components/BlogItem";
import { Link } from "react-router-dom";
import NewsModal from "../components/NewsModal";
import NewsItem from "../components/NewsItem";
import NewsText1 from "../components/NewsText1";
import NewsText2 from "../components/NewsText2";

const BlogNews: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const texts = [<NewsText1 />, <NewsText2 />];
  const [conp, setComp] = useState<React.JSX.Element>();
  const checkModal = (e: React.MouseEvent<Element, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const text: string | undefined = target?.dataset.value || undefined;
    if (text) {
      let elem = texts[+text];
      setComp(elem);
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
        <div className="blog_title">
          <h2>Popular</h2>
          <Link to="">
            See all
            <FaArrowRight />
          </Link>
        </div>
        <div className="blog_hero">
          <NewsItem
            src="./data/blog/new_title.png"
            text="STRAITNEWS"
            title="STRAITPAY NAMED FINTECH STARTUP OF THE YEAR AT THE LONDON STARTUP AWARDS FINALS."
            value={"0"}
            checkModal={checkModal}
          />
          <NewsItem
            src="./data/blog/new_1.png"
            text="FINANCE"
            title="straitPay Just Got Even Better!"
            value={"1"}
            checkModal={checkModal}
          />
          <NewsItem
            src="./data/blog/new_title.png"
            text="FINANCE"
            title="STRAITPAY NAMED FINTECH STARTUP OF THE YEAR AT THE LONDON STARTUP AWARDS FINALS. "
            value={"0"}
            checkModal={checkModal}
          />
          <NewsItem
            src="./data/blog/new_1.png"
            text="FINANCE"
            title="straitPay Just Got Even Better!"
            value={"1"}
            checkModal={checkModal}
          />
        </div>
        <div className="blog_title">
          <h2>Recent</h2>
          <Link to="">
            See all
            <FaArrowRight />
          </Link>
        </div>
        <div className="blog_hero">
          <NewsItem
            src="./data/blog/new_title.png"
            text="STRAITNEWS"
            title="STRAITPAY NAMED FINTECH STARTUP OF THE YEAR AT THE LONDON STARTUP AWARDS FINALS. "
            value={"0"}
            checkModal={checkModal}
          />
          <NewsItem
            src="./data/blog/new_1.png"
            text="FINANCE"
            title="straitPay Just Got Even Better!"
            checkModal={checkModal}
            value={"1"}
          />
          <NewsItem
            src="./data/blog/new_title.png"
            text="FINANCE"
            title="STRAITPAY NAMED FINTECH STARTUP OF THE YEAR AT THE LONDON STARTUP AWARDS FINALS. "
            checkModal={checkModal}
            value={"0"}
          />
          <NewsItem
            src="./data/blog/new_1.png"
            text="FINANCE"
            title="straitPay Just Got Even Better!"
            checkModal={checkModal}
            value={"1"}
          />
        </div>
        <div className="subscribe">
          <div className="subscribe_text">
            <h2>Subscribe to the straitpay Weekly Newsletter News.</h2>
            <p>
              We simply believe in Mama Africa. So every time you choose
              straitPay, you are contributing to Africa in a meaningful way.{" "}
            </p>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="subscribe_img">
            <img src="./icons/subscribe.svg" alt="" />
          </div>
        </div>
      </div>
      {modal && <NewsModal conp={conp} setModal={setModal} />}
    </>
  );
};

export default BlogNews;
