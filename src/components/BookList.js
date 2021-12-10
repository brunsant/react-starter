import React, { useEffect, useState } from "react";
import { BOOK_API } from "utils/urls";
import styled from "styled-components";
import { Loading } from "./Loading";

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [input, setInput] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(BOOK_API)
      .then((res) => res.json())
      .then((data) => setTimeout(() => setBookList(data.response), 1000))
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, []);

  console.log(bookList);

  return (
    <>
      {loading && <Loading />}
      <div>
        <p>Search book by title:</p>
        <input
          type="text"
          id="id"
          onChange={(event) => setInput(event.target.value)}
        />
        <a
          href={`https://express-api-amazon-bestsellers.herokuapp.com/books?title=${input}`}
        >
          <button onClick>
            <span>Search</span>
          </button>
        </a>
      </div>
      <ListWrapper>
        {bookList.map((book) => (
          <BookWrapper key={book.bookIndex}>
            <p>{book.Name}</p>
            <p>{book.Author}</p>
            <p>{book.Year}</p>
          </BookWrapper>
        ))}
      </ListWrapper>
    </>
  );
};

export default BookList;

const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
  margin: 0 8%;
`;

const BookWrapper = styled.div`
  border: 1px solid black;
  text-align: center;
`;
