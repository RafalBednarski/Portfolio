import React from 'react';
import SOCIAL_PROFILES from './data/SocialProfiles';

class SocialProfile extends React.Component {

    render() {
        const {link, image} = this.props.profile;//extract profile property

        return (
            <div>
                <a href={link}><img src={image}/></a>
            </div>
        )
    }
}

class SocialProfiles extends React.Component {

    render() {
        return (
            <div>
                <h2>Connect with Me!</h2>
                {SOCIAL_PROFILES.map(PROFILE => {
                    return (
                        <SocialProfile key={PROFILE.id} profile={PROFILE} />
                    )
                })}
            </div>
        )
    }
}

export default SocialProfiles;