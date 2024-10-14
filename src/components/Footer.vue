<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-links">
                <h3>Quick Links</h3>
                <router-link to="/" class="footer-link">Home</router-link>
                <router-link to="/about" class="footer-link">About Us</router-link>
                <router-link to="/booking" class="footer-link">Book Now</router-link>
                <router-link to="/faq" class="footer-link">FAQ</router-link>
                <router-link to="/terms" class="footer-link">Terms and Conditions</router-link>
            </div>
            <div class="footer-contact">
                <h3>Contact Us</h3>
                <p>Jl. Gatot Subroto No. 72, Pancoran, Jakarta Selatan, 12780</p>
                <p>Email: <a href="mailto:info@pancoransoccerfield.com">info@pancoransoccerfield.com</a></p>
                <p>Phone: <a href="tel:+62123456789">+62 123 456 789</a></p>
            </div>
            <div class="footer-social">
                <h3>Manage By</h3>
                <img src="@/assets/PSFGroupLogo.png" alt="PSF Group" class="full-size-logo" />
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2022 Pancoran Soccer Field. All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #005f73;
    color: white;
    padding: 2rem 1rem;
    text-align: center;
}

.footer-content {
    display: flex;
    /* Change to flexbox */
    flex-direction: row;
    /* Set to row for horizontal alignment */
    justify-content: center;
    /* Center the content */
    align-items: flex-start;
    /* Align items at the start */
    margin-bottom: 1rem;
    flex-wrap: wrap;
    /* Allow wrapping to maintain responsiveness */
}

.footer-links,
.footer-contact,
.footer-social {
    margin: 0 1rem;
    /* Add margin for spacing between sections */
    flex: 1;
    /* Allow sections to grow and shrink equally */
    min-width: 200px;
    /* Set a minimum width for better responsiveness */
}

.footer-links {
    margin-right: 2rem;
}

.full-size-logo {
    width: 50%;
    /* Make the image take full width */
    height: auto;
    /* Maintain aspect ratio */
}

.footer-link {
    color: white;
    /* Change link color to white */
    margin: 0.5rem 0;
    /* Add margin to top and bottom of links */
    text-decoration: none;
    /* Remove underline */
    transition: color 0.3s ease;
    margin-right: 1rem;
}

/* Ensure all anchor tags within footer have white color */
.footer a {
    color: white;
    /* Set font color for links to white */
}

.footer-link:hover {
    color: #4CAF50;
    /* Change color on hover */
}

.footer-bottom {
    font-size: 0.9rem;
    color: #bbb;
    /* Lighter color for copyright */
}
</style>
