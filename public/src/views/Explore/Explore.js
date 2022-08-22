import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostComponent from '../../components/Explore/PostComponent';
import TrendingComponent from '../../components/Explore/TrendingComponent';

export default function Explore() {
  let offset = 0;
  const [explore, setExplore] = useState([]);
  const loadMoreExplore = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then(({ data }) => {
        const newExplore = [];
        data.results.forEach((p) => newExplore.push(p.name));
        setExplore((oldExplore) => [...oldExplore, ...newExplore]);
      });
    offset += 10;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMoreExplore();
    }
  };

  useEffect(() => {
    loadMoreExplore();
    window.addEventListener('scroll', handleScroll);
  }, []);

  const tags = [
    {
      tag: '#NgodingBareng',
      count: '12k',
    },
    {
      tag: 'ReactJs',
      count: '1k',
    },
    {
      tag: 'Developer',
      count: '100',
    },
  ];

  return (
    <div className='pt-20'>
      <div className='lg:grid grid-cols-3 gap-4'>
        <TrendingComponent data={tags} />
        <div>
          {explore.map((item, i) => (
            <PostComponent key={i} name={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
