import "./home.css"
import img from "../../../resources/pw-thumb.jpg"
import img1 from "../../../resources/img1.jpg"
import img2 from "../../../resources/img2.jpg"
import Footer from "../../Components/footer/Footer"
import  {  useState } from 'react';
import BlogItem from "./BlogItem"
import Header from "../../Components/header/Header"

export default function Home() {
  const [mainPostVisible, setMainPostVisible] = useState(false);
  const [secPostsVisible, setSecPostsVisible] = useState(false);
  const [hiddenSectionVisible, setHiddenSectionVisible] = useState(false);


  


  return (
    <div className="home">
      <Header/>

      <svg  width="1722" height="208" viewBox="0 0 1721.8 207.6">
        <path d="M0.1,2.5h128.5v34.8H37.8v46.4h73.1v34.8H37.8v87H0.1V2.5z M158.7,2.5h73.9c19.7,0,34.9,5.3,45.5,16 c10.8,10.4,16.2,24.4,16.2,41.8c0,13.5-3.3,25.1-9.9,34.8c-6.6,9.5-16,16-28.1,19.7l56.3,90.8h-42.1l-54.5-87.6h-19.7v87.6h-37.7 V2.5z M232.9,83.1c7.3,0,13.1-1.8,17.4-5.5c4.3-3.7,6.4-9.5,6.4-17.4s-2.1-13.7-6.4-17.4c-4.3-3.7-10.1-5.5-17.4-5.5h-36.5v45.8 H232.9z M333.4,2.5h125.6v34.8h-87.9v42.6h70.5v34.8h-70.5v56h90.8v34.8H333.4V2.5z M550.7,207.8c-12,0-22.9-2.5-32.8-7.5 c-9.7-5-17.8-11.9-24.4-20.6c-6.4-8.7-10.6-18.3-12.8-28.7l30.5-19.1c3.1,12.4,7.9,22.3,14.5,29.9c6.8,7.5,15.4,11.3,25.8,11.3 c7.9,0,14.3-1.9,19.1-5.8c4.8-4.1,7.2-10.1,7.2-18.3c0-5-1.6-9.5-4.9-13.3c-3.3-3.9-7.4-7.2-12.5-10.2c-4.8-2.9-11.8-6.6-20.9-11 l-8.4-4.1c-11.6-5.8-20.9-13-27.8-21.8c-7-8.9-10.4-20.2-10.4-33.9c0-10.2,2.3-19.5,7-27.8c4.8-8.3,11.5-14.8,20-19.4 c8.7-4.8,18.6-7.2,29.6-7.2c28,0,47.2,12.3,57.4,36.8l-30.5,19.4c-5-14.3-14-21.5-27-21.5c-5.6,0-10.4,1.8-14.5,5.5 c-4.1,3.5-6.1,7.8-6.1,13s1.7,9.9,5.2,13.9c3.7,3.9,8,7.2,13,10.2c5.2,2.7,12.7,6.3,22.3,10.7c9.5,4.4,17.4,9,23.8,13.6 c6.6,4.6,11.9,10.7,15.9,18.3c4.3,7.3,6.4,16.3,6.4,27c0,12.2-2.8,22.9-8.4,32.2c-5.4,9.1-13,16.1-22.9,21.2 C574.5,205.4,563.3,207.8,550.7,207.8z M647.1,2.5h37.7v77.1H766V2.5h37.7v203H766v-91.1h-81.2v91.1h-37.7V2.5z M918.6,2.5h76.6 c20.7,0,36.4,5.7,47.3,17.1c10.8,11.2,16.2,26.1,16.2,44.7s-5.4,33.5-16.2,45c-10.8,11.2-26.6,16.8-47.3,16.8h-38.9v79.5h-37.7V2.5 z M993.7,91.2c8.5,0,15.1-2.2,19.7-6.7s7-11.2,7-20.3s-2.3-15.9-7-20.3s-11.2-6.7-19.7-6.7h-37.4v53.9H993.7z M1173.5,207.8 c-17.6,0-33.6-3.9-48.1-11.6s-26.1-19.3-34.8-34.8c-8.5-15.7-12.8-34.8-12.8-57.4s4.2-41.7,12.8-57.1c8.7-15.7,20.3-27.4,34.8-35.1 c14.5-7.7,30.5-11.6,48.1-11.6c17.6,0,33.6,3.9,48.1,11.6c14.5,7.7,26,19.4,34.5,35.1c8.7,15.5,13.1,34.5,13.1,57.1 s-4.3,41.8-13.1,57.4c-8.5,15.5-20,27.1-34.5,34.8S1191.1,207.8,1173.5,207.8z M1173.5,173c10.6,0,20.2-2.4,28.7-7.2 c8.7-5,15.7-12.7,20.9-22.9c5.2-10.4,7.8-23.4,7.8-38.9c0-15.5-2.6-28.3-7.8-38.6c-5.2-10.4-12.2-18.1-20.9-22.9 c-8.5-5-18.1-7.5-28.7-7.5c-10.6,0-20.3,2.5-29,7.5c-8.5,4.8-15.4,12.5-20.6,22.9c-5.2,10.2-7.8,23.1-7.8,38.6 c0,15.5,2.6,28.4,7.8,38.9c5.2,10.2,12.1,17.9,20.6,22.9C1153.2,170.6,1162.8,173,1173.5,173z M1356.5,207.8 c-12,0-22.9-2.5-32.8-7.5c-9.7-5-17.8-11.9-24.4-20.6c-6.4-8.7-10.6-18.3-12.8-28.7l30.5-19.1c3.1,12.4,7.9,22.3,14.5,29.9 c6.8,7.5,15.4,11.3,25.8,11.3c7.9,0,14.3-1.9,19.1-5.8c4.8-4.1,7.2-10.1,7.2-18.3c0-5-1.7-9.5-4.9-13.3c-3.3-3.9-7.5-7.2-12.5-10.2 c-4.8-2.9-11.8-6.6-20.9-11l-8.4-4.1c-11.6-5.8-20.9-13-27.8-21.8c-7-8.9-10.4-20.2-10.4-33.9c0-10.2,2.3-19.5,7-27.8 c4.8-8.3,11.5-14.8,20-19.4c8.7-4.8,18.6-7.2,29.6-7.2c28,0,47.2,12.3,57.4,36.8l-30.4,19.4c-5-14.3-14-21.5-27-21.5 c-5.6,0-10.4,1.8-14.5,5.5c-4.1,3.5-6.1,7.8-6.1,13s1.7,9.9,5.2,13.9c3.7,3.9,8,7.2,13.1,10.2c5.2,2.7,12.7,6.3,22.3,10.7 c9.5,4.4,17.4,9,23.8,13.6c6.6,4.6,11.9,10.7,16,18.3c4.2,7.3,6.4,16.3,6.4,27c0,12.2-2.8,22.9-8.4,32.2 c-5.4,9.1-13.1,16.1-22.9,21.2C1380.3,205.4,1369.1,207.8,1356.5,207.8z M1481.6,37.3H1425V2.5h150.8v34.8h-56.6v168.2h-37.7V37.3z  M1656.9,207.8c-12,0-22.9-2.5-32.8-7.5c-9.7-5-17.8-11.9-24.4-20.6c-6.4-8.7-10.6-18.3-12.8-28.7l30.5-19.1 c3.1,12.4,7.9,22.3,14.5,29.9c6.8,7.5,15.4,11.3,25.8,11.3c7.9,0,14.3-1.9,19.1-5.8c4.8-4.1,7.2-10.1,7.2-18.3 c0-5-1.6-9.5-4.9-13.3c-3.3-3.9-7.4-7.2-12.5-10.2c-4.8-2.9-11.8-6.6-20.9-11l-8.4-4.1c-11.6-5.8-20.9-13-27.8-21.8 c-7-8.9-10.4-20.2-10.4-33.9c0-10.2,2.3-19.5,7-27.8c4.8-8.3,11.5-14.8,20-19.4c8.7-4.8,18.6-7.2,29.6-7.2 c28,0,47.2,12.3,57.4,36.8l-30.4,19.4c-5-14.3-14-21.5-27-21.5c-5.6,0-10.4,1.8-14.5,5.5c-4.1,3.5-6.1,7.8-6.1,13s1.7,9.9,5.2,13.9 c3.7,3.9,8,7.2,13.1,10.2c5.2,2.7,12.7,6.3,22.3,10.7c9.5,4.4,17.4,9,23.8,13.6c6.6,4.6,11.9,10.7,15.9,18.3 c4.3,7.3,6.4,16.3,6.4,27c0,12.2-2.8,22.9-8.4,32.2c-5.4,9.1-13.1,16.1-22.9,21.2C1680.7,205.4,1669.5,207.8,1656.9,207.8z"></path>
      </svg>
      
      {/* <section ref={ref} className={`main-post  ${isVisible ? 'show' : 'hidden'}`}>
      </section> */}
      <BlogItem isVisible={setMainPostVisible}>
        <section className={`main-post hidden ${mainPostVisible ? 'show' : ''}`}>
          <div className="info">
            <span className="date">Aug 3, 2023</span>
            <h1 className="title">Pasqua Wines by Adoratorio Studio wins SOTM June 2023</h1>
            <span className="author"> Adoratorio Studio</span>
            <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
            <span className="read">Read Article</span>
          </div>
          <img src= {img2}  alt="" />
        </section>
      </BlogItem>

      <BlogItem isVisible={setSecPostsVisible}>
        <section className={`sec-posts hidden ${secPostsVisible ? 'show' : ''}`}>
            <div className="best-post">
              <img src= {img}  alt="" />
              <div className="content">
                <h1 className="title">Vote for Site of the Month July 2023! </h1>
                <span className="author"> Adoratorio Studio</span>
                <br />
                <span className="date">Aug 3, 2023</span>
                <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
                <span className="read">Read Article</span>
              </div>
            </div>
            <div className="posts">
              <div className="post">
                <img src= {img2} className="img2"  alt=""  />
                <h4 className="title">Bownds Ranches Property Site </h4>
                <p className="date">Aug 3, 2023</p>
                <p className="author"> Adoratorio Studio</p>
                <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
                <p className="read">Read Article</p>
              </div>
              <div className="post">
                <img src= {img1} className="img2"  alt=""  />
                <h4 className="title">Bownds Ranches Property Site </h4>
                <p className="date">Aug 3, 2023</p>
                <p className="author"> Adoratorio Studio</p>
                <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
                <p className="read">Read Article</p>
              </div>
            </div>
        </section>
      </BlogItem>
      {/* <section  className={`${isVisible ? 'show' : 'hidden'}`}>
        <div  className= "sec-posts">
        </div>
      </section> */}

      

      <div className="banner">
        <div className="slides">
          <strong className="moving-text">-FRESH NEWS & ARTICLES-</strong>
          <strong className="moving-text">FRESH NEWS & ARTICLES</strong>
        </div>
        <div className="slides1">
          <strong className="moving-text">-FRESH NEWS & ARTICLES-</strong>
          <strong className="moving-text">FRESH NEWS & ARTICLES</strong>
        </div>
      </div>

      <BlogItem isVisible={setHiddenSectionVisible}>
        <section className={`hidden ${hiddenSectionVisible ? 'show' : ''}`}>
          <div className="left-side">

            <div className="post">
                <span className="date">Aug 3, 2023</span>
                <h1 className="title">Vote for Site of the Month July 2023! </h1>
                <img src= {img1}  alt="" />
                <span className="author"> Adoratorio Studio</span>
                <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
                <span className="read">Read Article</span>
            </div>
            <div className="post">
                <span className="date">Aug 3, 2023</span>
                <h1 className="title">Vote for Site of the Month July 2023! </h1>
                <img src= {img1}  alt="" />
                <span className="author"> Adoratorio Studio</span>
                <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
                <span className="read">Read Article</span>
            </div>

          </div>
          <div className="right-side">

            <div className="post">
                <span className="date">Aug 3, 2023</span>
                <h1 className="title">Vote for Site of the Month July 2023! </h1>
                <img src= {img1}  alt="" />
                <span className="author"> Adoratorio Studio</span>
                <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
                <span className="read">Read Article</span>
            </div>
            <div className="post">
                <span className="date">Aug 3, 2023</span>
                <h1 className="title">Vote for Site of the Month July 2023! </h1>
                <img src= {img1}  alt="" />
                <span className="author"> Adoratorio Studio</span>
                <p className="desc">In a world entangled by heritage, paralyzed by tradition, Pasqua is “The House of the Unconventional”.</p>
                <span className="read">Read Article</span>
            </div>
            
          </div>
        </section>
      </BlogItem>

      {/* <section ref={ref} className= {` ${isVisible ? 'show' : 'hidden'}`}>
      </section> */}

      <Footer/>

    </div>
  )
}
