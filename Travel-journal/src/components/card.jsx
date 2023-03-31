function Card(props) {
    return (
        <div>
            <div className="card--container" >
                <img className="thumbnail" src={`../src/assets/${props.item.imageUrl}`} />
                <div className="location">
                    <span><img src="./src/assets/location-icon.png" />
                        <span className="country" >{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </span>
                    <h2>{props.item.title}</h2>
                    <div className="dates"><span>{props.item.startDate}</span> - <span>{props.item.endDate}</span></div>
                    <div className="description" >{props.item.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Card