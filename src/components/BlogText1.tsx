import React from "react";
import { Link } from "react-router-dom";

function BlogText1() {
  return (
    <>
      <div className="blog_text_hero">
        <img src="../src/data/blog/support1.png" alt="" />
        <p>
          Sub-Saharan Africa (Africa), home to more than 1 billion people, half
          of whom will be under 25 years old by 2050, is a diverse continent
          offering human and natural resources that have the potential to yield
          inclusive growth and eradicate poverty in the region. The economic
          impact of the COVID-19 shock in Africa has been severe, however
          economic growth is set to emerge from the 2020 recession and expand by
          between 3% - 4% in 2022. Although this growth is positive, it still
          lags behind the recovery in advanced economies and emerging markets.
          Essentially, the quicker the African economy recovers, the quicker the
          living standards of our family and friends back home are improved. You
          might be thinking, what can I do? Well, there are 5 simple yet
          positive ways you can support the economy's recovery.
        </p>
        <h2 className="blog_text_h2">Shop Locally</h2>
        <p>
          Buying from a local African manufacturer or producer (Made in Africa)
          is a two-in-one win that positively impacts the economy. Now, we want
          to see you proud to spend and buy from your local farmer, fashion
          designer, furniture, and even your bikes & cars can be locally
          sourced.
        </p>
        <h2 className="blog_text_h2">Bank Locally</h2>
        <p>
          Many Africans recognise the importance of buying locally but fail to
          see the advantage of investing in their local banks. Local banking
          ensures the continuous transfer of the local currency and extends help
          to local businesses via business loans and overdraft credit
          facilities.
        </p>
        <h2 className="blog_text_h2">
          Send Money Back Home (if you live Abroad)
        </h2>
        <p>
          The World Bank praised the humanity and strength of character of over
          25.4 million African migrants who rebuffed the pandemic forecasts and
          consistently sent money back home. According to the{" "}
          <Link to="">most recent World Bank statistics</Link> , remittance
          flows in Sub-Saharan Africa increased by 6.2% in 2021 and could grow
          in 2022. We recognize these flows are important, so here at straitPay,
          we are determined to offer you the best rates and fees to enable you
          to support your family and friends in Africa.
        </p>
        <h2 className="blog_text_h2">Support Local Funding Initiatives</h2>
        <p>
          Many aspiring and worthy African entrepreneurs and SMEs still don’t
          have smooth access to capital or funding to start or scale their
          businesses. According to the World Bank, early-stage companies
          (including SMEs) in Sub-Saharan Africa suffer a $330 billion financing
          shortage. Pledges to local financing projects are one way you can
          support these local entrepreneurs. There are businesses right in your
          neighborhood that you can assist with, either by investing funds or
          offering your professional services.
        </p>
        <h2 className="blog_text_h2">Give Give Give!</h2>
        <p>
          Find a charity or a cause in Africa and support it by giving. You just
          don’t know the impact your giving (however small or big) makes on a
          person’s life. If you don’t have money, give your time or expertise to
          a cause that helps and adds value to Africa. Please drop us a line on
          any exciting charities or initiatives you would like straitPay to
          support or get involved in.
        </p>
        <img src="../src/data/blog/support1.png" alt="" />
        <h2 className="blog_text_h2"> Make A Difference For Africa</h2>
        <p>
          As economies recover from COVID-19's economic impacts, it's more
          critical than ever for us to work together on ways to inject funds,
          expertise, or time to support Africa.
        </p>
      </div>
    </>
  );
}

export default BlogText1;
