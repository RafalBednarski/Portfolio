import React from 'react';

class Jokes extends React.Component {

    state = { joke: {} };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then( json =>this.setState({joke: json}));
    }

    render() {
        const {setup, punchline} = this.state.joke;//extracting 2 properties of state(json);

        return (
            <div><h2>Highlited Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }
}

export default Jokes;