<template>
<NavBar/>
<div class="container">
  <div class="row">
    <!-- BEGIN SEARCH RESULT -->
    <div class="col-md-12">
      <div class="grid search">
        <div class="grid-body">
          <div class="row">
            <!-- BEGIN FILTERS -->
            <div class="col-md-3 text-left">
              <h2 class="grid-title">Filters</h2>
              <hr>

              <!-- Budget --> 
              <h5>Budget - Per Session</h5>
              <p>{{currentFilteredPrice}}</p>
              <ui-slider v-model="value1" :max=200 style="width:70%; margin-left:0"></ui-slider> 
              <hr>

              <!-- Experience -->
              <div class="experience">
                  <h5>Experience</h5>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">&nbsp; &#60; 5 years</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">&nbsp; 5-10 years</label>
                  </div>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                      <label class="form-check-label" for="flexRadioDefault2">&nbsp; >10 years</label>
                  </div>
              </div>
    
              <!-- <br>
              <button class="btn btn-primary" type="submit">Apply Filters</button> -->

            </div>
            <!-- END FILTERS -->

            <!-- BEGIN RESULT -->
            <div class="col-md-9 ">
              <div class="text-left">
                <h2>Result</h2>
                <hr>
                <p id="matched">Showing all results matching "{{searchTerm}}"</p>              
                <div class="padding"></div>
                <ui-table :data="shownEntryList" :thead="thead" :tbody="tbody"></ui-table>
              </div>
            <!-- END RESULT -->
          </div>
        </div>
      </div>
    </div>
    <!-- END SEARCH RESULT -->
    </div>
  </div>

  </div>

<BackToTop/>
<Footer/>
</template>

<script>
import { mapGetters } from "vuex";
import { collection, query, where, getFirestore, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebaseApp from '../firebase.js';
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";
import { configureCompat } from 'vue';

configureCompat({
  COMPONENT_V_MODEL: false
})

const db = getFirestore(firebaseApp);

export default {

  name: 'FilteredSearch',

  components: {
		NavBar,
		Footer,
    BackToTop
	},

  data() {
    return {
      thead: ['Name','Rate/Hr', 'Experience',],
      tbody: ['firstName', 'rate', 'yearsExperience'],
      value1: 100,
      entryList: [], // onMount: get data from database
      searchTerm: this.$route.params.word, // This should be synced with your search input via v-model
      budgetHigher: this.value1,
      experience: 1, // Using enums: 1 = <5, 2 = 5 - 10, 3 = 10+
    }
  },

  mounted() {
    const auth = getAuth(); 
    this.user = auth.currentUser.email;
    // this.initialSearch();
    this.getList()
  },

  computed: {
    currentFilteredPrice: function() {
        return "Max Price $" + this.value1;
      },

    shownEntryList: function() {
      return this.entryList
          .filter(this.searchFilter)
          .filter(this.budgetFilter)
          .filter(this.experienceFilter); // chain however many filters you need
    },   
  },

  methods: {
    async getList() {
      const querySnapshot = await getDocs(collection(db, "profiles"));
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          this.entryList.push(doc.data())
      });
    },
    searchFilter: (entry) => {
        return entry.subject.toLowerCase().includes(this.searchTerm.toLowerCase());
    },
    budgetFilter: (entry) => {
        return entry.rate <= this.budgetHigher;
    },
    experienceFilter: (entry) => {
        switch (this.experience) {
            case 1:
                return entry.yearsExperience < 5;
            case 2:
                return entry.yearsExperience < 10;
            case 3:
            default:
                return entry.yearsExperience >= 10;
        }
    }
  }

  // data() {
  //   return{
  //     user:"",
  //   }
  // }, 


  
  // methods:{
  //   async initialSearch() {
  //     document.getElementById("tableBody").innerHTML = "" 
  //     const profilesRef = collection(db, "profiles");
  //     const searchQuery = this.$route.params.word
  //     const q = query(profilesRef, where("subject", "==", searchQuery));
  //     const querySnapshot = await getDocs(q);

  //     if (querySnapshot.size == 0) {
  //       var tr = document.createElement("tr")
  //       var td = document.createElement("td")
  //       td.innerHTML = "No results found. Please try again!"
  //       tr.append(td)
  //       document.getElementById("tableBody").append(tr)
  //       document.getElementById("matched").innerHTML = "Showing no results matching " + searchQuery
  //     }

  //     querySnapshot.forEach((doc) => {
  //       let userInfo = doc.data()
  //       var img = document.createElement("img")
  //       var tr = document.createElement("tr")
  //       var th = document.createElement("th")
  //       var td1 = document.createElement("td")
  //       var td2 = document.createElement("td")
  //       var a = document.createElement("a")
  //       var br = document.createElement("br")
        
  //       img.src = "https://www.w3schools.com/howto/img_avatar.png"
  //       img.setAttribute("width", "100px")
  //       td1.append(img)

  //       a.innerHTML = "<br>" + userInfo.firstName + " " + userInfo.lastName
  //       a.href = "/profile/" + doc.id
  //       a.style.fontSize = "20px"
  //       th.append(a)
        
  //       td2.innerHTML = "Subject: " + userInfo.subject + "<br>" + "Hourly Rate: " + userInfo.rate + " SGD <br>" + "Teaching Experience: " + userInfo.yearsExperience + " year(s)" + "<br>" + "Highest Education: " + userInfo.degree;
  //       td2.style.fontSize = "15px"
  //       td2.style.textAlign = "left"        

  //       tr.append(td1)
  //       tr.append(th)
  //       tr.append(td2)
  //       document.getElementById("tableBody").append(tr)
  //       document.getElementById("matched").innerHTML = "Showing all results matching " + searchQuery
        
  //       this.$router.push({ name: "search", params: { word: searchQuery } })
  //     });
  //   }
  // }
}

