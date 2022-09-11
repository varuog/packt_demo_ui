// import {axios} from '../config/axios.config';
export const axios = require('axios').default;
const BASE_URL = 'http://localhost:8000';

export function fetch(filter, sort, page, perPage) {
    // console.log(filter);
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
    if(sort == 'release-year') {
        sortParam['sort[release_year]']='DESC';
    } else if (sort == 'recent-published') {
        sortParam['sort[publish_year]']='DESC';
    }

    // console.log(filterParam);
    // console.log(sortParam);

    return axios.get(BASE_URL + '/api/book'
        , {
            params: {
                page: page,
                perPage: perPage,
                ...filterParam,
                ...sortParam
                
            }
        });
}


export function fetchFilterOptions() {
    return axios.get(BASE_URL + '/api/book-search-options');
}



export function fetchBook(bookid) {
    return axios.get(`http://localhost:8000/api/book/${bookid}`);
}