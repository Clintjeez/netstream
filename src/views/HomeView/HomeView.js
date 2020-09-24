import React from "react";
import request from "../../api/request";

// UI Component
import Banner from "../../components/Banner";
import Row from "../../components/Row";

import "./HomeView.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="container">
        <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
        <Row
          title="Netflix Originals"
          fetchUrl={request.fetchNetflixOriginals}
        />
      </div>
    </div>
  );
};

export default Home;
