import * as React from "react";
import { useParams } from "react-router-dom";
import {BookDetailsView} from '../component/book/bookDetailsViewComp';
import { fetchBook } from "../service/bookService";

const drawerWidth = 240;

export function BookDetailsPage(props) {

  const [book, setBook] = React.useState({});
  let params = useParams();

  React.useEffect(() => {
    let response;
    let filterOptionsData;

    (async () => {
      response = await fetchBook(params.book);
      setBook(response.data.data);
    })();

  }, []);


  return (
    <BookDetailsView book={book} />
    );
}