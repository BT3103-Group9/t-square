<template>
<div class="rt-container">
  <div class="col-rt-12">
    <div class="Scriptcontent">   
      <div class="student-profile py-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card shadow-sm">
                <div class="card-header bg-transparent text-center">
                  <img class="profile_img" src="../assets/tutordp.png" alt="Tutor dp">
                  <h3 id="name"></h3>
                  <button id="profileBtn" @click="editProfile()">Edit Profile</button> 
                  <button id="profileBtn" @click="deleteProfile()">Delete Profile</button>
                </div>

                <div class="card-body">
                  <p class="mb-0">
                    <strong class="pr-1">Subject Taught:</strong> <br>
                  </p>
                  <p id="subject"></p>
                </div>

                <div class="card-body" style="background-color: rgb(32, 29, 25);  text-align: center; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;" v-if="!myProfile">
                  <p class="mb-0">
                    <a href="chat.html"><strong class="pr-1" style="font-size: 20px; color: white; font-family: 'Montserrat';">Message Tutor</strong></a> 
                    <span class="fa fa-comments" style="color: white"></span> 
                  </p>
                </div>
              </div> <br>
            </div>
            <div class="col-lg-8">
              <div class="card shadow-sm">
                <div class="card-header bg-transparent border-0">
                  <h3 class="mb-0">Information</h3>
                </div>

                <div class="card-body pt-0">
                  <table class="table table-bordered">
                    <tr>
                      <th>Hourly Rate </th>
                      <td id="rate"></td>
                    </tr>
                    <tr>
                      <th>Highest Education </th>
                      <td id="education"></td>
                    </tr>
                    <tr>
                      <th>Teaching Experience</th>
                      <td id="yearsExperience"></td>
                    </tr>
                    <!-- <tr>
                      <th>Ratings</th>
                      <td>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                      </td>
                    </tr> -->
                  </table>
                </div>
              </div>
              <div style="height: 26px"></div>
                <div class="card shadow-sm">
                  <div class="card-header bg-transparent border-0">
                    <h3 class="mb-0">Bio</h3>
                  </div>

                  <div class="card-body pt-0">
                      <p id="bio"></p>
                  </div>
                </div>
                <div style="height: 26px"></div>
                  <div class="card shadow-sm">
                    <div class="card-header bg-transparent border-0">
                      <h3 class="mb-0">Latest Experience</h3>
                    </div>
                    <div class="card-body pt-0">
                      <h5 id="company"></h5>
                      <h6 id="role"></h6>
                      <h6 id="yearActive"></h6>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script> //ratings
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  data() {
  return{
    fbuser:"",
    myProfile: false
    }
  }, 

  mounted() {
    const auth = getAuth(); 
    this.fbuser = auth.currentUser.email;
    this.display(this.fbuser)
  },

  methods: {

    async display(user) {    
      const username = this.$route.params.username
			let docs = await getDoc(doc(db, "profiles", username))
      const current = getAuth().currentUser.email
			const currentUsername = String(current).split("@")[0]

      if (username.valueOf() == currentUsername.valueOf()) {
				this.myProfile = true;
			}

      let userInfo = docs.data()
      document.getElementById("name").innerHTML = userInfo.firstName + " " + userInfo.lastName;
      document.getElementById("subject").innerHTML = userInfo.subject;
      document.getElementById("rate").innerHTML = "SGD " + userInfo.rate;
      document.getElementById("education").innerHTML = "<strong>" + userInfo.school + "</strong> <br>" + userInfo.degree + " in " + userInfo.courseOfStudy;
      document.getElementById("yearsExperience").innerHTML = userInfo.yearsExperience + " years";
      document.getElementById("bio").innerHTML = userInfo.bio;
      document.getElementById("company").innerHTML = userInfo.company;
      document.getElementById("role").innerHTML = userInfo.role;
      document.getElementById("yearActive").innerHTML = userInfo.yearActive;
    },

    

    async deleteProfile() {
      const username = String(this.fbuser).split("@")[0]
      if (confirm("Are you sure you want to delete your profile?")) {
        await deleteDoc(doc(db, "profiles", username))
        this.$router.push({ name: "Home" })
      } else {
        console.log("Profile not deleted")
      }
    },

    editProfile() {
      this.$router.push({ name: "editprofile" })
    }
  }
}
  

</script>


<style scoped>
@import "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap";
@import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css';
@import "https://fonts.googleapis.com/css?family=Montserrat";
@import "./css/demo.css";
@import "./css/style.css";
</style>