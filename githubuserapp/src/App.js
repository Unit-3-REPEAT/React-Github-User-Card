import React from 'react';
import './App.css';
import './StyleMyComponents.css';
import CardContainer from './components/CardContainer';
import axios from 'axios';

class App extends React.Component {
constructor() {
  super();
  this.state={
    myInfo:[] ,
    followersInfo: [], 
    searchUser:''   
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
    

    //loop through the followers array that we get from the response
    //make an axios call for each follower
    //in the .then we want to add that user to the followers array
    response.data.forEach((follower) => {
      axios
      .get(follower.url)
      .then(res => {
        // console.log(`-->`, res.data);
        
        this.setState({
          followersInfo: [...this.state.followersInfo, res.data]         
        })
      })
      .catch(err => console.log(err))
    })

    
  })
  .catch(err => console.log(`There was an error grabbing a follower`, err))  
}

//Handle input changes
handleChanges = e => {
  this.setState({searchUser: e.target.value})
}


//Fetch a specific user
fetchUser = e => {
  e.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.searchUser}`)
    .then(res => {
      console.log(`fetch specific user response`, res)
      this.setState({myInfo: res.data })

    })
    .catch(err => console.log(err))
}






render () {
  return (
    <div className="App">

        <form onSubmit={this.fetchUser} className="Form">
          <input 
            type="text"
            placeholder="Search for user"
            value={this.state.searchUser} 
            onChange={this.handleChanges}      
          />    

          <button>Search</button>  
        </form>


     <CardContainer         
        myInfo={this.state.myInfo}
        followersInfo={this.state.followersInfo}
    />
    </div>
  );
} 
}

export default App;
