# Slicing Boven dan Plugin
Tugas 2 slicing Web dari Figma dan, tugas 3 membuat plugin Jquery

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)


[![Open In Collab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Naereen/badges)

## Features Aplication Bioven
Aplikasi ini dibangun menggunakan

- [![Badge for version for Visual Studio Code extension naereen.makefiles-support-for-vscode](https://vsmarketplacebadge.apphb.com/version/naereen.makefiles-support-for-vscode.svg)](https://marketplace.visualstudio.com/items?itemName=naereen.makefiles-support-for-vscode) - Aplikasi ini dibangun menggunakan Code Edito Visual Studio Code, dimana saat ini banyak digunakan bagi programmer.
- Aplikasi ini berbasis web HTML.
- Aplikasi ini juga menggunakan SASS sehingga CSS secara otomatis terbentuk.
- Aplikasi ini menggunakan JQuery sebagai animasi yang sederhana.
- Aplikasi ini juga di hiasi dengan sedikit sentuhan Bootstrap.

##Structure

##HTML

<sup>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Bioven</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
	<link rel="stylesheet" href="/build/style/main.css">
</head>
<body>
	<div>
		<header>
			<div id="main-header">
				<div class="main-logo">
					<div class="main-icon-header">
						<img src="/assets/img/icon/bioven.png" alt="logo">
						<div class="main-brand">
							<label>bioven</label>
						</div>
					</div>
				</div>
				<div class="main-call">
					<div class="call-icon">
						<img src="/assets/img/icon/Icon-phone.svg" alt="call">
						<div class="call-numb">
							<small>tell with us</small>
							<h5>+123 - 568 - 4758</h5>
						</div>
					</div>
				</div>
				<div class="main-maill">
					<div class="maill-icon">
						<img src="/assets/img/icon/Icon-maill.svg" alt="maill">
						<div class="maill-adrs">
							<small>tell with us</small>
							<h5>+123 - 568 - 4758</h5>
						</div>
					</div>
				</div>
				<div class="btn-header">
					<div class="btn-org">
						<button type="button">read more<i class="bi bi-arrow-right-short"></i></button>
					</div>
				</div>
			</div>
		</header>
		<section>
			<div id="main-menu">
				<nav>
					<ul class="list-menu">
						<li class="list"><a href="#">home<i class="bi bi-plus"></i></a></li>
						<li class="list"><a href="#">about</a></li>
						<li class="list"><a href="#">pages<i class="bi bi-plus"></i></a></li>
						<li class="list"><a href="#">news<i class="bi bi-plus"></i></a></li>
						<li class="list"><a href="#">contact us</a></li>
					</ul>
					<div id="hamburger">
						<span class="bar"></span>
						<span class="bar"></span>
						<span class="bar"></span>
					</div>
				</nav>
			</div>
			<div id="btn-search">
				<a class="btn" href=""><i class="bi bi-search"></i></a>
			</div>
			<div id="main-media-social">
				<a class="btn" href="#"><i class="bi bi-facebook"></i></a>
				<a class="btn" href="#"><i class="bi bi-twitter"></i></a>
				<a class="btn" href="#"><i class="bi bi-linkedin"></i></a>
				<a class="btn" href="#"><i class="bi bi-instagram"></i></a>
			</div>
		</section>
		<div id="content">
			<div class="slider_content">
				<div class="slider_video">
					<video poster="" autoplay muted loop>
						<source src="/assets/img/video/Clock.mp4" type="video/mp4">
					</video>
					<ul class="slider-image">
						<li class="slide-img"><img src="" alt="image"></li>
						<li class="slide-img"><img src="/assets/img/wallpaper/pexels-christian-heitz-842711.jpg" alt="image"></li>
						<li class="slide-img"><img src="/assets/img/wallpaper/pexels-johannes-plenio-1435075.jpg" alt="image"></li>
						<li class="slide-img"><img src="/assets/img/wallpaper/lion.jpg" alt="image"></li>
						<li class="slide-img"><img src="/assets/img/wallpaper/poke.jpg" alt="image"></li>
					</ul>
				</div>
			</div>
			<div class="qoute-content">
				<button type="button" class="btn-quote"><a href="#">qoute now</a><i class="bi bi-arrow-right-short"></i></button>
				<button type="button" class="btn-play"><i class="bi bi-caret-right-fill"></i></button>
			</div>
			<div class="arrow-slider">
				<i class="bi bi-arrow-left-circle"></i>
				<i class="bi bi-arrow-right-circle"></i>
			</div>
		</div>
		<div id="solution">
			<div class="text-solut">
				<h1>contact us for a solution</h1>
			</div>
			<div >
				<button>contact us <i class="bi bi-arrow-right"></i></button>
			</div>
		</div>
		<div id="content-footer">
			<div class="about-footer">
				<div class="img-footer">
					<img src="/assets/img/icon/bioven.png" alt="icon">
				</div>
				<div class="icon-footer-label">
					<span><h3>bioven</h3></span>
				</div>
				<div class="text-info">
					<h6>Present eleifend lobortis vehicula.
						Nunc a Justo Facilitis,
						trisque ipsum no, fringila massa.
						Maecenas
					</h6>
				</div>
				<div class="medsos-footer">
					<i class="bi bi-facebook"></i>
					<i class="bi bi-twitter"></i>
					<i class="bi bi-instagram"></i>
					<i class="bi bi-linkedin"></i>
				</div>
			</div>
			<div class="page-footer">
				<h3>pages links</h3>
				<ul class="menu-left">
					<li><a href="#"><h4>abou us</h4></a></li>
					<li><a href="#"><h4>services</h4></a></li>
					<li><a href="#"><h4>portofolio</h4></a></li>
					<li><a href="#"><h4>testimonial</h4></a></li>
				</ul>
				<ul class="menu-right">
					<li><a href="#"><h4>pages</h4></a></li>
					<li><a href="#"><h4>faq</h4></a></li>
					<li><a href="#"><h4>contact us</h4></a></li>
				</ul>
			</div>
			<div class="post-footer">
				<h3>recent post</h3>
				<div class="pos-top">
					<img src="/assets/img/wallpaper/Image.png" alt="img">
					<span><h6>their business blog is full</h6></span>
				</div>
				<div class="pos-bottom">
					<img src="/assets/img/wallpaper/Image.png" alt="img">
					<span><h6>their business blog is full</h6></span>
				</div>
			</div>
			<div class="information-footer">
				<h3>information</h3>
				<div class="footer-phone">
					<img src="/assets/img/icon/callFooter.svg" alt="">
					<span><h6>+(141 - 589 - 656</h6></span>
				</div>
				<div class="footer-mail">
					<img src="/assets/img/icon/maillFooter.svg" alt="">
					<span><h6>infobioven@Gmail.Com</h6></span>
				</div>
				<div class="footer-address">
					<img src="/assets/img/icon/mapFooter.svg" alt="">
					<span><h6>Birkbeck Court, Birkbeck Rd, Londond W3 6BQ, UK</h6></span>
				</div>
			</div>
		</div>
		<footer>
			<div class="copyright">
				<h3>&copy; 2021 bioven all rights reserved</h3>
			</div>
			<div class="menu-footer">
				<ul>
					<li><a href="#">home</a></li>
					<li>|</li>
					<li><a href="#">about</a></li>
					<li>|</li>
					<li><a href="#">faqs</a></li>
					<li>|</li>
					<li><a href="#">contact</a></li>
				</ul>
			</div>
		</footer>
	</div>
	<script src="/build/main.js"></script>
	<script src="/modules/js/libraries.js"></script>
  <script src="/modules/js/cdnjquery.js"></script>
  <script src="/script.js"></script>
</body>
</html>
  
</sup>

## FORM

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bioven</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
	<link rel="stylesheet" href="/build/style/main.css">
</head>
<body>
  <div class="container-input">
    <form action="form.html" name="formValid" id="formValid">
      <div class="row">
        <input type="text" name="name" placeholder="Name" required>
      </div>
      <div class="row">
        <input type="text" name="email" placeholder="Email" required>
      </div>
      <div class="row">
        <input type="text" name="phone" placeholder="Phone" required>
      </div>
      <div class="row">
        <input type="text" name="subject" placeholder="Subject" required>
      </div>
      <div class="row">
        <textarea name="formMessage" placeholder="Message" id="" cols="30" rows="10" required></textarea>
      </div>
      <div class="text-center">
        <input type="submit" value="submit" required>
      </div>
    </form>
  </div>
  <div id="content-form">
    <div class="icon-form">
      <img src="/assets/img/icon/bioven.png" alt="icon">
      <span>bioven</span>
    </div>
    <div id="paragraf-form">
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure sapiente expedita, eos eius nemo repudiandae. Magni ipsum optio unde neque rem, mollitia sed, a quod, odit at ipsa perferendis!
      </P>
    </div>
  </div>
  <div id="footer_slider">
    <div class="foodSlides">
      <img src="/assets/img/icon/bioven.png" alt="icon">
      <span>bioven</span>
    </div>
  </div>
  <script src="/modules/js/libraries.js"></script>
  <script src="/modules/js/cdnjquery.js"></script>
  <script src="/script.js"></script>
</body>
</html>

## CSS

@import url("https://fonts.googleapis.com/css2?family=Calligraffitti&family=Open+Sans:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap");
* {
  margin: 0px;
  padding: 0px;
  font-family: "Open Sans", sans-serif;
}

header #main-header {
  position: relative;
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  width: 80%;
  height: 80px;
  left: 10%;
}
header #main-header .main-logo {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}
header #main-header .main-logo .main-brand {
  position: absolute;
  display: flex;
  color: #0A0A0B;
  text-transform: lowercase;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 35px;
  line-height: 46px;
  left: 40%;
  top: 2px;
}
header #main-header .main-call {
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 38%;
  top: 5px;
}
header #main-header .main-call .call-icon {
  position: absolute;
  top: 20px;
}
header #main-header .main-call .call-icon .call-numb {
  position: absolute;
  left: 50px;
  top: 0;
}
header #main-header .main-call .call-icon .call-numb small {
  position: absolute;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  width: 100px;
  height: 50px;
  left: 30%;
}
header #main-header .main-call .call-icon .call-numb h5 {
  position: absolute;
  font-family: "Open Sans", sans-serif;
  width: 150px;
  font-size: 14px;
  left: 48%;
  top: 18px;
}
header #main-header .main-maill {
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 60%;
  top: 5px;
}
header #main-header .main-maill .maill-icon {
  position: absolute;
  top: 20px;
}
header #main-header .main-maill .maill-icon .maill-adrs {
  position: absolute;
  position: absolute;
  left: 50px;
  top: 0;
}
header #main-header .main-maill .maill-icon .maill-adrs small {
  position: absolute;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  width: 100px;
  left: 65%;
}
header #main-header .main-maill .maill-icon .maill-adrs h5 {
  position: absolute;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  width: 120px;
  left: 65%;
  top: 18px;
}
header #main-header .btn-header {
  position: absolute;
  align-items: center;
  left: 87%;
}
header #main-header .btn-header button {
  justify-content: space-between;
  color: #FFFFFF;
  background-color: #FE8C12;
  border: none;
  text-transform: uppercase;
  font-size: 16px;
  width: 140px;
  height: 50px;
  padding: 2px;
  gap: 15px;
}
header #main-header .btn-header button .bi-arrow-right-short {
  margin: 8px;
}
header #main-header .btn-header button:hover {
  cursor: pointer;
  color: #0A0A0B;
}

