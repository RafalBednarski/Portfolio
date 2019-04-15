import React from 'react';
import PROJECTS from '../data/Projects';

const Project = (props) => {

    const {title, description, link, image} = props.project//extracting(assign each obj val to variable)

    return (
        <div style={{display: 'inline-block', width: 300, margin: 10}}>
            <h3>{title}</h3>
            <img src={image} alt='pic' style={{width: 200, height: 120}}/>
            <p>{description}</p>
            <a href={link}>click here</a>
        </div>
    )
}

const Projects = () => {

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

export default Projects;