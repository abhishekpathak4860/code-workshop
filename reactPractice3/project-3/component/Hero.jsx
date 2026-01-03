import { useState } from "react"


export default function Hero() {

  const [imageChange,setImageChange]=useState("/public/shoe_image.png");

  return (
    <div className="hero">
        <div className="first-box">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="shop-category">
               <p className="shop" onClick={()=>{
                setImageChange("/public/brand.png");
               }} >Shop Now</p>
               <p className="category">Category</p>
            </div>
            <p className="avail">Also Available On</p>
            <div className="flip-img">
                <img src="/public/shops.png" alt="" />
            </div>
        </div>
        <div className="second-box">
        <img src={imageChange} alt="" />
        </div>
    </div>
  )
}