#main-menu {
  position: relative;
  display: block;
  justify-content: space-between;
  align-items: center;
  background-color: #0A0A0B;
  width: 80%;
  height: 60px;
  top: 0px;
  left: 10%;
}
#main-menu nav .list-menu {
  position: absolute;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  list-style: none;
  text-transform: uppercase;
  color: #FFFFFF;
  font-size: 14px;
  left: 10px;
  top: 10px;
}
#main-menu .list {
  margin: 10px;
}
#main-menu .list a {
  color: #FFFFFF;
  text-decoration: none;
}
#main-menu .list-menu a:hover {
  cursor: pointer;
  color: #FE8C12;
}

#hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

#btn-search {
  position: absolute;
  display: flex;
  justify-content: space-between;
  right: 30%;
  top: 100px;
}
#btn-search a {
  color: #FFFFFF;
}

#btn-search a:hover {
  cursor: pointer;
  color: #FE8C12;
}

#main-media-social {
  position: absolute;
  display: flex;
  justify-content: space-between;
  right: 12%;
  top: 90px;
}
#main-media-social a {
  color: #FFFFFF;
  margin: 10px;
}

#main-media-social a:hover {
  cursor: pointer;
  color: #FE8C12;
}

#content {
  position: relative;
  width: 100%;
  height: 600px;
  top: -60px;
  z-index: -1;
}
#content .slider_content {
  position: absolute;
  width: 100%;
  height: 600px;
}
#content .slider_content .slider_video video {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 600px;
}
#content .slider_content .slider-image {
  position: absolute;
  width: 100%;
  height: 600px;
}
#content .slider_content .slider-image .slide-img {
  position: absolute;
  list-style: none;
  width: 100%;
  height: 600px;
}
#content .slider_content .slider-image .slide-img img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 600px;
}
#content .qoute-content {
  position: absolute;
  top: 70%;
  left: 10%;
}
#content .qoute-content .btn-quote {
  background-color: #FE8C12;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 11px;
  border: none;
  width: 110px;
  height: 40px;
}
#content .qoute-content .btn-quote a {
  text-decoration: none;
  color: #FFFFFF;
}
#content .qoute-content .btn-play {
  background-color: #FFFFFF;
  border: none;
  width: 40px;
  height: 40px;
  margin: 15px;
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
}
#content .qoute-content a:hover {
  cursor: pointer;
  color: #0A0A0B;
}
#content .arrow-slider {
  position: absolute;
  right: 5%;
  top: 80%;
}
#content .arrow-slider i {
  color: #FE8C12;
  font-size: 35px;
  margin: 10px;
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
}
#content .arrow-slider i:hover {
  cursor: pointer;
  background-color: #FE8C12;
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
}

