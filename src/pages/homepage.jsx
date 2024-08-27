import React from 'react'
import ProductBox from '../Components/productBox'
import ProductBox1 from '../Components/productBox1'
import ProductBox2 from '../Components/productBox1'
import lapy1 from "../Assets/lapy1.png"
import lapy2 from "../Assets/lapy2.jpg"
import lapy3 from "../Assets/lapy3.jpg"
import ph1 from "../Assets/ph1.jpg"
import ph3 from "../Assets/ph3.jpg"
import ph2 from "../Assets/ph2.jpg"
import tv2 from "../Assets/tv2.jpg"
import tv4 from "../Assets/tv3.jpg"
import tv3 from "../Assets/tv4.jpeg"
import { Link } from 'react-router-dom'


const homepage = () => {
  return (
    <div>
      <div className="navbar" style={{borderBottom:"1px solid black",textAlign:"center"}}>
        <h4>Preetam store</h4>
      </div>
      <h1>Laptops: </h1>
      <div className="item" style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px 5px"}}>
        <Link to="/product"><ProductBox imgurl={lapy1}/></Link>
        <Link to="/prouct"><ProductBox imgurl={lapy2}/></Link>
        <Link to="/prouct"><ProductBox imgurl={lapy3}/></Link>
      </div>
      <h1>Mobiles: </h1>
      <div className="item" style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px 5px"}}>
        <Link to="/product1"><ProductBox1 imgurl={ph1}/></Link>
        <Link to="/product1"><ProductBox1 imgurl={ph2}/></Link>
        <Link to="/product1"><ProductBox1 imgurl={ph3}/></Link>
      </div>
      <h1>Telivisions: </h1>
      <div className="item" style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px 5px"}}>
        <Link to="/product2"><ProductBox2 imgurl={tv2}/></Link>
        <Link to="/product2"><ProductBox2 imgurl={tv3}/></Link>
        <Link to="/product2"><ProductBox2 imgurl={tv4}/></Link>
      </div>
    </div>
  )
}

export default homepage
