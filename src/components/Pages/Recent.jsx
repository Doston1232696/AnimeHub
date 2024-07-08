import InfiniteSection from "../Sections/InfiniteSection";
import Navbar from "../Sections/Navbar";
import React from "react";
const RecentPage = () => {
  const baseURL = process.env.REACT_APP_CONSUMET_API_URL

  return (
    <>
      <Navbar></Navbar>
      <InfiniteSection
        url={`${baseURL}/meta/anilist/recent-episodes`}
        itemlimit={21}
        sectiontitle={"Epizodlar"}
        id="recent-section"
        querytype={"?"}
      ></InfiniteSection>
    </>
  );
};
export default RecentPage;