#solution {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0A0A0B;
  width: 100%;
  height: 100px;
}
#solution h1 {
  position: absolute;
  color: #FFFFFF;
  text-transform: uppercase;
  align-items: center;
  font-size: 20px;
  top: 36px;
  left: 10%;
}
#solution button {
  position: absolute;
  width: 110px;
  height: 40px;
  top: 30px;
  right: 10%;
}

#content-footer {
  position: relative;
  width: 80%;
  height: 300px;
  left: 10%;
}
#content-footer .about-footer {
  position: absolute;
  width: 20%;
  top: 20%;
}
#content-footer .icon-footer-label span {
  position: absolute;
  font-size: 30px;
  top: 0px;
  left: 50px;
  color: #0A0A0B;
}
#content-footer .text-info {
  position: absolute;
  top: 110%;
  width: 200px;
  font-size: 18px;
  justify-content: left;
  text-align: justify;
}
#content-footer .medsos-footer {
  position: absolute;
  top: 270%;
  width: 200px;
}
#content-footer .medsos-footer i {
  margin: 15px;
}
#content-footer .page-footer {
  position: absolute;
  top: 20%;
  left: 25%;
}
#content-footer .page-footer h3 {
  text-transform: uppercase;
}
#content-footer .page-footer .menu-left {
  position: absolute;
  list-style: none;
  left: -15px;
  height: 130px;
  top: 40px;
  list-style: none;
}
#content-footer .page-footer .menu-left li {
  margin: 10px;
}
#content-footer .page-footer .menu-left a {
  text-decoration: none;
  font-size: 14px;
  color: #0A0A0B;
  text-transform: uppercase;
}
#content-footer .page-footer .menu-right {
  position: absolute;
  list-style: none;
  width: 120px;
  height: 100px;
  top: 40px;
  left: 100px;
}
#content-footer .page-footer .menu-right li {
  margin: 10px;
}
#content-footer .page-footer .menu-right a {
  text-decoration: none;
  font-size: 14px;
  color: #0A0A0B;
  text-transform: uppercase;
}
#content-footer .post-footer {
  position: absolute;
  top: 20%;
  left: 50%;
}
#content-footer .post-footer h3 {
  text-transform: uppercase;
}
#content-footer .post-footer .pos-top {
  position: absolute;
  top: 40px;
}
#content-footer .post-footer .pos-top img {
  width: 50px;
}
#content-footer .post-footer .pos-top span {
  position: absolute;
  text-transform: uppercase;
  color: #0A0A0B;
  left: 70px;
  width: 120px;
}
#content-footer .post-footer .pos-bottom {
  position: absolute;
  width: 120px;
  height: 100px;
  top: 130px;
}
#content-footer .post-footer .pos-bottom img {
  width: 50px;
}
#content-footer .post-footer .pos-bottom span {
  position: absolute;
  text-transform: uppercase;
  color: #0A0A0B;
  left: 70px;
  width: 120px;
}
#content-footer .information-footer {
  position: absolute;
  text-transform: uppercase;
  top: 20%;
  right: 10%;
}
#content-footer .information-footer .footer-phone {
  position: absolute;
  top: 40px;
}
#content-footer .information-footer .footer-phone span {
  position: absolute;
  color: #0A0A0B;
  width: 100px;
  left: 30px;
}
#content-footer .information-footer .footer-mail {
  position: absolute;
  top: 80px;
}
#content-footer .information-footer .footer-mail span {
  position: absolute;
  color: #0A0A0B;
  width: 100px;
  left: 30px;
}
#content-footer .information-footer .footer-address {
  position: absolute;
  top: 120px;
}
#content-footer .information-footer .footer-address span {
  position: absolute;
  color: #0A0A0B;
  width: 180px;
  left: 30px;
}

