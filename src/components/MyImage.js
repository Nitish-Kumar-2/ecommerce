import React, { useState } from "react";
const MyImage = ({ imgs = [{ url: "" }] }) => {

  const [mainImage,setMainImage] = useState(imgs[0]);

  return (
    <div className="flex my-auto gap-10">
      <div className="grid gap-5">
      {imgs.map((curElm, index) => {
        return (
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="w-72 hover:opacity-60"
              key={index}
              onClick={() => setMainImage(curElm)}
            />
        );
      })}
    </div>
    {/* 2nd column  */}

    <div className="my-auto">
      <img src={mainImage.url} className="rounded-xl" alt={mainImage.filename} />
    </div>
    </div>
  );
};

export default MyImage;