</script>

<style scoped>
@import 'https://unpkg.com/vue/dist/vue.min.js';
@import 'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js';

.container{
    margin-top: 9%;
}
body{
    margin-top:20px;
    background:#eee;
}
    
.btn {
    margin-bottom: 5px;
}

.grid {
    position: relative;
    width: 100%;
    background: #fff;
    color: #666666;
    border-radius: 2px;
    margin-bottom: 25px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.grid .grid-body {
    padding: 15px 20px 15px 20px;
    font-size: 0.9em;
    line-height: 1.9em;
}

.search table tr td.rate {
    color: #f39c12;
    line-height: 50px;
}

.search table tr:hover {
    cursor: pointer;
}

.search table tr td.image {
    width: 75px;
}

.search table tr td img {
    width: 75px;
    height: 75px;
}

.search table tr td.rate {
    color: #f39c12;
    line-height: 50px;
}

.search table tr td.price {
    font-size: 1.5em;
    line-height: 50px;
}

.search #price1,
.search #price2 {
    display: inline;
    font-weight: 600;
}

body {
  background-color: #666;
  margin: 100px 50px;
}

.pagination {
    justify-content: center;
}
[slider] {
  position: relative;
  height: 10px;
  border-radius: 10px;
  text-align: left;
  margin: 45px 0 10px 0;
}

[slider] > div {
  position: absolute;
  left: 13px;
  right: 15px;
  height: 14px;
}

[slider] > div > [inverse-left] {
  position: absolute;
  left: 0;
  height: 14px;
  border-radius: 10px;
  background-color: #CCC;
  margin: 0 7px;
}

[slider] > div > [inverse-right] {
  position: absolute;
  right: 0;
  height: 14px;
  border-radius: 10px;
  background-color: #CCC;
  margin: 0 7px;
}

[slider] > div > [range] {
  position: absolute;
  left: 0;
  height: 14px;
  border-radius: 14px;
  background-color: #1ABC9C;
}

[slider] > div > [thumb] {
  position: absolute;
  top: -7px;
  z-index: 2;
  height: 28px;
  width: 28px;
  text-align: left;
  margin-left: -11px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  background-color: #FFF;
  border-radius: 50%;
  outline: none;
}

[slider] > input[type=range] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 3;
  height: 14px;
  top: -2px;
  width: 100%;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  -khtml-opacity: 0;
  opacity: 0;
}

div[slider] > input[type=range]::-ms-track {
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}

div[slider] > input[type=range]::-moz-range-track {
  -moz-appearance: none;
  background: transparent;
  color: transparent;
}

div[slider] > input[type=range]:focus::-webkit-slider-runnable-track {
  background: transparent;
  border: transparent;
}

div[slider] > input[type=range]:focus {
  outline: none;
}

div[slider] > input[type=range]::-ms-thumb {
  pointer-events: all;
  width: 28px;
  height: 28px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider] > input[type=range]::-moz-range-thumb {
  pointer-events: all;
  width: 28px;
  height: 28px;
  border-radius: 0px;
  border: 0 none;
  background: red;
}

div[slider] > input[type=range]::-webkit-slider-thumb {
  pointer-events: all;
  width: 28px;
  height: 28px;
  border-radius: 0px;
  border: 0 none;
  background: red;
  -webkit-appearance: none;
}

div[slider] > input[type=range]::-ms-fill-lower {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type=range]::-ms-fill-upper {
  background: transparent;
  border: 0 none;
}

div[slider] > input[type=range]::-ms-tooltip {
  display: none;
}

[slider] > div > [sign] {
  opacity: 0;
  position: absolute;
  margin-left: -11px;
  top: -39px;
  z-index:3;
  background-color: #1ABC9C;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  -webkit-border-radius: 28px;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}

[slider] > div > [sign]:after {
  position: absolute;
  content: '';
  left: 0;
  border-radius: 16px;
  top: 19px;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top-width: 16px;
  border-top-style: solid;
  border-top-color: #1ABC9C;
}

[slider] > div > [sign] > span {
  font-size: 12px;
  font-weight: 700;
  line-height: 28px;
}

[slider]:hover > div > [sign] {
  opacity: 1;
}
</style>

