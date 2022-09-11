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
                  <Typography variant="h4">{book.title}</Typography>
                </Link>
                <br />
                <Typography variant="h5">Description:</Typography>
                <Typography variant="bold">{book.description}</Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="bold">{book.publication_date}</Typography>
                <br />
                <Typography variant="bold">{book.pages}</Typography>
                <br />
                {
                  book.authors.map((author) => {
                    return <Typography key={author.id} variant="bold">{author.name}, </Typography>
                  })
                }
                <br />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      })}
    </Grid>
  );

}