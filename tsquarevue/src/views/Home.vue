<template>
	<NavBarHome/>
    <header class="masthead">
        <div class="container">
            <div class="masthead-heading text-uppercase">Welcome to T Square</div>
            <div class="masthead-subheading ">Where We Match You with Your Perfect Tutor</div>
			<input id="query" type="text" class="form-control form-input search rounded-pill text-center col-7 mx-auto" style="font-size: 15px; padding: 18px" placeholder="&#x1F50E;&#xFE0E; What do you like to learn today?"/>
			<a class="btn btn-dark btn-xl mt-2 rounded-pill" style="font-size: 15px; padding: 8px; width: 100px" @click="search()" v-on:click="display()">Search</a>
        </div>
    </header>
	
	<!-- Key Features -->
    <section class="page-section bg-light pt-5" id="services">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Key Features</h2>
            </div>
            <div class="row text-center">
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <img id="tutor" src="../assets/HomePage/tutor.png" alt="tutor" />
                    </span>
                    <h4 class="my-3">More than 300,000 tutors</h4>
                    <p class="text-muted">Our community of tutors come with varying backgrounds and qualifications to suit every individual's learning needs.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <img id="tutor" src="../assets/HomePage/education-app.png" alt="edu" />
                    </span>
                    <h4 class="my-3">More than 200 subjects</h4>
                    <p class="text-muted">We have a wide range of subjects offered, including academics, cooking, photography and many more.</p>
                </div>
                <div class="col-md-4">
                    <span class="fa-stack fa-4x">
                        <img id="fee" src="../assets/HomePage/cash-payment.png" alt="fee" />
                    </span>
                    <h4 class="my-3">0% Agency Commission Fees</h4>
                    <p class="text-muted">We do not collect any form of fees when we connect tutors and tutees on our platform.</p>
                </div>
            </div>
        </div>
    </section>

	<!-- Subjects Grid-->
	<!-- <hr> -->
	<section class="page-section bg-light pt-5" id="portfolio">
		<hr>
		<div class="container">
			<div class="text-center">
				<h2 class="section-heading text-uppercase">Trending subjects</h2>
			</div>
			<div class="row pt-5">
				<div class="col-lg-4 col-sm-6 mb-4">
					<!-- Subject item 1-->
					<div class="portfolio-item">
						<a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
							<div class="portfolio-hover">
								<div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
							</div>
							<img class="img-fluid" src="../assets/HomePage/acads.jpg" alt="..." />
						</a>
						<div class="portfolio-caption">
							<div class="portfolio-caption-heading">Academics</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-4">
					<!-- Portfolio item 2-->
					<div class="portfolio-item">
						<a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
							<div class="portfolio-hover">
								<div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
							</div>
							<img class="img-fluid" src="https://psmag.com/.image/t_share/MTI3NTgyNDI3Mzg3NTc4Mzc4/music-training-guitar.jpg" style="height: 277px !important" alt="..." />
						</a>
						<div class="portfolio-caption">
							<div class="portfolio-caption-heading">Performing Arts</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-4">
					<!-- Portfolio item 3-->
					<div class="portfolio-item">
						<a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
							<div class="portfolio-hover">
								<div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
							</div>
							<img class="img-fluid" src="../assets/HomePage/sports.jpg" alt="..." />
						</a>
						<div class="portfolio-caption">
							<div class="portfolio-caption-heading">Sports</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
					<!-- Portfolio item 4-->
					<div class="portfolio-item">
						<a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
							<div class="portfolio-hover">
								<div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
							</div>
							<img class="img-fluid" src="https://www.healthista.com/wp-content/uploads/2017/12/Six-things-I-learnt-when-I-took-a-Michelin-star-cooking-masterclass-by-healthista-3.jpg" alt="..." style="height: 277px !important"/>
						</a>
						<div class="portfolio-caption">
							<div class="portfolio-caption-heading">Cooking</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
					<!-- Portfolio item 5-->
					<div class="portfolio-item">
						<a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
							<div class="portfolio-hover">
								<div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
							</div>
							<img class="img-fluid" src="../assets/HomePage/programming.jpg" alt="..." />
						</a>
						<div class="portfolio-caption">
							<div class="portfolio-caption-heading">Programming</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-sm-6">
					<!-- Portfolio item 6-->
					<div class="portfolio-item">
						<a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
							<div class="portfolio-hover">
								<div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
							</div>
							<img class="img-fluid" src="../assets/HomePage/others.jpg" alt="..." />
						</a>
						<div class="portfolio-caption">
							<div class="portfolio-caption-heading">Others</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- What people are saying -->
	<section class="page-section bg-light" id="team">
		<hr>
		<div class="container">
			<div class="text-center">
				<h2 class="section-heading text-uppercase">What people are saying...</h2>
			</div>
			<div class="row mt-5">
				<div class="col-lg-4">
					<div class="team-member">
						<img class="mx-auto rounded-circle" src="../assets/HomePage/1.jpg" alt="..." />
						<h4>Parveen Anand</h4>
						<p class="text-muted">"This platform is fantastic! No commission fees, no charges at all."</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="team-member">
						<img class="mx-auto rounded-circle" src="../assets/HomePage/2.jpg" alt="..." />
						<h4>Diana Petersen</h4>
						<p class="text-muted">"I have always needed such an app and you guys have created the opportunity for me and so many other tutors!"</p>
					</div>
				</div>
				<div class="col-lg-4">
					<div class="team-member">
						<img class="mx-auto rounded-circle" src="../assets/HomePage/3.jpg" alt="..." />
						<h4>Larry Parker</h4>
						<p class="text-muted">"Revolutionary App! This should be the way how tutors and tutees should connect from now on!"</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<BackToTop/>
	<Footer/>

