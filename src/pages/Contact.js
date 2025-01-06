import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <main class="content">
      <div class="container about_content shadow">
            <div class="contact">
                <h3 class="heading6">Let's Get in Touch</h3>
                <p>
                You can call me, email me directly or connect with me through my social networks.
                </p>
                <p>
                    (+40) 744122222<br/>
                    <a href="mailto:hello@adipurdila.com">hello@adipurdila.com</a>               
                </p>
                <ul class="social_links">
                    <li><a href=""><img src="images/twitter.png" alt="twitter"/></a></li>
                    <li><a href=""><img src="images/facebook.png" alt="facebook"/></a></li>
                    <li><a href=""><img src="images/dribble.png" alt="dribble"/></a></li>
                </ul>                                
            </div>
            <hr class="double"/>
            <div class="form">
                <h3 class="heading6">Need a Quote?</h3>
                <p>
                    Use the form below. All fields are required.
                </p>
                <div class="contact_form">
                    <form action="">
                        <p class="field">
                            <label for="username">Full Name:</label>
                            <input type="text" id="username" placeholder="Your Name"/>
                        </p>
                        <p class="field">
                            <label for="useremail">Email Address:</label>
                            <input type="text" id="useremail" placeholder="Your Email"/>
                        </p>
                        <p class="field">
                            <label for="userphone">Phone Number:</label>
                            <input type="text" id="userphone" placeholder="Your Phone number"/>
                        </p>
                        <p class="field">
                            <label for="project-type">Project Type:</label>
                            <select name="" id="project-type">
                                <option value="" readonly>- Select Value -</option>
                                <option value="Web">Web</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Print">Print</option>
                            </select>
                        </p>
                        <p class="field">
                            <label for="project-desc">Project Description:</label>
                            <textarea name="" id="project-desc" cols="30" rows="10" placeholder="project description"></textarea>
                        </p>
                        <p class="field">
                            <label for="budget">Available Budget:</label>
                            <input type="number" id="budget" placeholder="$0.00"/>
                        </p>
                        <p class="submit">
                            <input type="submit" class="primary-btn" value="give me a quote"/>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
