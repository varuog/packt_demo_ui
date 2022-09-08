import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";

export function BookFilterSideBarComp(props) {


    return (
        <FormGroup>
        {props.filterOptions.map((filter) => {
          return <Accordion key={filter.filter}>
            <AccordionSummary
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {filter.displayName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {filter.data.map((filterValue) => {
                return <FormControlLabel
                  key={filterValue.name}
                  control={
                    <Checkbox
                      onChange={(event) => props.onHandleFilter(event, filter.filter, filterValue.name)}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label={`${filterValue.name} (${filterValue.total})`}
                />
              })}
            </AccordionDetails>
          </Accordion>
        })}

      </FormGroup>
    );
}