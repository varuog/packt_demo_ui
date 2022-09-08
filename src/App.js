import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BookListingPage } from './page/bookListingPage';
import { BookDetailsPage } from './page/bookDetailsPage';
import { HomePage } from './page/homePage';
import { useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
export const axios = require('axios').default;

function App() {
  // const loadingContext = React.createContext(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    setLoading(true);
    return {
      ...config,
      headers: {
        'Accept': 'applciation/json',
        'Content-Type': 'applciation/json',
      }
    };
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    setLoading(false);
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



  return (
    <div className="App">
      <Backdrop
        sx={{ color: '#fff', zIndex: 99999 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Routes>
        <Route path="/" element={<HomePage loading={loading} errorMessage={errorMessage} />} />
        <Route path="/book" element={<BookListingPage loading={loading} errorMessage={errorMessage} />} />
        <Route path="/book/{id}" element={<BookDetailsPage loading={loading} errorMessage={errorMessage} />} />
      </Routes>
    </div>
  );
}

export default App;
