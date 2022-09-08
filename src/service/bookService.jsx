// import {axios} from '../config/axios.config';
export const axios = require('axios').default;

export function fetch(filter, sort, page, perPage) {
    console.log(filter);
    //Handel filters
    let filterParam=[];
    let sortParam=[];

    for (const filterObj of filter) {
        if(filterObj.name == 'title') {
            filterParam[`filter[${filterObj.name}]`] = filterObj.value[0];
        } else {
            filterParam[`filter[${filterObj.name}]`] = filterObj.value;
        }
    }
    
    //Handle sorts
    if(sort == 'popular') {
        sortParam['popular']='DESC';
    } else if (sort == 'recent-published') {
        sortParam['publish_year']='DESC';
    }

    console.log(filterParam);

    return axios.get('http://localhost:8000/api/book'
        , {
            params: {
                page: page,
                sort: [sort],
                perPage: perPage,
                ...filterParam
                
            }
        });
}


export function fetchFilterOptions() {
    return axios.get('http://localhost:8000/api/book-search-options');
}
