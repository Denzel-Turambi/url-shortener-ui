// import './UrlContainer.css';

const UrlCard = ({ title, short_url, long_url, id }) => {
  return (
    <div className="url">
    <h3>{title}</h3>
    <a href={short_url} target="blank">{short_url}</a>
    <p>{long_url}</p>
  </div>
  )
}
export default UrlCard;