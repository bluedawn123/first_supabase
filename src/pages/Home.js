import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../supabase";

const Home = ({ data }) => {

    const getThumbnailUrl = (path) => {
        const {data : thumbnailData} = supabase
        .storage
        .from('project')
        .getPublicUrl(path)
        return thumbnailData.publicUrl;
    }

    return (
        <div>
        <Header />
        <main class="content">
        <div class="container latest_portfolio">
                <div class="row intro">
                    <div class="col-md-4">
                        <div class="contents shadow">
                            <h2 class="heading2">I'm alikerock</h2>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contents shadow">
                            <h2 class="heading2">I create super awesome stuff</h2>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="contents shadow">
                            <h2 class="heading2">I'm available for freelance projects</h2>
                        </div>
                    </div>
                </div>
                <div class="row list">
                {data.slice(0, 3).map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div class="contents shadow">
                            <img src={getThumbnailUrl(item.thumbnail)} alt={item.title}/>
                            <div class="hover_contents">
                                <div class="list_info">
                                    <h3><a href={`/portfolio/${item.id}`}>{item.title}</a> 
                                    <img src="images/portfolio_list_arrow.png" alt="list arrow"/></h3>
                                    <p><a href={`/portfolio/${item.id}`}>Click to see project</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <p class="porfolio_readmore">
                    <a href="/" className="primary-btn">See my full portfolio</a>        
                </p>
            </div>
        </main>
        <Footer />
        </div>
    );
};

export default Home;
