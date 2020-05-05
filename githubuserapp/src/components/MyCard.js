import React from 'react';
import '../StyleMyComponents.css';



class MyCard extends React.Component {   

render () {
    // console.log(`THIS IS PROPS INSIDE MY CARD`, this.props)
  return (
    <div className="MyCard">
        <h3>Name: {this.props.myInfo.login}</h3>
        <p>Bio: {this.props.myInfo.bio}</p>
        <p>Location: {this.props.myInfo.location}</p>
        <img className="main-img" src={this.props.myInfo.avatar_url} alt="Gihub profile"></img>
    </div>
  );
}

 
}

export default MyCard;
