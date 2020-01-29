import React, { Component } from "react";
import ShopData from "./ShopData.js";
import PreviewCollection from "../../components/previewCollection/PreviewCollection";

export class ShopPage extends Component {
  state = {
    collections: ShopData
  };

  render() {
    console.log("state of coolection", this.state.collections);

    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionprops }) => (
          <PreviewCollection key={id} {...otherCollectionprops} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