</template>

<script>
import NavBarHome from "../components/NavBarHome.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";
import { reload } from '@firebase/auth';

export default {
	name: "Home",

	components: {
		NavBarHome,
		Footer,
		BackToTop
	},

	methods: {
	async display(){ 
      const profilesRef = collection(db, "profiles");
      const q = query(profilesRef, where("subject", "==", document.getElementById("query").value)); 
      this.$router.push('/search'); 
      document.getElementById("tableBody").innerHTML = ""
      
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let userInfo = doc.data()
        var img = document.createElement("img")
        var tr = document.createElement("tr")
        var th = document.createElement("th")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var a = document.createElement("a")
        var br = document.createElement("br")
        
        img.src = "https://www.w3schools.com/howto/img_avatar.png"
        img.setAttribute("width", "100px")
        td1.append(img)

        a.innerHTML = "<br>" + userInfo.firstName + " " + userInfo.lastName
        a.href = "/profile/" + doc.id
        a.style.fontSize = "20px"
        th.append(a)
        
        td2.innerHTML = "Subject: " + userInfo.subject + "<br>" + "Hourly Rate: " + userInfo.rate + " SGD <br>" + "Teaching Experience: " + userInfo.yearsExperience + " year(s)" + "<br>" + "Highest Education: " + userInfo.degree;
        td2.style.fontSize = "15px"        

        tr.append(td1)
        tr.append(th)
        tr.append(td2)
        document.getElementById("tableBody").append(tr)
      });
    },

	search() {
		const searchQuery = document.getElementById("query").value
		this.$router.push({ name: "search", params: { word: searchQuery } })
	}
	}

	
};
</script>

<style scoped>


h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  line-height: 1.2;
}

