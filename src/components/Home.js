import React from 'react'
import './home.css'
import Blog  from './Blog'
import Announcement from './Announcement'

 const Home = () => {
  return (
    <>

       <h1 className='devs'>
           <span className="word">Dev<span className="superscript">'s</span> </span>
           <span className="word">Club</span>
           </h1>
           <div className='ccr'>
             <p >CODE.. COFFEE.. REPEAT....</p>
           </div>
           <section className="video">
  <video loop autoPlay muted  src="https://devsrec.club/assets/Devs_Website_Intro.webm" />
</section>
     
     <section>
      <h1>Blogs</h1>
     </section>

       <Blog/>
       <br></br>
       <Announcement/>
    </>
  )
}

export default Home;