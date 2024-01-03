import react, { useState } from "react";
import Model from "./Model";

const Cards = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookitem, setitem] = useState();

  console.log(book);
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let title = item.volumeInfo && item.volumeInfo.title;

        if (
          thumbnail != undefined &&
          amount != undefined &&
          title != undefined
        ) {
          return (
            <>
              <div
                className="Card"
                onClick={() => {
                  setShow(true);
                  setitem(item);
                }}
              >
                <img src={thumbnail} height="150px" width="150px"></img>
                <div className="bottom">
                  <h3 className="title">{title}</h3>
                  <p className="amount">&#163;{amount}</p>
                </div>
              </div>
              <Model
                show={show}
                item={bookitem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default Cards;
