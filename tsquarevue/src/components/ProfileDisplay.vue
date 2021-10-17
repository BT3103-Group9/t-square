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

<section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              
<!-- Student Profile -->
<div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src="./images/tutordp.jfif" alt="Tutor dp">
            <h3>Michael Lim</h3>
            <a href="editprofile.html">Edit Profile</a> 
          </div>
          <div class="card-body">
            <p class="mb-0">
              <strong class="pr-1">Subject Taught:</strong> <br>
              GCE "A" Level Mathematics <br>
            </p>
          </div>
          <div class="card-body" style="background-color: rgb(32, 29, 25);  text-align: center; color: white; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
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
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th>Hourly Rate </th>
                <td>SGD 70</td>
              </tr>
              <tr>
                <th>Highest Education </th>
                <td>
                  <strong>Georgia Institute of Technology</strong> <br>
                  Master of Science in Analytics
                </td>
              </tr>
              <tr>
                <th>Teaching Experience</th>
                <td>3 years</td>
              </tr>
              <tr>
                <th>Ratings</th>
                <td>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div style="height: 26px"></div>
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Bio</h3>
          </div>
          <div class="card-body pt-0">
              <p>I graduated from Georgia Institute of Technology with a Master in Analytics, and am passionate about simplifying the way students learn Mathematics.</p>
          </div>
        </div>
        <div style="height: 26px"></div>
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Latest Experience</h3>
          </div>
          <div class="card-body pt-0">
              <p>
                <h5>Nanyang Technological University</h5>
                <h6>Associate Professor</h6>
                <h6>2018 - Present</h6>
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script> // INCOMPLETE
console.log("in PD")

import ccxt from "ccxt"
import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  data(){
  return{
    fbuser:"",
    count:"",

    }
  }, 

  mounted(){
  const auth = getAuth();      
  this.fbuser = auth.currentUser.email; 
  // this.fbuser = firebase.auth().currentUser.email
  this.display(this.fbuser)},

  methods:{
  //user becomes an email in display

  async display(user){    
    let z = await getDocs(collection(db,String(user)))   
    let ind = 1 
    var tp = 0

    z.forEach((docs) => {
      let yy = docs.data()
      var table = document.getElementById("table")
      var row = table.insertRow(ind)

      var coin = (yy.Coin)
      var price = (yy.Buy_Price)
      var quantity = (yy.Buy_Quantity)
      var ticker = (yy.Ticker)

      var cell1 = row.insertCell(0); var cell2 = row.insertCell(1); var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3); var cell5 = row.insertCell(4); var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6); var cell8 = row.insertCell(7);      

      cell1.innerHTML = ind; cell2.innerHTML = coin; cell3.innerHTML = ticker; cell4.innerHTML = price; 
      cell5.innerHTML = quantity; cell6.innerHTML = 0; cell7.innerHTML = 0

      cell7.className = "profits"
     
      var bu = document.createElement("button")
      bu.className = "bwt"
      bu.id = String(coin)
      bu.innerHTML ="Delete"
      bu.onclick =  ()=>{
        this.deleteinstrument2(coin,user)
      }
      cell8.appendChild(bu) 

      val(ticker)
    //   setInterval(()=>{
    //   val(ticker)
    //   },2000)    
      async function val(ticker){
        let binance = new ccxt.binance()
        let x = await binance.fetch_ohlcv(ticker,"5m")
        cell6.innerHTML =  x[499][4]
        cell7.innerHTML =  Math.round(quantity * (-parseFloat(price) + parseFloat(cell6.innerHTML)))       
        tp = tp + parseFloat(cell7.innerHTML)
        console.log("TP is ",tp)
        document.getElementById("totalProfit").innerHTML = (" Total Profit is :  $" + String(tp))      
      }   
      ind+= 1   
    }) 
  },                

     async deleteinstrument2(coin,user){      
        alert("You are going to delete " + coin)
        await deleteDoc(doc(db,user,coin))
        let tb = document.getElementById("table")
        //delete everything, make data empty and call the display again
        while (tb.rows.length >1){
            tb.deleteRow(1)
          }
        document.getElementById("totalProfit").innerHTML=""
        this.display(this.fbuser) 
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