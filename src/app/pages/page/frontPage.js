import React from "react";
import "./frontPage.css";
import Logo from "../../../../assets/img/logo-black.png";
export default ({ page, book, print }) => (
   <div className="full" styleName="r">
      {page.type === "frontPage" &&
         <div styleName="part1">
            {book.book_name ? book.book_name : book.name}
         </div>}
      <div styleName="part2">
         <img src={Logo} style={{ width: "13%", height: "auto" }} />
         <div>bookfrom.me</div>
         <div>2017</div>
      </div>
      {print&&page.type==="frontPage" &&
         <div
            styleName="bookid"
            style={{
               position: "absolute",
               left: "0.8%",
               color:"rgb(160,160,160)",
               bottom: "20%",
               width:20,
               fontSize:'0.4em'
            }}
         >
            {book.id}{book.format.indexOf("soft") > -1 && "М"}
         </div>}

   </div>
);
