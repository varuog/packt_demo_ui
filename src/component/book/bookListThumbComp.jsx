import { Card, Grid, Link, Typography } from "@mui/material";


export function BookListThumbComp(props) {

  return (
    <Grid container spacing={2}>
      {props.books.map((book) => {
        return <Grid item xs={4} key={book.id}>
          <Card variant="outlined" style={{ minHeight: "250px" }}>
            <Link href={`/book/${book.id}`} >
              <Typography variant="h6">{book.title}</Typography>
            </Link>
            <Typography variant="bold">{book.description}</Typography>
            <Typography variant="bold">{book.publication_date}</Typography>
            <Typography variant="bold">{book.pages}</Typography>
            <Typography variant="bold">{book.author?.name}</Typography>
          </Card>
        </Grid>
      })}
    </Grid>
  );
}