import React from "react";

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "c#",
    "web",
    "localhostruntime",
    "configuration-files",
  ];
  return (
    <div className="widget-tags">
      <h3>Watched tags</h3>
      <div className="widget-tags-div">
        {
          tags.map((tags)=>(
            <p key={tags}>{tags}</p>
          ))
        }
      </div>
    </div>
  );
};

export default WidgetTags;
