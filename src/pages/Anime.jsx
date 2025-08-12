import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { AnimeText } from '../data/anime'

const Anime = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  },[])

  const animePageClass = loading ? 'isloading' : 'isloaded';

  return (
    <Main>
      <section id='animePage' className={animePageClass}>
        <h2>📀추천 애니메이션 페이지 입니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={AnimeText}/>
        </div>
      </section>
    </Main>
  )
}

export default Anime