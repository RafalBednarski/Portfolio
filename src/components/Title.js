import React from 'react';

const TITLES = [
    'a Front-end Developer',
    'a Food Lover',
    'a Sport Freak',
    'N.E.R.D'
]
    
class Title extends React. Component {
    state = {titleIndex: 0, fadeIn: true};

    componentDidMount() {
        this.animateTitles();
        this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
    }

    componentWillUnmount() {//clear all intervals
        clearInterval(this.titleInterval);
        clearInterval(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const currentTitle = (this.state.titleIndex + 1) % TITLES.length;//incrementing number of current STATE but max to the TITLES.lenght 
            this.setState({titleIndex: currentTitle, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);//change fadeIn state after any 2sec
        }, 4000)//change all states after any 4sec
    }  

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p className={this.state.fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;