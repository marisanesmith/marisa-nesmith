import React from 'react';
import './style.css';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    button: {
        backgroundColor: "#766c5b",
        color: "white",
        padding: ".8rem",
        borderRadius: "8px",
        textAlign: "center",
        margin: "auto",
        marginBottom: "25px"
    },
    icons: {
        marginRight: "25px",
        marginLeft: "25px",
        color: "#766c5b",
        '&:hover': {
            color: "#bbad94",
        }
        
    },
})

function Contact() {
    const styles = useStyles();
    return (
        <main>
            <h2>My Contact Information</h2>
            <h3 class="mt-5"> Email Address: <a href="marisa@thisworldtraveled.com">marisa@thisworldtraveled.com</a></h3>
            <h3 class="mb-5"> Phone Number: <a href="tel:3218308553">(321)830-8553</a></h3>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="underline"> Resume </h2>
                        <img class="card-img-top mt-5 mb-5" src="./images/marisa-resume.jpg" alt="marisa nesmith resume"/>
                    </div>
                    <div class="col">
                        <h2 class="underline"> Media Kit</h2>
                        <img class="card-img-top mt-5 mb-5" src="./images/This World Traveled Media Kit.jpg" alt="this world traveled media kit"/>
                    </div>
                </div>
            </div>

            <div id="contact" className="container p-4 mb-5">
                    <h2>Work With Me</h2>
                    
                <div class="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div class="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div class="mb-3">
                    <label for="msg-box" className="form-label">Message</label>
                    <textarea class="form-control" id="msg-box" rows="3"></textarea>
                </div>
                    <button class={styles.button}>Submit</button>
            </div>
        </main>
        
    )
}

export default Contact