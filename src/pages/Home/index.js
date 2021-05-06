import React from 'react';
import "./style.css";
import { Button } from "@material-ui/core";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import 'font-awesome/css/font-awesome.min.css';



function Home() {
    return (
        <body className="color">
        <div className="container bg-white p-5 about">
            <h2 className="pt-3 mb-5"> About Me </h2>
            <hr/>
        <div className="row">
            <div className="clearfix px-3">
            <img id="bio-image" src='./images/cambodia.jpg' className="float-left" alt=" Girl walking in front of an ornate temple with gold decor in Cambodia"/>
            <p> Hello! My name is Marisa NeSmith and I am a Registered Dental Hygienist, Travel Blooger,
                Photographer and Full Stack Web Development student through the University of Central Florida. </p>
            <p> I have been practicing dental hygiene for 13 years with experience working in Florida, North Carolina and
                on a military base in Italy. I am a skilled clinician providing periodontal services to my patients in order
                to help maintain their gingival health.</p>
            <p>Additionally, I am an avid traveler, blogger and photographer. I lived in Italy for six years where I was
                able to visit numerous countries in Europe, Asia and Africa. It was then that I launched my blog 'This
                World Traveled' where I document travel tips and guides from my own experiences. Then, in 2019, I left the
                United States after being home for a year to backpack through South East Asia.</p>
            <p>It was during my 1.5 years in Asia where I became interested in re-designing my website to create a
                customized look. I began to learn the basics of HTML and CSS while yearning to learn more. Once I came back
                to the US in Sept 2020 I found the UCF Full Stack Web Developer Bootcamp and decided that this was the
                perfect fit for me. I am looking forward to a future career in web development which will challenge my mind
                and allow me to live a life that I desire.</p>
        </div>
        {/* <div className="row"> 
            <div className="col-3 text-center">
                <a className="btn btn-color" href="https://www.instagram.com/thisworldtraveled" target="_blank" className="btn text-white mb-4">Instagram</a>
            </div>
            <div className="col-3 text-center">
                <a className="btn btn-color" href="https://www.linkedin.com/in/marisa-nesmith" target="_blank" className="btn text-white mb-4">linkedin</a>
            </div>
            <div className="col-3 text-center">
                <a className="btn btn-color" href="https://github.com/marisanesmith" target="_blank" className="btn text-white mb-4">Github</a>
            </div>
            <div className="col-3 text-center">
                <a className="btn btn-color" href="https://www.thisworldtraveled.com" target="_blank" className="btn text-white mb-4">Travel Blog</a>
            </div>
        </div> */}
        </div>
    
    </div>
    </body>
    )
}

export default Home