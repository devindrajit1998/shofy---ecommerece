import React, { useState } from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import CommonNav from "./CommonNav";
import BelowNav from "./BelowNav";

export default function Layout() {
  // for open cart canvas
  const [overlay, setOverlay] = useState("");
  const [body, setBody] = useState("");
  const [mobile, setMobile] = useState("");

  const Open = () => {
    if (body === "") {
      setOverlay("opened");
      setBody("cartmini-opened");
    } else {
      setOverlay("");
      setBody("");
    }
  };

  const OpenMobile = () => {
    if (mobile === "") {
      setMobile("offcanvas-opened");
      setOverlay("opened");
    } else{
      setMobile("");
      setOverlay("");
    }
  };
  return (
    <>
      <CommonNav overlay={overlay} body={body} Open={Open} mobile={mobile} OpenMobile={OpenMobile}/>
      <header>
        <div className="tp-header-area p-relative z-index-11">
          <TopNav Open={Open} OpenMobile={OpenMobile}/>
          <BottomNav />
        </div>
      </header>
      <BelowNav />
    </>
  );
}