header.masthead {
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: center;
  color: #fff;
  background-image: url("https://cdn-wordpress-info.futurelearn.com/info/wp-content/uploads/FL155_Remote_Teaching_Blog_Image.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}

header.masthead .masthead-heading {
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-bottom: 2rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 17rem;
    padding-bottom: 12.5rem;
  }
  header.masthead .masthead-subheading {
    font-size: 2.25rem;
    font-style: italic;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }
  header.masthead .masthead-heading {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
}


#portfolio .portfolio-item {
  max-width: 26rem;
  margin-left: auto;
  margin-right: auto;
}
#portfolio .portfolio-item .portfolio-link {
  position: relative;
  display: block;
  margin: 0 auto;
}
#portfolio .portfolio-item .portfolio-link .portfolio-hover {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 200, 0, 0.9);
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ease-in-out 0.25s;
}
#portfolio .portfolio-item .portfolio-link .portfolio-hover .portfolio-hover-content {
  font-size: 1.25rem;
  color: white;
}
#portfolio .portfolio-item .portfolio-link:hover .portfolio-hover {
  opacity: 1;
}
#portfolio .portfolio-item .portfolio-caption {
  padding: 1.5rem;
  text-align: center;
  background-color: #fff;
}
#portfolio .portfolio-item .portfolio-caption .portfolio-caption-heading {
  font-size: 1.5rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 700;
  margin-bottom: 0;
}
#portfolio .portfolio-item .portfolio-caption .portfolio-caption-subheading {
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.portfolio-modal .modal-dialog {
  margin: 1rem;
  max-width: 100vw;
}
.portfolio-modal .modal-content {
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: center;
}
.portfolio-modal .modal-content h2, .portfolio-modal .modal-content .h2 {
  font-size: 3rem;
  line-height: 3rem;
}
.portfolio-modal .modal-content p.item-intro {
  font-style: italic;
  margin-bottom: 2rem;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.portfolio-modal .modal-content p {
  margin-bottom: 2rem;
}
.portfolio-modal .modal-content ul.list-inline {
  margin-bottom: 2rem;
}
.portfolio-modal .modal-content img {
  margin-bottom: 2rem;
}
.portfolio-modal .close-modal {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: transparent;
}
.portfolio-modal .close-modal:hover {
  opacity: 0.3;
}

.team-member {
  margin-bottom: 3rem;
  text-align: center;
}
.team-member img {
  width: 14rem;
  height: 14rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
}
.team-member h4, .team-member .h4 {
  margin-top: 1.5rem;
  margin-bottom: 0;
}


#brandlogo {
	max-width: 50px;
	max-height: 50px;
	filter: invert(98%) sepia(100%) saturate(0%) hue-rotate(315deg)
		brightness(102%) contrast(103%);
}

#tutor {
	max-width: 50%;
	max-height: 60%;
}

#fee {
	max-width: 60%;
	max-height: 65%;
}

.title {
	background-color: black;
	text-align: center;
	color: white;
	font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.subtitle {
	position: relative;
	background-color: white;
	text-align: center;
	color: black;
	margin-top: 20px;
	font-size: 30px;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

#bg {
	width: 100%;
	padding-top: 2%;
	filter: brightness(50%);
}

.titleOfDiv {
	top: 3%;
	left: 7%;
	position: absolute;
	font-size: 35px;
	color: white;
}

.about {
	position: absolute;
	top: 15px;
	left: 420px;
	font-size: 30px;
	color: whitesmoke;
}

.contact {
	position: absolute;
	top: 15px;
	left: 580px;
	font-size: 30px;
	color: whitesmoke;
}

.quote {
	position: absolute;
	top: 55%;
	left: 50%;
	text-align: center;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	font-size: 60px;
	color: white;
}

#search {
	text-align: center;
	border-radius: 50px;
	top: 80%;
	left: 20%;
	position: absolute;
	font-size: 30px;
	font-family: Arial, FontAwesome;
}

#input-icons {
	border-top-left-radius: 50px;
	border-bottom-left-radius: 50px;
	top: 79%;
	left: 30%;
	float: right;
	color: rgb(97, 65, 65);
	height: 65px;
	width: 100px;
}

#input-icons i {
    position: absolute;
	top: 79%;
	margin-left: 0%;
    position: absolute;
}

@import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css";
@import "https://fonts.googleapis.com/css?family=Montserrat";

</style>





