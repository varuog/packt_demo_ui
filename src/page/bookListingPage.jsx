import * as React from "react";
import * as ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Card, Checkbox, Chip, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Pagination, Paper, Select, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { fetch, fetchFilterOptions } from "../service/bookService";
import { Container } from "@mui/system";
import { ArrowBackIosTwoTone, ListIcon } from '@mui/icons-material';
import { BookListListingComp } from '../component/book/bookListListingComp';
import { BookListThumbComp } from '../component/book/bookListThumbComp';
import { BookFilterTopBarComp } from '../component/book/bookFilterTopBarComp';
import { BookFilterSideBarComp } from '../component/book/bookFilterSideBarComp';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  useNavigate, useSearchParams,
} from "react-router-dom";
import _, { filter } from "lodash";

const drawerWidth = 240;

export function BookListingPage(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [filters, setFilters] = React.useState([
    { name: 'publish_year', value: [] },
    { name: 'release_year', value: [] },
    { name: 'product_type', value: [] },
    { name: 'title', value: [] },
  ]);

  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState('popular');
  const [books, setBooks] = React.useState([]);
  const [view, setView] = React.useState('thumb');
  // const [search, setSearch] = React.useState('');
  const [totalPage, setTotalPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [filterOptions, setFilterOptions] = React.useState([]);



  let navigate = useNavigate();
  let [queryParams, setQueryParams] = useSearchParams();



  React.useEffect(() => {
    let response;
    let filterOptionsData;

    (async () => {
      response = await fetchFilterOptions();
      filterOptionsData = response.data.data.filters;
      setFilterOptions(filterOptionsData);
    })();

  }, []);



  React.useEffect(() => {
    console.log("DDDD");
    let response;
    let booksData = [];
    let metaData = [];

    (async () => {
      //console.log(queryParams.page)
      let page = parseInt(queryParams.get('page'));
      page = page ? page : 1;

      response = await fetch(filters, sort, page, perPage);
       booksData = response.data.data;
      metaData = response.data.meta;
      page = page ? page : metaData.currentPage;

      console.log(booksData);
      console.log(metaData);

      setBooks(booksData);
      setTotalPage(metaData.lastPage);
      setCurrentPage(page);

    })();


  }, [filters, sort, page, perPage]);


  function handlePerPage(ev) {
    setPerPage(ev.target.value);
  }

  function handleSort(ev) {
    setSort(ev.target.value);
  }

  function handleToggleView(ev) {
    setView(ev.target.value);
  }

  function handleSearchChange(ev) {
    // setSearch(ev.target.value);
    setFilters((prevfilters) => {
      return prevfilters.map((filterOpt) => {
        // console.log(filterOpt)
        if (filterOpt.name == 'title') {
          filterOpt.value = [];
          filterOpt.value.push(ev.target.value);
        }

        return filterOpt;
      });

    });

    // setSearch(ev.target.value);
  }


  function handleFilter(ev, filter, currentFilterVal) {
    console.log("EVENT");
    // console.log(filters);

    setFilters((prevfilters) => {
      return prevfilters.map((filterOpt) => {
        // console.log(filterOpt)
        if (filterOpt.name == filter) {
          if (ev.target.checked) {
            filterOpt.value.push(currentFilterVal);
            filterOpt.value = _.uniq(filterOpt.value);
          } else {
            filterOpt.value = _.remove(filterOpt.value, function (filterValue) {
              return currentFilterVal != filterValue;
            });

          }
        }

        return filterOpt;
      });

    });
  }


  function onPaginate(event, page) {
    console.log(page);
    setPage(page);
    navigate(`/book?page=${page}`)
  }

  /*
  * Handle different page views and no data
  */
  let bookListView = <Card variant="outlined">Nothing to show</Card>;
  if (books.length !== 0) {
    if (view == 'list') {
      bookListView = <BookListListingComp books={books} />
    } else {
      bookListView = <BookListThumbComp books={books} />

    }
  }


  return (

    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Book Listing
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        {/* Filter list box*/}
        
        <BookFilterSideBarComp filterOptions={filterOptions} onHandleFilter={handleFilter}/>
      </Drawer>
      {/* Sorting  Box*/}

      {/* Content Box*/}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />



        <BookFilterTopBarComp onHandlePerPage={handlePerPage}
          onHandleSort={handleSort} onHandleToggleView={handleToggleView}
          onHandleSearchChange={handleSearchChange} sort={sort} 
            filters={filters} 
            perPage={perPage} 
            view={view}
            loading={props.laoding} />

        {/* {filters.map((filter) => {
          return <Chip label="Deletable" />
        })}; */}
        <Toolbar />

        {bookListView}
        <Pagination count={totalPage} page={currentPage} onChange={onPaginate} />

      </Box>
    </Box>
  );
}