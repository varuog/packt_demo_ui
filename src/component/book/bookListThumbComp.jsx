import { Card, Grid, Link, Typography } from "@mui/material";


export function BookListThumbComp(props) {

  return (
    <Grid container spacing={2}>
      {props.books.map((book) => {
        return <Grid item xs={4} key={book.id}>
          <Card variant="outlined" style={{ minHeight: "250px" }}>
            <Link href={`/book/${book.id}`} >
              <Typography variant="h4">{book.title}</Typography>
            </Link>
            <br />
            <Typography variant="h5">Description:</Typography>
            <Typography variant="bold">{book.description}</Typography>
            <br />
            <Typography variant="h5">Publciation Date:</Typography>
            <Typography variant="bold">{book.publication_date}</Typography>
            <br />
            <Typography variant="h5">Pages: </Typography>
            <Typography variant="bold">{book.pages}</Typography>
            <br />
            <Typography variant="h5">Author: </Typography>
            {
              book.authors.map((author) => {
                return <Typography key={author.id} variant="bold">{author.name}, </Typography>
              })
            }
            <br />
          </Card>
        </Grid>
      })}
    </Grid>
  );
}