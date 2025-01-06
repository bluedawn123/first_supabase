import React from "react";

const Footer = () => {
  return (

    <footer>
      <div className="quote_area">
        <h3 className="heading6">Need a quote?</h3>
        <p>
          Please use the form inside the contact page. Make sure you include
          some personal information as well as your project description and
          available budget.
        </p>
        <p>
          <a href="/">Get a free quote &rarr;</a>
        </p>
      </div>
      <div className="copyright">
        <h3 className="heading6">Just wanna say hi?</h3>
        <p>
          You can call me, email me directly or connect with me through my
          social networks.
        </p>
        <p>
          (+40) 744122222
          <br />
          <a href="mailto:hello@adipurdila.com">hello@adipurdila.com</a>
        </p>
        <ul className="social_links">
          <li>
            <a href="/">
              <img src="/images/twitter.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/facebook.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="/images/dribble.png" alt="dribble" />
            </a>
          </li>
        </ul>
        <hr />
        <p>
          (c) Copyright 2020. Portfolio theme by alikerock.
        </p>
      </div>
    </footer>

  );
};

export default Footer;
