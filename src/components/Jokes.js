import React from 'react';
import Header from './Header';
class Jokes extends React.Component {

    state = { joke: {}, listOfJokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then( json =>this.setState({joke: json}))
        .catch(error => alert(error.message));
    }

    showListOfJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({listOfJokes: json}))
        .catch(error => alert(error.message));
    }

    render() {
        const {setup, punchline} = this.state.joke;//distracting 2 properties of state(json) obj;

        return (
            <div>
                <Header />
                <h2>Highlited Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
                <button onClick={this.showListOfJokes}>Show Me more</button>
                {
                    this.state.listOfJokes.map(joke => {
                        const {id, setup, punchline} = joke;//distract properies from state(json) obj
                        return <p key={id} style={{fontSize: 10}}>{setup} <em>{punchline}</em></p>
                    })
                }
            </div>
        )
    }
}

export default Jokes;