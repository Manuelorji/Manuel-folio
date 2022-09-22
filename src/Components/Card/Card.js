import "./Card.scss";

const Card = ({ image, details, url }) => {
  return (
    <div className="card">
      <a href={url} rel="noreferrer" target="_blank">
        <img src={image} alt={image} />
        <span>{details}</span>
      </a>
    </div>
  );
};

export default Card;
