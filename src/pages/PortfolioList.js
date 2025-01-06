import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PortfolioList = ({ data }) => {
  return (
    <div>
      <Header />
      <main class="content">
        <div class="container latest_portfolio">            
          <div class="row list">
              {data.map((item, index) => (
                <div key={index} className="col-md-4">
                    <div class="contents shadow">
                        <img src={item.images.thumbnail} alt={item.title}/>
                        <div class="hover_contents">
                            <div class="list_info">
                                <h3><a href={`/portfolio/${index}`}>{item.title}</a> 
                                <img src="images/portfolio_list_arrow.png" alt="list arrow"/></h3>
                                <p><a href={`/portfolio/${index}`}>Click to see project</a></p>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioList;
