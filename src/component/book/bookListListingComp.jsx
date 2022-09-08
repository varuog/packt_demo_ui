import { Card, Grid, Link, Typography } from "@mui/material";


export function BookListListingComp(props) {

  return (
    <Grid container spacing={2}>
      {props.books.map((book) => {
        return <Grid item xs={12} key={book.id}>
          <Card variant="outlined" style={{ minHeight: "250px" }}>
            <Grid container>
              <Grid item xs={8}>
              <Link href={`/book/${book.id}`} >
              <Typography variant="h6">{book.title}</Typography>
              </Link>
                <Typography variant="bold">{book.description}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="bold">{book.publication_date}</Typography>
                <Typography variant="bold">{book.pages}</Typography>
                <Typography variant="bold">{book.author?.name}</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      })}
    </Grid>
  );

}