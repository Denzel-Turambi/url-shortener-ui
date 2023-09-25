import React from 'react';
import './UrlContainer.css';
import UrlCard from '../UrlCard/UrlCard';

const UrlContainer = props => {
  console.log(props.urls)
  const urlEls = props.urls.map(url => {
    return (
      <UrlCard 
        title={url.title}
        short_url={url.short_url}
        long_url={url.long_url}
        id={url.id}
        key={url.id}
      />
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
