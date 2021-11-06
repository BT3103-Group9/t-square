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
            <h2 class="grid-title"><i class="fa fa-filter"></i> Filters</h2>
            <hr>
            
            <!-- BEGIN FILTER BY EXPERIENCE -->
            <div class="experience">
                <h4>Experience</h4>

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
            <!-- END FILTER BY EXPERIENCE -->
            
            <br>
            
            <!-- BEGIN FILTER BY RATING -->

            <div class="rating">
                <h4>Rating</h4>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">&nbsp; &#9734;&#9734;&#9734;&#9734;&#9734;</label>
                  </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">&nbsp; &#9734;&#9734;&#9734;&#9734;</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">&nbsp; &#9734;&#9734;&#9734;</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">&nbsp; &#9734;&#9734;</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">&nbsp; &#9734;</label>
                </div>

                
                
            </div>
            
            <!-- END FILTER BY RATING -->
            
            <br>
            
            <!-- BEGIN FILTER BY PRICE -->
            <div class="price">
                <h4>Budget</h4>
                Per Session <br>
                <div slider id="slider-distance">
                    <b-field :label="currentFilteredPrice">
                      <b-slider v-model="filterPrice" :min="0" :max="100"></b-slider>
                    </b-field>
                    <!-- <div>
                        <div inverse-left style="width:70%;"></div>
                        <div inverse-right style="width:70%;"></div>
                        <div range style="left:30%;right:40%;"></div>
                        <span thumb style="left:30%;"></span>
                        <span thumb style="left:60%;"></span>
                        <div sign style="left:30%;">
                            <span id="value">100</span>
                        </div>
                        <div sign style="left:60%;">
                            <span id="value">250</span>
                        </div>
                    </div>
                    <input type="range" tabindex="0" value="100" max="400" min="0" step="1" oninput="
                    this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
                    var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
                    var children = this.parentNode.childNodes[1].childNodes;
                    children[1].style.width=value+'%';
                    children[5].style.left=value+'%';
                    children[7].style.left=value+'%';children[11].style.left=value+'%';
                    children[11].childNodes[1].innerHTML=this.value;" />
                  
                    <input type="range" tabindex="0" value="250" max="400" min="0" step="1" oninput="
                    this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
                    var value=(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.value)-(100/(parseInt(this.max)-parseInt(this.min)))*parseInt(this.min);
                    var children = this.parentNode.childNodes[1].childNodes;
                    children[3].style.width=(100-value)+'%';
                    children[5].style.right=(100-value)+'%';
                    children[9].style.left=value+'%';children[13].style.left=value+'%';
                    children[13].childNodes[1].innerHTML=this.value;" /> -->
                </div>

            </div>
            <!-- END FILTER BY PRICE -->
            <br>
            <button class="btn btn-primary" type="submit">Apply Filters</button>
        </div>

        <!-- END FILTERS -->
        <!-- BEGIN RESULT -->
        <div class="col-md-9 ">
            <div class="text-left">
            <h2><i class="fa fa-file-o"></i> Result</h2>
            <hr>
            <!-- BEGIN SEARCH INPUT -->
            <!-- <b-field label="Filter">
              <b-input placeholder="Search Product" v-model="filterName" />
            </b-field> -->
            <div class="input-group">
              <input type="text" class="form-control" id="query">
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" onclick="return clicked()"><i class="fa fa-search"></i></button>
              </span>
            </div>

            
            <!-- END SEARCH INPUT -->
            <p>Showing all results matching "Acting"</p>
            
            <div class="padding"></div>
            
            <div class="row">

                <!-- BEGIN ORDER RESULT -->
                
                <div class="col-sm-6">
                <div class="btn-group">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    Sort by <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Rating</a></li>
                    <li><a href="#">Price (low to high)</a></li>
                    <li><a href="#">Price (high to low)</a></li>
                  </ul>
                </div>
                </div>
                <!-- END ORDER RESULT -->
              
                <div class="col-md-6 text-right">
                <div class="btn-group">
                    <button type="button" class="btn btn-default active"><i class="fa fa-list"></i></button>
                    <button type="button" class="btn btn-default"><i class="fa fa-th"></i></button>
                </div>
              </div>
              
            </div>
            
            <!-- BEGIN TABLE RESULT -->
            <div class="table-responsive">
              <table class="table table-hover">
                <tbody>
                  <tr v-for = "item in display" :key = "item.mobile"  class = "row-item">
                  <td class="number text-center"></td>
                  <td class="image"><img src= "https://maximonline.com/wp-content/uploads/2019/12/Gal-Gadot-1.jpg" alt=""></td>
                  <td class="product" id = "name"><strong></strong></td><br><br>
                  <td class="product" id = "subject"></td><br>
                  <td class ="product" id = "yearsExperience"></td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span></td>
                  <td class="price text-right" id = "rate"></td>
                </tr> 

