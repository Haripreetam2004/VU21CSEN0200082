import React from 'react';

const ProductBox = ({ imgurl }) => {
  return (
    <div>
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"column", border:"2px solid black",padding:"10px 10px",color:"black",textDecoration:"none"}}>
        <img src={imgurl} alt="Product" height={200} width={200} />
        <div className="details" style={{color:"black",textDecoration:"none"}}>
          <h1>Lenovo Legion</h1>
          <p>8GB RAM, 512GB SSD, Windows 11, Black Body</p>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
