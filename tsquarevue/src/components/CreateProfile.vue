<template>
<NavBar/>
<h3 id="createEditHeader">Create Your Tutor Profile</h3>

<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-6 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4>Profile Information</h4>
                </div>

                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. Michael" v-model="firstName"></div>
                    <div class="col-md-6"><label class="labels">Last Name (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. Lim" v-model="lastName"></div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" required="" class="form-control" placeholder="Eg. 9123 4567" v-model="mobile"></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="Eg. Tampines Avenue 1" v-model="address"></div>
                    <div class="col-md-12"><label class="labels">Unit Number</label><input type="text" class="form-control" placeholder="Eg. #10-10" v-model="unitNum"></div>
                    <div class="col-md-12"><label class="labels">Postal Code</label><input type="text" required="" class="form-control" placeholder="Eg. 123456" v-model="postalCode"></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" required="" class="form-control" placeholder="Eg. North" v-model="area"></div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Hourly Rate (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. 50" v-model="rate"></div>
                    <div class="col-md-6"><label class="labels">Years of Experience (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. 3" v-model="yearsExperience"></div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Subject Taught (Required)</label>
                        <textarea class="form-control" placeholder='Eg. GCE "A" Level Mathematics' v-model="subject"></textarea>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Bio (Required)</label>
                        <textarea class="form-control" placeholder="Eg. I am passionate about teaching..." v-model="bio"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="p-3 py-5">
                <!--<div class="d-flex justify-content-between align-items-center"><h4>Profile Photo</h4></div>
                <input id="fileButton" type="file" accept="image/*">

                <br><br>-->

                <div class="d-flex justify-content-between align-items-center"><h4>Highest Education</h4></div>
                <div class="col-md-12"><label class="labels">School (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. National University of Singapore" v-model="school"></div>
                <div class="col-md-12"><label class="labels">Degree Type (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. Bachelor of Science" v-model="degree"></div>
                <div class="col-md-12"><label class="labels">Course of Study (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. Mathematics" v-model="courseOfStudy"></div>

                <br><br>

                <div class="d-flex justify-content-between align-items-center"><h4>Latest Experience</h4></div>
                <div class="col-md-12"><label class="labels">Company (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. Facebook" v-model="company"></div>
                <div class="col-md-12"><label class="labels">Role (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. Software Engineer" v-model="role"></div>
                <div class="col-md-12"><label class="labels">Active since (Required)</label><input type="text" required="" class="form-control" placeholder="Eg. 2018" v-model="yearActive"></div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" @click="savetofs()" style="background-color: #000000">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
<Footer/>
</template>

<script>
import firebaseApp from '@/firebase.js';
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'

const db = getFirestore(firebaseApp);
//const storage = getStorage(firebaseApp);

export default {
    name: "Createprofile",
	
	components: {
        NavBar,
		Footer
	},

    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, user => {
            this.user = user;
        })
        /*const metadata = {
            contentType: 'image/jpeg'
        };
        const fileButton = document.getElementById('fileButton');
        fileButton.addEventListener('change', function(e) {
            const file = e.target.files[0];
            const storageRef = ref(storage, 'profilePic/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    }
                }, 
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    });
                }
            )
        })*/
	},

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
            yearActive: "",
        }
    },

    methods: {

        async savetofs(){   
    
            const auth = getAuth(); 
            this.fbuser = auth.currentUser.email;

            if (!(this.firstName == "" || this.lastName == "" || this.rate == "" || this.yearsExperience == "" || this.subject == "" || this.bio == "" || this.school == "" || this.degree == "" || this.courseOfStudy == "" || this.company == "" || this.role == "" || this.yearActive == "")) {
                try {
                    const email_username = String(this.fbuser).split("@")[0]
                    const docRef = await setDoc(doc(db, "profiles", email_username),{
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
                        yearActive: this.yearActive,
                        username: this.firstName + ' ' + this.lastName,
                        _id: email_username
                    })
                    console.log(docRef)
                    this.$router.push({ name: "profile", params: { username: email_username } })
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