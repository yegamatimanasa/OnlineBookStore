import react from "react";

const Model = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail}></img>
            <div className="info">
              <h3>{item.volumeInfo && item.volumeInfo.title}</h3>
              <br />
              <p>by</p>
              <h4>{item.volumeInfo && item.volumeInfo.authors}</h4>
              <br />
              <p>published through</p>
              <h5>
                {item.volumeInfo && item.volumeInfo.publisher}{" "}
                <span className="text">in</span>{" "}
                <span>{item.volumeInfo && item.volumeInfo.publishedDate}</span>
              </h5>
              <br />
              <a href={item.volumeInfo && item.volumeInfo.previewLink}>
                <button>Read more</button>
              </a>
            </div>
          </div>
          <div className="description">
            <h4>{item.volumeInfo && item.volumeInfo.description}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Model;
