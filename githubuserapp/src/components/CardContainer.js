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

//WEIRD ERROR
//Access to XMLHttpRequest at 'https://github.com/jtwray' from origin 'http://localhost:3001' 
//has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
            // axios
            // .get(person.html_url)
            // .then(response => {
            //     console.log(response)
            // })
            // .catch(err => console.log(err))
            
            return (
                <FollowersCard key={person.id} person={person}/>  
            )
        })}

            
    </div>
  );
} 
}

export default CardContainer;
