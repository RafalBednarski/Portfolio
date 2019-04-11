import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
class App extends React.Component {
		
	state = {displayBio: false}

  toggleDisplayBio = () => {
    this.setState({displayBio: !this.state.displayBio})
  }

  render() {
    return (
    	<div className="App">
       	<h1>Hello React</h1>
       	<p>lalaallalalaalalalal</p>
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
    	</div>
    	);
  	}
}

export default App;
