<template>
	<NavBarHome />
	<div class="title">
		<img id="bg" src="../assets/team.jpg" alt="" />
		<h1 class="titleOfDiv">T Square</h1>
		<h1 class="quote">Where We Match You with Your Perfect Tutor</h1>
		<div>
			<input id="search" type="text" placeholder="What do you like to learn today?"/>
			<button type="submit" id = "input-icons">
			<i class="fa fa-search icon"></i>
		</button>
		</div>
		<div id="cont1">
			<h2>More than 300,000 Tutors</h2>
			<img id="tutor" src="../assets/tutor.png" alt="tutor" />
		</div>
		<div id="cont2">
			<h2>Over 200 Subjects Available</h2>
			<img id="tutor" src="../assets/education-app.png" alt="edu" />
		</div>
		<div id="cont3">
			<h2>0% Agency Commission Fees</h2>
			<img id="fee" src="../assets/cash-payment.png" alt="fee" />
		</div>
	</div>

	<div class="subtitle">
		<h1>Subjects We Offer</h1>
		<br/>
		<div id="first">
			<h3 class="subject">Academics</h3>
			<!-- <router-link id="navLink" to="/acadsresults">Academics</router-link>  add in when hv filtered results-->
		</div>
		<div id="second"><h3 class="subject">Performing Arts</h3></div>
		<div id="third"><h3 class="subject">Sports</h3></div>
		<div id="fourth"><h3 class="subject">Culinary</h3></div>
		<div id="fifth"><h3 class="subject">Programming</h3></div>
		<div id="sixth"><h3 class="subject">Others</h3></div>
	</div>
	<Footer/>
</template>

<script>
import NavBarHome from "../components/NavBarHome.vue";
import Footer from "../components/Footer.vue";

export default {
	name: "Home",

	components: {
		NavBarHome,
		Footer,
	},
};
</script>

<style scoped>
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

/* .search-container {
  float: right;
}

input[type=text] {
  padding: 6px;
  margin-top: %;
  font-size: 17px;
  border: none;
}


.search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 80px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
} */



#cont1 {
	position: absolute;
	top: 110%;
	width: 33.33%;
	height: 350px;
	background-color: rgb(198, 245, 245);
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	float: left;
	color: black;
	font-size: 20px;
	border: 5px solid white;
	text-align: center;
}

#cont2 {
	position: absolute;
	top: 110%;
	left: 33.33%;
	width: 33.33%;
	height: 350px;
	background-color: lightgrey;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	color: black;
	font-size: 20px;
	border: 5px solid white;
	text-align: center;
}

#cont3 {
	position: absolute;
	top: 110%;
	width: 33.33%;
	left: 66.66%;
	height: 350px;
	background-color: lightblue;
	float: left;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	color: black;
	font-size: 20px;
	border: 5px solid white;
	text-align: center;
}

#first,
#second,
#third,
#fourth,
#fifth,
#sixth {
	width: 16.66%;
	height: 260px;
	background-color: darkslategrey;
	float: left;
	color: black;
	font-size: 10px;
	border: solid white;
	text-align: center;
}

#first {
  	background: url(../assets/acads.jpg) 50% 50% no-repeat;
}

#second {
  	background: url(../assets/performingarts.jpg) 50% 50% no-repeat;
}

#third {
  	background: url(../assets/sports.jpg) 50% 50% no-repeat;
}

#fourth {
  	background: url(../assets/chef.jpg) 50% 50% no-repeat;
}

#fifth {
  	background: url(../assets/programming.jpg) 50% 50% no-repeat;
}

#sixth {
  	background: url(../assets/others.jpg) 50% 50% no-repeat;
}

.subject {
	position: absolute;
	text-decoration: underline;
	top: 65px;
}

@import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css";
@import "https://fonts.googleapis.com/css?family=Montserrat";
</style>





