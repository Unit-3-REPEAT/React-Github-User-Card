import React from 'react';
import '../StyleMyComponents.css';



class FollowersCard extends React.Component {

render () {
    // console.log(this.props)
  return (
    <div className="FollowersCard">
        <h3>Name: {this.props.person.login}</h3>
        <p>ID: {this.props.person.id}</p> 
        <p>Gihub page: <a href={this.props.person.html_url}><button>CLICK HERE</button></a></p>  
        <img src={this.props.person.avatar_url} alt="Github profile"></img>
    </div>
  );
}

 
}

export default FollowersCard;
