import React from 'react';
import './style.css';

function Contact() {
    return (
        <div>
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

            <div id="contact" class="container p-4 mb-5">
                    <h2>Work With Me</h2>
                    
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name"/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email"/>
                </div>
                <div class="mb-3">
                    <label for="msg-box" class="form-label">Message</label>
                    <textarea class="form-control" id="msg-box" rows="3"></textarea>
                </div>
                    <button class="btn btn-color mb-3">Submit</button>
            </div>
        </div>
        
    )
}

export default Contact