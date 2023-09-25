import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([]);
  // const [postUrl, setPostUrl] = useState({})

  function addUrl(newUrl) {
    // setPostUrl(newUrl)
    // const newUrlObj = {id: newUrl.id, title: newUrl.title, short_url: newUrl.short_url, long_url: newUrl.long_url}
    // postUrls(postUrl).then(data => {
    //   setUrls([...urls, postUrl])
    // })
    postUrls(newUrl)
    setUrls([...urls, newUrl])
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
