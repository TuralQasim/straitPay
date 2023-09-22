import "../../responsive.css";
import "../newsText1/newsText1.css";
import { Link } from "react-router-dom";

function NewsText1() {
  return (
    <div className="blog_text_hero">
      <img src="./data/blog/new_title.png" alt="" />
      <h2 className="blog_text_h2">
        STRAITPAY NAMED FINTECH STARTUP OF THE YEAR AT THE LONDON STARTUP AWARDS
        FINALS.
      </h2>
      <p>
        19 June 2023 - - UK-based startup straitPay, has been named as the
        Fintech StartUp of the Year at the London finals of the StartUp Awards
        2023 on the 8th of June.
      </p>
      <p>
        straitPay, a technology company that offers its products and services in
        partnership with licensed entities in their respective jurisdictions was
        created to encourage financial prosperity and drive in all areas of
        Africa’s economic growth. Spending, investing, and interacting with
        Africa should not involve numerous paperwork and brain-numbing
        bureaucracy. With a variety of services like remittance, multi-currency
        wallets, airtime, bills, and stock features in their bag, they are
        prepared to offer services to people in the diaspora and in numerous
        African countries.
      </p>
      <p>
        The StartUp Awards were established in 2022 to highlight the success of
        StartUps across the UK , and to celebrate the achievements of
        entrepreneurs in all sectors of the economy.
      </p>
      <p>
        The London final was held at Big Penny Social and saw 30 different
        awards given out to new businesses in categories such as Fintech StartUp
        of the Year, Innovative StartUp of the Year and Technology Services
        StartUp of the Year.
      </p>
      <p>Helen Bierton, Chief Banking Officer at Starling Bank says:</p>
      <p>
        “All our London StartUp finalists and winners deserve praise for their
        entrepreneurship. From a biotech company that's developing
        ground-breaking solutions to control the world’s most dangerous insect
        species, to carpentry services, a travelling pop-up store, and a mobile
        app that connects dog owners with reliable, vetted dog walkers, it’s
        inspiring to see that London is home to so many different types of
        businesses.”
      </p>
      <p>
        Professor Dylan Jones-Evans OBE, creator of the awards, said the events
        have celebrated the best new firms in the UK and recognised the amazing
        entrepreneurial talent across the nation. He said:{" "}
      </p>
      <p>
        “In the second year of the London Startup Awards, we have seen yet again
        the incredible contribution of new businesses to job creation,
        innovation, and prosperity across the whole of this entrepreneurial
        nation. It’s been an honour and a pleasure to read the stories of those
        individuals from across London who have spotted the opportunity and
        taken the risk to launch their own venture, especially at a time when
        the economy is still fragile after the Covid pandemic.”
      </p>
      <p>
        straitPay has ambitious plans and is focused on building a strong
        customer base globally. The firm also plans to become a competitive
        company in the fintech and payments sector. To download the straitPay
        app you can visit the Apple store for iOS or Playstore for Android to
        enjoy instant transactions with Africa. If you would like to learn more
        about straitPay please visit:
        <Link to="https://www.straitpay.com/our-story">
          https://www.straitpay.com/our-story
        </Link>
      </p>
    </div>
  );
}

export default NewsText1;
