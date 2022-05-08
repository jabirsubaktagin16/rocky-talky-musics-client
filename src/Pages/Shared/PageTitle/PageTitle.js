import React from "react";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <div>
      <Helmet>
        <title>
          {title.length === 0
            ? "Rocky Talky Musics"
            : `${title} | Rocky Talky Musics`}
        </title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
