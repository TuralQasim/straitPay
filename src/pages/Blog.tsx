import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import BlogItem from "../components/BlogItem";
import { Link } from "react-router-dom";
import BlogModal from "../components/BlogModal";
import BlogText1 from "../components/BlogText1";
import BlogText2 from "../components/BlogText2";
import BlogText3 from "../components/BlogText3";
import BLogText4 from "../components/BLogText4";

const Blog: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const texts = [<BlogText1 />, <BlogText2 />, <BlogText3 />, <BLogText4 />];
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
          <BlogItem
            src="./data/blog/support_title.png"
            text="STRAITNEWS"
            title="5 Simple Ways To Support The Sub-Saharan African Economy"
            value={"0"}
            checkModal={checkModal}
          />
          <BlogItem
            src="./data/blog/what_title.png"
            text="FINANCE"
            title="What School Don’t Teach About Money"
            value={"1"}
            checkModal={checkModal}
          />
          <BlogItem
            src="./data/blog/buy_title.png"
            text="FINANCE"
            title="5 Things Money Can’t Buy"
            value={"2"}
            checkModal={checkModal}
          />
          <BlogItem
            src="./data/blog/international_title.png"
            text="FINANCE"
            title="5 Things to Know About International Money Transfer"
            value={"3"}
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
          <BlogItem
            src="./data/blog/support_title.png"
            text="STRAITNEWS"
            title="5 Simple Ways To Support The Sub-Saharan African Economy"
            value={"0"}
            checkModal={checkModal}
          />
          <BlogItem
            src="./data/blog/what_title.png"
            text="FINANCE"
            title="What School Don’t Teach About Money"
            checkModal={checkModal}
            value={"1"}
          />
          <BlogItem
            src="./data/blog/buy_title.png"
            text="FINANCE"
            title="5 Things Money Can’t Buy"
            checkModal={checkModal}
            value={"2"}
          />
          <BlogItem
            src="./data/blog/international_title.png"
            text="FINANCE"
            title="5 Things to Know About International Money Transfer"
            checkModal={checkModal}
            value={"3"}
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
      {modal && <BlogModal conp={conp} setModal={setModal} />}
    </>
  );
};

export default Blog;
