export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.mPicture} />
      </div>
      <div className="info-container">
        <img className="marker" src="..\src\assets\eight.jpg" />
        <span className="country">{props.country}</span>
        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
          View on google maps
        </a>
        <h2 className="entry-title">{props.placeName}</h2>
        <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.information}</p>
      </div>
    </article>
  );
}
