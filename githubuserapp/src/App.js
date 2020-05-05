import React from 'react';
import './App.css';
import Form from './components/Form';
import CardContainer from './components/CardContainer';
import axios from 'axios';

class App extends React.Component {
constructor() {
  super();
  this.state={
    myInfo:[] ,
    followersInfo: []
  };
}

componentDidMount(){
  this.grabMyData();
  this.grabFollowers();
}

//Fetch my github data
grabMyData = () => {
  axios
  .get('https://api.github.com/users/Dino-Muratovic')
  .then(response => {
    // console.log(`THIS IS ME`, response.data);
    this.setState({
      myInfo: response.data
    })

  })
  .catch(err => console.log(`Oops there was an error`, err))
}

//Fetch followers
grabFollowers = () => {
  axios
  .get('https://api.github.com/users/Dino-Muratovic/followers')
  .then(response => {
    // console.log(`THIS IS MY FOLLOWERS`, response.data);
    this.setState({
      followersInfo: response.data
    })
  })
  .catch(err => console.log(`There was an error grabbing a follower`, err))
}




render () {
  return (
    <div className="App">

     <Form/>
     <CardContainer         
        myInfo={this.state.myInfo}
        followersInfo={this.state.followersInfo}
    />
    </div>
  );
} 
}

export default App;
