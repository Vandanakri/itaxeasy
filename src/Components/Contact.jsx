import React from "react";

function Contact() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container flex footer-mq">
          <div className="flex-25">
            <h4>ItaxEasy</h4>
            <address>A108, Adam Street, New York,</address>
            <div class="font">
              <span class="bold">Email</span>
              <a href="mailto:contact@example.com">contact@example.com</a>
            </div>
            <div class="font">
              <span class="bold">Phone</span>
              <a href="tel:+91-9389732668">+91-1234 5678 90</a>
            </div>
          </div>
          <div class="flex-20">
            <h6>Useful Links</h6>
            <div>
              <ul class="useful">
                <li><a href="#"><i class="fas fa-chevron-right"></i>Home</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>About Us</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>Services</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>Terms of services</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div class="flex-20">
            <h6>Our Services</h6>
            <div>
              <ul class="useful">
                <li><a href="#"><i class="fas fa-chevron-right"></i>Web Design</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>Web Development</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>Product Management</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>Marketing</a></li>
                <li><a href="#"><i class="fas fa-chevron-right"></i>Graphic Design</a></li>
              </ul>
            </div>
          </div>

          <div class="flex-25">
            <h6>Join Our Newsletter</h6>
            <p class="news">
              Lorem ipsum dolor sit amet consectetur adipisil elit. Officia
              facere in distinctio.
            </p>
            <div class="newsbox">
              <div class="subscribe">
                <a href="#">subscribe</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="container">
        <div class="footer-bottom flex flex-cntr">

          <div class="mar">
            <small>&copy; Copyright <b>itaxeasy</b> All Rights Reserved </small>
          </div>

          <div class="footer-nav">
            <ul class="flex">
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-skype"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
          <a class="top" href="#"><i class="fas fa-chevron-up"></i></a>
        </div>
      </div>


    </footer>
  );
}

export default Contact;
