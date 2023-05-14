import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceItem({item}) {
  // console.log('S-Item props', props);
  return (
    <>
      <Link to={`/service/${item.id}`} className="article__title"><li>{item.name}</li></Link>
    </>
  )
}