footer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 80%;
  height: 50px;
  left: 10%;
}
footer .copyright h3 {
  display: flex;
  color: #0A0A0B;
  font-size: 14px;
}
footer .menu-footer {
  justify-content: space-between;
  text-transform: uppercase;
}
footer .menu-footer ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
footer .menu-footer ul li {
  padding: 5px;
}
footer .menu-footer ul li a {
  color: #0A0A0B;
  text-decoration: none;
  font-size: 14px;
}

.container-input {
  position: absolute;
  display: flex;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  background-color: rgba(254, 140, 18, 0.3);
  border-radius: 10%;
  top: 40%;
  left: 70%;
  padding: 20px;
  width: 300px;
}
.container-input .row {
  margin-bottom: 5px;
}
.container-input input:not([type=submit]),
.container-input textarea {
  background-color: #FFFFFF;
  color: #0A0A0B;
  width: 85%;
  margin: 0 0 3px;
  padding: 10px 15px;
  height: 10px;
  line-height: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid transparent;
  outline: 0;
  transition: all 0.5s ease-out;
}
.container-input textarea {
  height: 100px;
  resize: none;
}
.container-input input:not([type=submit]):focus,
.container-input textarea:focus {
  border-color: #FE8C12;
}
.container-input input[type=submit] {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 30px;
  font-size: 12px;
  line-height: 20px;
  height: 40px;
  background-color: #0A0A0B;
  color: #fff;
  border: 0;
  transition: all 0.5s ease-out;
  border-radius: 5px;
}
.container-input input[type=submit]:hover {
  background-color: #FE8C12;
}

