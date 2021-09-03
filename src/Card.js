const Card = (props) => {
    return (
        <div className="ui card">
            <div className="image">
                <img src={props.image} alt="sdrvaeb" />
            </div>
            <div className="content">
                <a className="header" href="/">{ props.name }</a>
                <div className="meta">
                <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                    {props.text}
                </div>
            </div>
            <div className="extra content">
                <button className="ui primary button">Add to Friends</button>
                <button className="ui button">Clear</button>
            </div>
            <div className="extra content">
                <a href="/">
                <i className="user icon"></i>
                {props.countOfFriends } Friends
                </a>
            </div>
        </div>
    );
};

export default Card;