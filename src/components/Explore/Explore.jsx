//./components/Explore/Explore.jsx
import React from "react";
import ExploreTopics from "./ExplorePosts/ExploreTopics";
import ExploreBusiness from "./ExplorePosts/ExploreBusiness";
import ExploreJobs from "./ExplorePosts/ExploreJobs";
import ExploreClasses from "./ExplorePosts/ExploreClasses";
import BeauProAd2 from "../../assets/images/BeauProAd2.png";
import BeauProServiceAd from "../../assets/images/BeauProServiceAd.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import "./Explore.css"; // Import CSS for styling
import ExploreMarketAd from "./ExploreAds/ExploreMarketAd";
import ExplorePremiumAd from "./ExploreAds/ExplorePremiumAd";

export default function Explore() {
  return (
    <div className="explore-scroll">
      <div className="p-2">
        <Link>
          <img src={BeauProAd2} className="w-100 shadow"></img>
        </Link>
        <ExploreBusiness />
        <img src={BeauProServiceAd} className="w-100 shadow"></img>

        <ExploreTopics />
        {/**start Upgrade */}
        <ExploreMarketAd />
        {/**end Upgrade */}
        <ExploreJobs />
        <ExplorePremiumAd />
        <ExploreClasses />

        {/*End Right Column Quarter*/}

        {/*} End Grid*/}

        {/*}End Main row*/}
      </div>
    </div>
  );
}
