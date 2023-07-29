import React from 'react'
import styles from "../Styling/Food.module.css";


const FoodCard = ({ food_image = "https://in.bmscdn.com/bmsin/v2/Web-v2/d-combo/2000131_22112019112957.jpg",
food_name="Title", food_tag="des", food_price="59"}) => {
    return (
        <div className={styles.card} style={{maxWidth:100,alignItems:'center',alignContent:'center'}}>
           
            <img src={food_image} alt="" />
           <p style={{alignContent:'center'}}>price:60/-</p> 
           <a href="/">
      <button style={{width:'10rem',height:'50%',fontSize:'20px',borderRadius:'55px',backgroundColor:'pink'}}>Home</button>
    </a>
                </div>
                
      
    )
}

export default FoodCard
