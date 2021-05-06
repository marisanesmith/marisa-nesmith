import React from 'react';
import "./style.css";
import PortfolioCard from '../../components/PortfolioCard';
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";



const PortfolioProjects = [
    {
        image: "./images/weather-dash.png",
        title: "Weather Dashboard",
        description: "This weather dashboard allows users to enter in a city of their choice to gather the information about the current weather, as well as, the 5 day weather forecast.",
        live_url: "https://marisanesmith.github.io/Weather_Dashboard/",
        buttonName: "Discover Weather"
    },
    {
        image: "./images/trivia-game.png",
        title: "Trivia Game",
        description: "This fun and interactive trivia game challenges users to see if they know some JavaScript basics. Give it a go and see how much you know!",
        live_url: "https://marisanesmith.github.io/Trivia_Game/",
        buttonName: "Play the Game"
    }
]


function Portfolio() {
    return (
        <main>
            <div className="mb-5"><h2>My Latest Projects</h2></div>
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="card-body">
                        {PortfolioProjects.map((item) => (
                            <PortfolioCard project={item} />
                        
                        ))}
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Portfolio