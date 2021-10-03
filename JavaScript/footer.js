class footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
        <section class="container">
            <section class="row">
                <section class="footer-col">
                    <strong>Company</strong>
                    <ul>
                        <br>
                        <li><a href="./About/AboutPage.html">About Us</a></li>
                        <li><a href="./CharacterBlogs/ImagesPage.html">Our Poetry Story</a></li>
                    </ul>
                </section> 
                <section class="footer-col">
                    <strong> Reach out for help</strong>
                    <ul>
                        <br>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Buy poetry here</a></li>
                        <li><a href="#">Payment options</a></li>
                    </ul>
                   
                </section>
                <section class="footer-col">
                    <strong> Online Shop</strong>
                    <ul >
                        <br>
                        <li><a href="#">Poetry Book</a></li>
                        <li><a href="#">Poet's Blog Diaries</a></li>
                        <li><a href="#">Photograhs</a></li>
                    </ul>
                </section>
                <section class="footer-col">
                <strong>Follow Us</strong>
                
                <section class="social_links">
                    <br>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </section>
        </section>
    </footer>
        `
    }   
    
}customElements.define('my-footer', footer)