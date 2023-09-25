import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);

  function addUrl(newUrl) {
    postUrls(newUrl)
    .then(res => {
      console.log('postResponse', res)
      setUrls([...urls, res])
    })
  }

  useEffect(() => {
    getUrls()
    .then(data => setUrls(data.urls))
  }, [])

  console.log(urls)

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addUrl={addUrl}/>
      </header>

      <UrlContainer urls={urls}/>
    </main>
  );
}

export default App;
