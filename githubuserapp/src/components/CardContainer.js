import React from 'react';
import MyCard from './MyCard';
import FollowersCard from './FollowersCard';
import '../StyleMyComponents.css';
// import axios from 'axios';



class CardContainer extends React.Component {
    
render (){
    //  console.log(this.props)
  return (
    <div className="CardContainer">
        <MyCard myInfo={this.props.myInfo}/>

        {this.props.followersInfo.map((person) => {
            // console.log(person)            
            return (
                <FollowersCard key={person.id} person={person}/>  
            )
        })}

            
    </div>
  );
} 
}

export default CardContainer;
