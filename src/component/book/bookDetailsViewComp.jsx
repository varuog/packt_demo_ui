import { Card, Grid, Link, Typography } from "@mui/material"

export function BookDetailsView(props) {

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card variant="outlined" style={{ minHeight: "250px" }}>
                    <Typography variant="h6">{props.book.title}</Typography>

                    <Typography variant="bold">{props.book.publication_date}</Typography>
                    <Typography variant="bold">{props.book.pages}</Typography>
                    <Typography variant="bold">{props.book.author?.name}</Typography>
                </Card>
            </Grid>

            <Grid item xs={8}>
                <Card variant="outlined" style={{ minHeight: "250px" }}>
                    <Typography variant="h6">{props.book.description}</Typography>
                </Card>
            </Grid>
        </Grid>
    );
}