<!--                 
                <tr>
                  <td class="number text-center">1</td>
                  <td class="image"><img src="https://maximonline.com/wp-content/uploads/2019/12/Gal-Gadot-1.jpg" alt=""></td>
                  <td class="product"><strong>Gal Gadot</strong><br><br>Qualification: Starred in Wonder Woman <br>Teaching Experience: 11 years</td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span></td>
                  <td class="price text-right">$50</td>
                </tr>
                <tr>
                  <td class="number text-center">2</td>
                  <td class="image"><img src="https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY209_CR5,0,140,209_AL_.jpg" alt=""></td>
                  <td class="product"><strong>Ryan Reynolds</strong><br><br>Qualification: Starred in Deadpool <br>Teaching Experience: 20 years </td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></span></td>
                  <td class="price text-right">$400</td>
                </tr>
                <tr>
                  <td class="number text-center">3</td>
                  <td class="image"><img src="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Kristen-Bell.jpg.webp" alt=""></td>
                  <td class="product"><strong>Kristen Bell</strong><br><br>Qualification: Starred in The Good Place <br>Teaching Experience: 18 years </td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i></span></td>
                  <td class="price text-right">$150</td>
                </tr>
                <tr>
                  <td class="number text-center">4</td>
                  <td class="image"><img src="https://m.media-amazon.com/images/M/MV5BMTUxNzY3NzYwOV5BMl5BanBnXkFtZTgwNzQ3Mzc4MTI@._V1_UX140_CR0,0,140,209_AL_.jpg" alt=""></td>
                  <td class="product"><strong>Zac Efron</strong><br><br>Qualification: Starred in High School Musical trilogy <br>Teaching Experience: 13 years </td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></span></td>
                  <td class="price text-right">$300</td>
                </tr>
                <tr>
                  <td class="number text-center">5</td>
                  <td class="image"><img src="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Megan-Fox.jpg.webp" alt=""></td>
                  <td class="product"><strong>Megan Fox</strong><br><br>Qualification: Starred in Transformers: Revenge of the Fallen <br>Teaching Experience: 16 years</td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></td>
                  <td class="price text-right">$400</td>
                </tr>
                <tr>
                  <td class="number text-center">6</td>
                  <td class="image"><img src="https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY209_CR12,0,140,209_AL_.jpg" alt=""></td>
                  <td class="product"><strong>Ryan Gosling</strong><br><br>Qualification: Starred in The Notebook <br>Teaching Experience: 17 years</td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span></td>
                  <td class="price text-right">$200</td>
                </tr>
                <tr>
                  <td class="number text-center">7</td>
                  <td class="image"><img src="https://cdn.wealthygorilla.com/wp-content/uploads/2019/02/Hottest-Women-Selena-Gomez.jpg.webp" alt=""></td>
                  <td class="product"><strong>Selena Gomez</strong><br><br>Qualification: Starred in Spring Breakers <br>Teaching Experience: 11 years </td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></span></td>
                  <td class="price text-right">$10</td>
                </tr>
                <tr>
                  <td class="number text-center">8</td>
                  <td class="image"><img src="https://m.media-amazon.com/images/M/MV5BMTQ5ODI0MDc4M15BMl5BanBnXkFtZTgwNTM5MDk3MTE@._V1_UX140_CR0,0,140,209_AL_.jpg" alt=""></td>
                  <td class="product"><strong>Liam Hemsworth</strong><br><br>Qualification: Starred in Thor <br>Teaching Experience: 16 years</td>
                  <td class="rate text-right"><span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></span></td>
                  <td class="price text-right">$350</td>
                </tr> -->
              </tbody></table>
            </div>
            <!-- END TABLE RESULT -->
            </div>
            <!-- BEGIN PAGINATION -->
            <div class="pagination">
                <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
                </nav>
                </div>
            <!-- END PAGINATION -->
          </div>
          <!-- END RESULT -->
        </div>
       
      </div>
    </div>
  </div>
  <!-- END SEARCH RESULT -->
</div>
</div>
<Footer/>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import BackToTop from "../components/BackToTop.vue";


export default {
  name: 'FilteredSearch',

  components: {
		NavBar,
		Footer,
    BackToTop
	},

  // props: {
  //   tutor: Object;
  // }

  // data() {
  //     return {
  //       filterPrice: 50,
  //     }
  // } 

  // computed: {
  //   currentFilteredPrice: function () {
  //     return "Price: $" + this.filterPrice;
  //   },
  //   getFilteredItems: function () {
  //     return this.getItems.filter((item) => {
  //       const validQuantity = item.quantity > 0;
  //       const validPrice = item.price < this.filterPrice;
  //       const validType =
  //         this.filterType.length === 0 || this.filterType.includes(item.type);
  //       const validName = item.name
  //         .toLowerCase()
  //         .includes(this.filterName.toLowerCase());
  //       const validCompany =
  //         this.filterCompany.length === 0 ||
  //         this.filterCompany.includes(item.business);

  //       return (
  //         validQuantity && validPrice && validType && validName && validCompany
  //       );
  //     });
  //   },
  //   },
  // },

  methods:{
    async display(){    
      let docs = await getDoc(doc(db, "profiles", user))
      let userInfo = docs.data()

      let results = userInfo.orderByChild('subject').startAt(document.getElementById("query").value).endAt(document.getElementById("query").value+"\uf8ff");
      return results.filter((item) => { 
        const validName = item.name
          .toLowerCase()
          .includes(this.filterName.toLowerCase());
      })
      document.getElementById("name").innerHTML = userInfo.firstName + " " + userInfo.lastName;
      document.getElementById("subject").innerHTML = userInfo.subject;
      document.getElementById("rate").innerHTML = "SGD " + userInfo.rate;
      document.getElementById("yearsExperience").innerHTML = userInfo.yearsExperience + " years";
      document.getElementById("role").innerHTML = userInfo.role;
    },

    
  /*  
    let z = await getDocs(collection(db,'tutor-details'))   
    let ind = 1 
    var tp = 0

    z.forEach((docs) => {
      let tutor = docs.data()
      var table = document.getElementsByClassName("table")
      var row = table.insertRow(ind)

      var Name = (tutor.Name)
      var Image = (tutor.Image)
      var Qualification = (tutor.Qualification)
      var Rating = (tutor.Rating)
      var TeachingExperience = (tutor.TeachingExperience)

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
        document.getElementById("totalProfit").innerHTML = (" Total Profit is :  " + String(tp))      
      }   
      ind+= 1   
    }) 
  },            */
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

