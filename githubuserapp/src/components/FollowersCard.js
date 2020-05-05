import React from 'react';



class FollowersCard extends React.Component {

render () {
    console.log(this.props)
  return (
    <div className="FollowersCard">
    <h3>Name: {this.props.person.login}</h3>
    <p>Bio: {this.props.person.bio}</p>
    <p>Location: {this.props.person.location}</p>
    <img src={this.props.person.avatar_url} alt="Gihub profile"></img>
</div>
  );
}

 
}

export default FollowersCard;
