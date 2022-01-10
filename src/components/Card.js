import './Card.css';

export const CardList = (props) => {
    return (
        <div>
            { props.profiles.map(profile => <Card {...profile} />) }
        </div>
    )
}

export const Card = (props) => {
    return (
        <div className="github-profile" style={{margin: '1rem'}}>
            <img src={props.avatar_url} />
            <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
                <div className="name" style={{fontSize: '125%'}}>{props.name}</div>
                <div className="company">{props.company}</div>
            </div>
        </div>
    );
}

// export default Card;