*::-webkit-input-placeholder {
  opacity: 1;
  color: #0A0A0B;
}

label.error {
  font-weight: 700;
  display: block;
  color: brown;
  font-size: 14px;
}

#content-form {
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 550px;
  z-index: -1;
}
#content-form .icon-form {
  position: absolute;
  margin: 2px 2px 2px 2px;
  top: 20%;
  left: 20%;
}
#content-form span {
  position: absolute;
  color: #0A0A0B;
  text-transform: lowercase;
  font-family: "Open Sans", sans-serif;
  bottom: 0%;
  margin: 2px 5px 2px 5px;
  font-weight: 800;
  font-size: 40px;
}
#content-form #paragraf-form {
  position: absolute;
  text-align: justify;
  width: 25%;
  height: 40%;
  top: 40%;
  left: 20%;
  font-size: 18px;
}

#footer_slider {
  position: absolute;
  display: flex;
  right: 10%;
  bottom: 5%;
}
#footer_slider .foodSlides span {
  position: absolute;
  color: #0A0A0B;
  text-transform: lowercase;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 35px;
}

@media (max-width: 320.608px) {
  header {
    width: 100%;
  }
  header #main-header {
    width: 100%;
    position: fixed;
  }
  header #main-header .main-logo {
    position: absolute;
  }
  header #main-header .main-logo .main-icon-header img {
    width: 30px;
  }
  header #main-header .main-logo .main-icon-header .main-brand {
    position: fixed;
    top: 15px;
    left: 70px;
    font-size: 20px;
  }
  header #main-header .main-call {
    position: fixed;
  }
  header #main-header .main-call .call-icon {
    left: 10px;
    top: 80px;
  }
  header #main-header .main-call .call-icon img {
    width: 20px;
  }
  header #main-header .main-call .call-icon .call-numb small {
    font-size: 10px;
    left: 40px;
  }
  header #main-header .main-call .call-icon .call-numb h5 {
    font-size: 12px;
    left: 30px;
    top: 100px;
  }
  header #main-header .main-maill {
    position: fixed;
  }
  header #main-header .main-maill .maill-icon {
    left: 150px;
    top: 80px;
  }
  header #main-header .main-maill .maill-icon img {
    width: 20px;
  }
  header #main-header .main-maill .maill-icon .maill-adrs small {
    font-size: 10px;
    left: 180px;
  }
  header #main-header .main-maill .maill-icon .maill-adrs h5 {
    font-size: 12px;
    left: 165px;
    top: 100px;
  }
  header #main-header .btn-header .btn-org {
    position: fixed;
    left: 150px;
    top: 10px;
  }
  header #main-header .btn-header button {
    position: fixed;
    font-size: 10px;
  }
  #hamburger {
    display: block;
    background-color: #FE8C12;
  }
  #hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  #hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    -webkit-transform: translateY(8px) rotate(45deg);
    -moz-transform: translateY(8px) rotate(45deg);
    -ms-transform: translateY(8px) rotate(45deg);
    -o-transform: translateY(8px) rotate(45deg);
  }
  #hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    -webkit-transform: translateY(-8px) rotate(-45deg);
    -moz-transform: translateY(-8px) rotate(-45deg);
    -ms-transform: translateY(-8px) rotate(-45deg);
    -o-transform: translateY(-8px) rotate(-45deg);
  }
  #main-menu {
    position: absolute;
    top: 120px;
  }
  .list-menu {
    position: fixed;
    left: -200%;
    top: 70px;
    gap: 0;
    flex-direction: column;
    background-color: #0A0A0B;
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
  }
  .list-menu .list {
    margin: 16px 0;
  }
  .list-menu .list-menu.active {
    left: 0;
  }
  #btn-search {
    position: absolute;
    left: 125px;
    top: 160px;
  }
  #main-media-social {
    top: 130px;
  }
}

