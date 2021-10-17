<template>
<div id="topBackground">
    <div id="firstContainer">
        <a href="index.html"><img id="brandlogo" src="./images/transform-text.svg" alt=""></a> 
        <a id="signUpLogin" href="">About Us</a> <!--change href after about page is set up-->
        <p id="signUpLogin"> | </p>
        <a id="signUpLogin" href="loginsignup.html">Sign Up</a>
        <p id="signUpLogin"> | </p>
        <a id="signUpLogin" href="loginsignup.html">Login</a> 
    </div>
    
    <div style="max-width: 100%; margin: 20px; text-align: center;">
        <div id="input-icons">
            <i class="fa fa-search icon"></i>
            <input id="search" type="text" name="q" placeholder="What do you like to learn today?">
        </div>
    </div>
</div>

<br>

<h2 id="createEditHeader">Create Your Tutor Profile</h2>

<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-6 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name</label><input type="text" required="" class="form-control" placeholder="Eg. Michael" value="" v-model="firstName"></div>
                    <div class="col-md-6"><label class="labels">Last Name</label><input type="text" required="" class="form-control" value="" placeholder="Eg. Lim" v-model="lastName"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" required="" class="form-control" placeholder="Eg. 9123 4567" value="" v-model="mobile"></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="Eg. Tampines Avenue 1" value="" v-model="address"></div>
                    <div class="col-md-12"><label class="labels">Unit Number</label><input type="text" class="form-control" placeholder="Eg. #10-10" value="" v-model="unitNum"></div>
                    <div class="col-md-12"><label class="labels">Postal Code</label><input type="text" required="" class="form-control" placeholder="Eg. 123456" value="" v-model="postalCode"></div>
                    <div class="col-md-12"><label class="labels">Area</label><br>
                        <select required="" v-model="area">
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                        </select>
                    </div>
                    <div class="col-md-12"><label class="labels">Email address</label><input type="text" required="" class="form-control" placeholder="Eg. michael@mail.com" value="" v-model="email"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Hourly Rate</label><input type="text" required="" class="form-control" placeholder="Eg. 50" value="" v-model="rate"></div>
                    <div class="col-md-6"><label class="labels">Years of Experience</label><input type="text" required="" class="form-control" value="" placeholder="Eg. 3" v-model="yearsExperience"></div>
                </div>
                <div class="row mt-3">
                        <div class="col-md-12"><label class="labels" v-model="subject">Subject Taught</label>
                            <textarea class="form-control" placeholder='Eg. GCE "A" Level Mathematics'></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels" v-model="bio">Bio</label>
                            <textarea class="form-control" placeholder="Eg. I am passionate about teaching..."></textarea>
                        </div>
                    </div>
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="savetofs()">Save Profile</button></div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Highest Education</span></div><br>
                <div class="col-md-12"><label class="labels">School</label><input type="text" required="" class="form-control" placeholder="Eg. National University of Singapore" value="" v-model="school"></div>
                <div class="col-md-12"><label class="labels">Degree Type</label><input type="text" required="" class="form-control" placeholder="Eg. Bachelor of Science" value="" v-model="degree"></div>
                <div class="col-md-12"><label class="labels">Course of Study</label><input type="text" required="" class="form-control" placeholder="Eg. Mathematics" value="" v-model="courseOfStudy"></div>

                <br><br>

                <div class="d-flex justify-content-between align-items-center experience"><span>Latest Experience</span></div><br>
                <div class="col-md-12"><label class="labels">Company</label><input type="text" required="" class="form-control" placeholder="Eg. Facebook" value="" v-model="company"></div>
                <div class="col-md-12"><label class="labels">Role</label><input type="text" required="" class="form-control" placeholder="Eg. Software Engineer" value="" v-model="role"></div>
                <div class="col-md-12"><label class="labels">Active since</label><input type="text" required="" class="form-control" placeholder="Eg. 2018" value="" v-model="yearActive"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import firebaseApp from '@/firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  //fbuser is nothing but email here
    data(){
        return{
            fbuser: "",
            firstName: "",
            lastName: "",
            mobile: "",
            address: "",
            unitNum: "",
            postalCode: "",
            area: "",
            email: "",
            rate: "",
            yearsExperience: "",
            subject: "",
            bio: "",
            school: "",
            degree: "", 
            courseOfStudy: "",
            company: "",
            role: "",       
            yearActive: ""
        }
  },

    methods: {
    
        async savetofs(){   
    
            const auth = getAuth(); 
            this.fbuser = auth.currentUser.email;
        
            try{
                const docRef = await setDoc(doc(db, String(this.fbuser), this.a),{
                    firstName: this.firstName,
                    lastName: this.lastName,
                    mobile: this.mobile,
                    address: this.address,
                    unitNum: this.unitNum,
                    postalCode: this.postalCode,
                    area: this.area,
                    email: this.email,
                    rate: this.rate,
                    yearsExperience: this.yearsExperience,
                    subject: this.subject,
                    bio: this.bio,
                    school: this.school,
                    degree: this.degree, 
                    courseOfStudy: this.courseOfStudy,
                    company: this.company,
                    role: this.role,       
                    yearActive: this.yearActive
                })
                console.log(docRef)
                this.firstName = this.lastName = this.mobile = this.address = this.unitNum = this.postalCode = this.area = this.email = this.rate = this.yearsExperience = this.bio = this.school = this.degree = this.courseOfStudy = this.company = this.role = this.yearActive = ""
                this.$emit("added")
                }
            catch(error) {
                console.error("Error adding document: ", error);
            }
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