import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NotMean from "../Components/NotMean/NotMean";
import { Helmet } from "react-helmet-async";
import OurAdministrative from "../Components/AboutComponents/OurAdministrative";
function AboutAdministrative() {
  return (
    <>
      <Helmet>
        <title>İnzibati İşlər</title>
      </Helmet>
      <NotMean />
      <OurAdministrative />
    </>
  );
}

export default AboutAdministrative;
