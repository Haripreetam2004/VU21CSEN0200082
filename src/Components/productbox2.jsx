import React from "react";

const productbox2 = () => {
  return (
    <div>
      <div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            border: "2px solid black",
            padding: "10px 10px",
          }}
        >
          <img src={imgurl} alt="Product" height={500} width={500} />
          <div className="details" style={{color:"black",textDecoration:"none"}}>
            <h1>Sony</h1>
            <p>64 inches, Black Body</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productbox2;
