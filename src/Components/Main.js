import react, { useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookdata, setbookdata] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      console.log("hello");
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyDVBth_Nb4olWfGR9W-g5lHwyFMRZUP5t8" +
            "&maxResults=40"
        )
        .then((res) => setbookdata(res.data.items))
        .then((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            <i>
              A room without books is like <br></br>body with out soul.
            </i>
          </h1>
        </div>
        <div className="row2">
          <h3>Find your Book</h3>
          <div className="search">
            <input
              type="text"
              placeholder="Enter book name"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/sticker-template-with-children-reading-their-books-white-background_1308-66907.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais"></img>
          </div>
        </div>
      </div>
      <div className="Container">{<Cards book={bookdata} />}</div>
    </>
  );
};
export default Main;
