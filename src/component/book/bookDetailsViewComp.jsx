import { Card, Grid, Link, Typography } from "@mui/material"

export function BookDetailsView(props) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card variant="outlined" style={{ minHeight: "250px" }}>
                    <Typography variant="h4">{props.book.title}</Typography>
                    <br />
                    <Typography variant="h5">Publication date:</Typography>
                    <Typography variant="bold">{props.book.publication_date}</Typography>
                    <br />
                    <Typography variant="h5">Pages:</Typography>
                    <Typography variant="bold">{props.book.pages}</Typography>
                    <br />
                    <Typography variant="h5">Author Name:</Typography>
                    {
                        props.book.authors?.map((author) => {
                            return <Typography key={author.id} variant="bold">{author.name}, </Typography>
                        })
                    }
                </Card>
            </Grid>

            <Grid item xs={8}>
                <Card variant="outlined" style={{ minHeight: "250px" }}>
                    <Typography variant="h5">Description:</Typography>
                    <br />
                    <Typography variant="h6">{props.book.description}</Typography>
                </Card>
            </Grid>
        </Grid>
    );
}