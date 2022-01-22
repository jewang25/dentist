import './App.css';
import ChineseSidebar from './components/chineseSidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToothbrushGallery from './components/toothbrushGallery';
import chineseContact from './Chinese/chineseContact';
import { React } from 'react';
import { PatientEducation, Dentistry } from './Chinese/chineseDental';
import Gallery from './English/englishPhotos';
import chineseMainPage from './Chinese/cWelcome';
import YoutubeEmbed from './Chinese/YoutubeEmbed';
import { useState } from "react";
import galleryTitle from './components/img/tupianliuliangb.gif';
import videoTitle from './components/img/videogb.gif'

const ChineseApp = () => {

  //sets slide number for toothbrush gallery
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="welcome">

      <div className="sidebar">
        <ChineseSidebar onClick={setSlideIndex} />
      </div>

      <div className="siteBody">
        <Switch>
          <Route path="/ch/contact" component={chineseContact}></Route>
          <Route path="/ch/dentalInfo/education" component={PatientEducation} />
          <Route path="/ch/dentalInfo/dentistry" component={Dentistry} />
          <Route path="/ch/photos" >
            <img className="photoTitle" src={galleryTitle}></img>
            <Gallery></Gallery>
          </Route>
          <Route path="/ch/toothbrush" >
            <ToothbrushGallery slideIndex={slideIndex} />
          </Route>
          <Route path="/ch/teethbrushvideo" >
            <img className="photoTitle" src={videoTitle}></img>
            <YoutubeEmbed embedId="DuYX6rSrHTg"></YoutubeEmbed>
          </Route>
          <Route path="/ch/teethbrushvideo2" >
            <img className="photoTitle" src={videoTitle}></img>
            <YoutubeEmbed embedId="BTlD_KGcka4"></YoutubeEmbed>
          </Route>
          <Route path="/ch" component={chineseMainPage}>
          </Route>
          <Route path="/">
            <chineseMainPage></chineseMainPage>
          </Route>
        </Switch>
      </div>
    </div >
  );
}



export default ChineseApp;