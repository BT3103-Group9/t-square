<template>
<NavBar/>
<h3 id="createEditHeader">Edit Your Tutor Profile</h3>

<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-6 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4>Profile Information</h4>
                </div>

                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name (Required)</label><input id="firstName" type="text" required="" class="form-control" placeholder="Eg. Michael" v-model="firstName"></div>
                    <div class="col-md-6"><label class="labels">Last Name (Required)</label><input id="lastName" type="text" required="" class="form-control" placeholder="Eg. Lim" v-model="lastName"></div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input id="mobile" type="text" required="" class="form-control" placeholder="Eg. 9123 4567" v-model="mobile"></div>
                    <div class="col-md-12"><label class="labels">Address</label><input id="address" type="text" class="form-control" placeholder="Eg. Tampines Avenue 1" v-model="address"></div>
                    <div class="col-md-12"><label class="labels">Unit Number</label><input id="unitNum" type="text" class="form-control" placeholder="Eg. #10-10" v-model="unitNum"></div>
                    <div class="col-md-12"><label class="labels">Postal Code</label><input id="postalCode" type="text" required="" class="form-control" placeholder="Eg. 123456" v-model="postalCode"></div>
                    <div class="col-md-12"><label class="labels">Area</label><input id="area" type="text" required="" class="form-control" placeholder="Eg. North" v-model="area"></div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Hourly Rate (Required)</label><input id="rate" type="text" required="" class="form-control" placeholder="Eg. 50" v-model="rate"></div>
                    <div class="col-md-6"><label class="labels">Years of Experience (Required)</label><input id="yearsExperience" type="text" required="" class="form-control" placeholder="Eg. 3" v-model="yearsExperience"></div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Subject Taught (Required)</label>
                        <textarea id="subject" class="form-control" placeholder='Eg. GCE "A" Level Mathematics' v-model="subject"></textarea>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Bio (Required)</label>
                        <textarea id="bio" class="form-control" placeholder="Eg. I am passionate about teaching..." v-model="bio"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center">
                    <h4>Highest Education</h4>
                </div>
                <div class="col-md-12"><label class="labels">School (Required)</label><input id="school" type="text" required="" class="form-control" placeholder="Eg. National University of Singapore" v-model="school"></div>
                <div class="col-md-12"><label class="labels">Degree Type (Required)</label><input id="degree" type="text" required="" class="form-control" placeholder="Eg. Bachelor of Science" v-model="degree"></div>
                <div class="col-md-12"><label class="labels">Course of Study (Required)</label><input id="courseOfStudy" type="text" required="" class="form-control" placeholder="Eg. Mathematics" v-model="courseOfStudy"></div>

                <br><br>

                <div class="d-flex justify-content-between align-items-center"><h4>Latest Experience</h4></div>
                <div class="col-md-12"><label class="labels">Company (Required)</label><input id="company" type="text" required="" class="form-control" placeholder="Eg. Facebook" v-model="company"></div>
                <div class="col-md-12"><label class="labels">Role (Required)</label><input id="role" type="text" required="" class="form-control" placeholder="Eg. Software Engineer" v-model="role"></div>
                <div class="col-md-12"><label class="labels">Active since (Required)</label><input id="yearActive" type="text" required="" class="form-control" placeholder="Eg. 2018" v-model="yearActive"></div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="savetofs()" style="background-color: #000000">Confirm Changes</button></div>
            </div>
        </div>
    </div>
</div>
<Footer/>
</template>

<script>
import firebaseApp from '@/firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'

const db = getFirestore(firebaseApp);

export default {
    name: "Createprofile",
	
	components: {
        NavBar,
		Footer
	},

    mounted() {
        const auth = getAuth(); 
        this.fbuser = auth.currentUser.email;
        this.display()
	},

    data(){
        return{
            fbuser: ""
        }
    },

    methods: {

        async display(){    
            const auth = getAuth(); 
            this.fbuser = auth.currentUser.email;
            const username = String(this.fbuser).split("@")[0]
            let docs = await getDoc(doc(db, "profiles", username))
            let userInfo = docs.data()
            document.getElementById("firstName").value = userInfo.firstName;
            document.getElementById("lastName").value = userInfo.lastName;
            document.getElementById("mobile").value = userInfo.mobile;
            document.getElementById("address").value = userInfo.address;
            document.getElementById("unitNum").value = userInfo.unitNum;
            document.getElementById("postalCode").value = userInfo.postalCode;
            document.getElementById("area").value = userInfo.area;
            document.getElementById("rate").value = userInfo.rate;
            document.getElementById("yearsExperience").value = userInfo.yearsExperience;
            document.getElementById("subject").value = userInfo.subject;
            document.getElementById("bio").value = userInfo.bio;
            document.getElementById("school").value = userInfo.school;
            document.getElementById("degree").value = userInfo.degree;
            document.getElementById("courseOfStudy").value = userInfo.courseOfStudy;
            document.getElementById("company").value = userInfo.company;
            document.getElementById("role").value = userInfo.role;
            document.getElementById("yearActive").value = userInfo.yearActive;
            this.firstName = userInfo.firstName;
            this.lastName = userInfo.lastName;
            this.mobile = userInfo.mobile;
            this.address = userInfo.address;
            this.unitNum = userInfo.unitNum;
            this.postalCode = userInfo.postalCode;
            this.area = userInfo.area;
            this.rate = userInfo.rate;
            this.yearsExperience = userInfo.yearsExperience;
            this.subject = userInfo.subject;
            this.bio = userInfo.bio;
            this.school = userInfo.school;
            this.degree = userInfo.degree; 
            this.courseOfStudy = userInfo.courseOfStudy;
            this.company = userInfo.company;
            this.role = userInfo.role;      
            this.yearActive = userInfo.yearActive;
        },

        async savetofs(){   
    
            const auth = getAuth(); 
            this.fbuser = auth.currentUser.email;
            const username = String(this.fbuser).split("@")[0]
            let docs = await getDoc(doc(db, "profiles", username))

            if (!(this.firstName == "" || this.lastName == "" || this.rate == "" || this.yearsExperience == "" || this.subject == "" || this.bio == "" || this.school == "" || this.degree == "" || this.courseOfStudy == "" || this.company == "" || this.role == "" || this.yearActive == "")) {
                try {
                    const docRef = await setDoc(doc(db, "profiles", username),{
                        firstName: this.firstName,
                        lastName: this.lastName,
                        mobile: this.mobile,
                        address: this.address,
                        unitNum: this.unitNum,
                        postalCode: this.postalCode,
                        area: this.area,
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
                    this.$router.push({ name: "profile", params: { username: username } })
                    this.firstName = this.lastName = this.mobile = this.address = this.unitNum = this.postalCode = this.area = this.email = this.rate = this.yearsExperience = this.bio = this.school = this.degree = this.courseOfStudy = this.company = this.role = this.yearActive = ""
                    this.$emit("added")
                }
                catch(error) {
                    console.error("Error adding document: ", error);
                }
            } else {
                alert("Please fill in all the required fields!")
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