/*# sourceMappingURL=main.css.map */

## JQUERY

(function ($) {
  
  $("#formValid").validate({
    rules: {
      name: {
        minlength: 3
      },
      email: {
        email: true
      },
      phone: {
        number: true,
          minlength: 10,
          maxlength: 12
      }
    },
    message: {
      name: {
        required: "Please enter your name"
      },
      email: "Please enter your email",
      phone: {
        required: "Please input number"
      }
    },
    submitHandler: function() {
      location.replace("index.html")
    }
  });

  var currentSlide = 1;
  var $footer_slider = $(".foodSlides");
  var slideCount = $footer_slider.children().length;
  var slideTime = 3000;
  var animationTime = 5000;

  setInterval(function(){
    $footer_slider.animate({
      marginLeft : '-=180vh'
    }, 
    animationTime , function() {
      currentSlide++;
      if(currentSlide === slideCount) {
        currentSlide = 1;
        $(this).css("margin-left", "0px")
      }
    });
  }, slideTime)
}(jQuery));

(function ($) {
 
  var currentSlide = 1;
  var $slider_video = $(".slide-img");
  var slideCount = $slider_video.children().length;
  var slideTime = 5000;
  var animationTime = 5000;

  setInterval(function(){
    $slider_video.animate({
      marginLeft : '-=110%'
    }, 
    animationTime , function() {
      currentSlide++;
      if(currentSlide === slideCount) {
        currentSlide = 1;
        $(this).css("margin-left", "0px")
      }
    });
  }, slideTime)
}(jQuery));



