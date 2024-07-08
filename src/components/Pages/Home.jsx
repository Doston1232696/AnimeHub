import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import AnimeSection from "../Sections/AnimeSection";
import Hero from "../Sections/Hero";
import InfiniteSection from "../Sections/InfiniteSection";
import UpcomingSection from "../Sections/UpcomingSection";

import "./Home.css";
const Home = () => {
  const baseURL = process.env.REACT_APP_ANILIST_API_URL;
  const [heroSectionLoaded, setHeroSectionLoaded] = useState(true);

  return (
    <>
      <Hero setHeroSectionLoaded={setHeroSectionLoaded}></Hero>
      {heroSectionLoaded && (
        <>
          <UpcomingSection></UpcomingSection> *
          <AnimeSection
            url={`${baseURL}/recent-episodes`}
            id={"recent"}
            sectiontitle={"Recent"}
          ></AnimeSection>
          <AnimeSection
            url={`${baseURL}/advanced-search?format=SPECIAL`}
            id={"special"}
            sectiontitle={"Maxsus"}
          ></AnimeSection>
          <InfiniteSection
            url={`${baseURL}/popular`}
            itemlimit={18}
            sectiontitle={"Taniqli"}
            id="popular"
            querytype={"?"}
          ></InfiniteSection>
        </>
      )}

      <ScrollToTop
        style={{
          border: "1px solid dodgerblue",
          background: "rgb(33, 33, 33)",
         
          color: "white",
         
        }}
        className="scrolltop"
        top={1500}
        smooth
        color="#fff"
      />
    </>
  );
};
export default Home;
