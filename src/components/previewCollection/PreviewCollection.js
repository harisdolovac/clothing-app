import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection = ({ title, items }) => {
  console.log("hahah", title);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default PreviewCollection;
