import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BookListingPage } from './page/bookListingPage';
import { BookDetailsPage } from './page/bookDetailsPage';
import { HomePage } from './page/homePage';
import { useState } from 'react';
import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material';
export const axios = require('axios').default;

function App() {
  // const loadingContext = React.createContext(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [showError, setShowError] = useState(false);

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
    console.log(error.response.data);
    if (error.response.data) {
      setErrorMessage(error.response.data.message);
      setShowError(true);
      setLoading(false);

    }
    return Promise.reject(error);
  });


  function handleOnclose() {
    setShowError(false);
  }

  return (
    <div className="App">
      <Backdrop
        sx={{ color: '#fff', zIndex: 99999 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={showError} autoHideDuration={6000} onClose={handleOnclose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>

      <Routes>
        <Route path="/" element={<HomePage loading={loading} errorMessage={errorMessage} />} />
        <Route path="/book" element={<BookListingPage loading={loading} errorMessage={errorMessage} />} />
        <Route path="/book/:book" element={<BookDetailsPage loading={loading} errorMessage={errorMessage} />} />
      </Routes>
    </div>
  );
}

export default App;
