import React from 'react';
import PROJECTS from './data/Projects';

class Project extends React.Component {

    render() {
        const {title, description, link, image} = this.props.project//extracting(assign each obj val to variable)

        return (
            <div style={{display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt='pic' style={{width: 200, height: 120}}/>
                <p>{description}</p>
                <a href={link}>click here</a>
            </div>
        )
    }
}

class Projects extends React.Component {

    render() {
        return (
            <div>
                <h2>Highlited Projects</h2>
                <div>
                    <div>{
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            )
                        })
                    }</div>
                </div>
            </div>
        )
    }
}

export default Projects;