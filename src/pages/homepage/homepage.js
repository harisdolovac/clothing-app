import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/directoryComponent";
import ShopPage from "../shop/ShopComponent";

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
      <ShopPage />
    </div>
  );
};

export default HomePage;
