import React from 'react';

const TITLES = [
    'a Front-end Developer',
    'a Food Lover',
    'a Sport Freak',
    'N.E.R.D'
]
    
class Title extends React. Component {
    state = {titleIndex: 0};

    componentDidMount() {
        console.log('cmp is mounted');

        this.animateTitles()
    }

    animateTitles = () => {
        setInterval(() => {
            const currentTitle = (this.state.titleIndex + 1) % TITLES.length;//incrementing number of current STATE but max to the TITLES.lenght
            this.setState({titleIndex: currentTitle });
        }, 2000)
    }

    

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;