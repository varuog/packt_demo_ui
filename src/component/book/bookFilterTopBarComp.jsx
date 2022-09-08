import { ArrowBackIosTwoTone } from "@mui/icons-material";
import { Box, FormControl, FormGroup, Grid, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import ListAltIcon from '@mui/icons-material/ListAlt';

export function BookFilterTopBarComp(props) {


    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={4} >
                    <FormControl>
                        <TextField
                            id="book-search"
                            label="Search"
                            onChange={props.onHandleSearchChange}
                            value={props.filters.title}
                            disabled={props.loading}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={2} >
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.sort}
                            label='Sort'
                            onChange={props.onHandleSort}
                            disabled={props.loading}
                        >
                            <MenuItem value={'popular'}>Popular</MenuItem>
                            <MenuItem value={'recent-published'}>Recently Published</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} >

                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Per Page</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.perPage}
                            label="Per Page"
                            onChange={props.onHandlePerPage}
                            disabled={props.loading}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={2} >

                    <ToggleButtonGroup
                        value={props.view}
                        exclusive
                        onChange={props.onHandleToggleView}
                        aria-label="text alignment"
                        disabled={props.loading}
                    >
                        <ToggleButton value="thumb" aria-label="Thumb View">
                            <ListAltIcon />
                        </ToggleButton>
                        <ToggleButton value="list" aria-label="List View">
                            <ReorderIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>

                <Grid item xs={2} >
                </Grid>
            </Grid>



        </Box>
    );
}