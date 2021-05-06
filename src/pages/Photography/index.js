import React from 'react';
import PhotoCard from "../../components/PhotoCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        backgroundColor: "#766c5b",
        color: "white",
        '&:hover': {
            backgroundColor: "#bbad94",
            color: "white",
            textDecoration: "none"
        },
        padding: ".8rem",
        borderRadius: "8px",
        textAlign: "center",
        margin: "auto",
        marginBottom: "25px"
    },
    links: {
        marginLeft: "10px",
        color: "#766c5b",
        '&:hover': {
            color: "#bbad94",
        }
        
    },
    bodyColor: {
        backgroundColor: "#efe9db",
    }
})

const PhotoImg = [
    {
        image: "./images/philippines.jpg",
        title: "Entalula Island, Philippines",
        alt: "Entalula island in the Philippines with turqouise water and a small stretch of white sand beach that is surrounded by palm trees."
    },
    {
        image: "./images/philippines.jpg",
        alt: "Over the water villas on stilts in the Maldives with an orange and pink sky during sunset"
    },
]

function Photography() {
    const styles = useStyles();
    return (
        <main>
            <div id="portfolio" class="container p-5 mb-5 bg-white">
                <h2 className="mb-5"> My Photography </h2>
                <hr/>
                <div class="row">
                    <div> 
                        {PhotoImg.map((item) => (
                        <PhotoCard project={item} />
                    ))} </div>
                </div>
                
            </div>
        </main>
    )
}

export default Photography
