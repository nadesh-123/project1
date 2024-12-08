import React from "react";
import "./slide.css";
import banner from "/project/workspace/frontend/src/components/images/banner.jpg";

function Slide() {
  let [count, newslide] = React.useState(
    "/project/workspace/frontend/src/components/images/banner.jpg"
  );
  function main() {
    let images = [];
    let i = 0;
    images[0] = "/project/workspace/frontend/src/components/images/banner.jpg";
    images[1] = "/project/workspace/frontend/src/components/images/banner2.jpg";
    if (i < images.length - 1) {
      count = images[i];
      newslide(count);
      i++;
    } else {
      i = 0;
    }
    setTimeout("main()", 2000);
  }

  return (
    <div>
      <img className="b-img" id="banner" src={banner} alt="" />
    </div>
  );
}
export default Slide;
