import React, {useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../supabase";


const PortfolioSingle = () => {
  const { id } = useParams(); // URL의 id를 가져옴

  const currentId = parseInt(id, 10); // id를 숫자로 변환
  
  const [item, setItem] = useState([]);
  
  useEffect(()=>{
    async function fetchProject(){
      const { data:project } = await supabase
      .from('projects')
      .select()
      .eq('id', currentId);
      setItem(project[0]);

    }
    fetchProject();
  }, []);


  // const item = data[currentId];

  // if (!item) return <p>Item not found</p>;

  // // 이전/다음 프로젝트 ID 계산
  // const prevId = currentId > 0 ? currentId - 1 : null;
  // const nextId = currentId < data.length - 1 ? currentId + 1 : null;

  return (
    <>
      <Header />
      <main className="content portfolio-single">
        <div className="container">
          <div className="row">
            <div className="col-md-8 description">
              <div className="contents shadow">
                {/* <img src={item.images.description1} alt={`${item.title}`} /> */}
                <p>image description 1</p>
              </div>
              <div className="contents shadow">
                {/* <img src={item.images.description2} alt={`${item.title}`} /> */}
                <p>image description 2</p>
              </div>
            </div>
            <div className="col-md-4 portfolio_info">
              <div className="contents shadow">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p className="link">
                  <a href="/">Visit site &rarr;</a>
                </p>
                <hr className="double" />
                {/* <blockquote>
                  <p>{item.review.content}</p>
                  <small>- {item.review.writer}</small>
                </blockquote> */}
                <p className="nav">
                  {/* 이전 프로젝트로 이동 */}
                  {/* {prevId !== null ? (
                    <Link to={`/portfolio/${prevId}`} className="secondary-btn">
                      &larr; Previous Project
                    </Link>
                  ) : (
                    <span className="secondary-btn disabled">
                      &larr; Previous Project
                    </span>
                  )} */}

                  {/* 다음 프로젝트로 이동 */}
                  {/* {nextId !== null ? (
                    <Link to={`/portfolio/${nextId}`} className="secondary-btn">
                      Next Project &rarr;
                    </Link>
                  ) : (
                    <span className="secondary-btn disabled">
                      Next Project &rarr;
                    </span>
                  )} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioSingle;
