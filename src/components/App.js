import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Jokes from './Jokes';

class App extends React.Component {
		
	state = {displayBio: false}

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio})
  }

  render() {
    return (
    	<div className="App">
       	<h1>Hello</h1>
       	<p>My name is Rafał.</p>
		<Title /> 
       	{
        	this.state.displayBio ? (
        	<div>
        		<p>lalallalaalaalalalalala</p>
            	<button onClick={this.toggleDisplayBio}>Show Less</button>
        	</div>
         ) : (
        	<div>
            	<button onClick={this.toggleDisplayBio}>Read more</button>
        	</div>       
        	)
    	}<hr />
		<Projects />
		<hr />
		<SocialProfiles />
		<Jokes />   
    	</div>
    	);
  	}
}

export default App;
