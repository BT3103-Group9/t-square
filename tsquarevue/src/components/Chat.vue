<template>
<NavBar/>
<div class="container">
<div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            <div class="srch_bar">
              <div class="stylish-input-group">
                <input type="text" class="search-bar"  placeholder="Search" >
                <span class="input-group-addon">
                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                </span> </div>
            </div>
          </div>
          <div class="inbox_chat">
            <div class="chat_list active_chat">
              <div class="chat_people">
                <div class="chat_img"> <img src= "../../../images/guy1.jpg"> </div>
                <div class="chat_ib">
                  <h5>Timothy Tan <span class="chat_date">Today</span></h5>
                  <p>Which days are you available for your class?</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src= "../../../images/guy2.jpg"> </div>
                <div class="chat_ib">
                  <h5>Jerry Lim<span class="chat_date">Yesterday</span></h5>
                  <p>I am free on Saturdays and Sundays after 3pm</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src= "../../../images/girl1.jpg"> </div>
                <div class="chat_ib">
                  <h5>Sheryl Loh<span class="chat_date">Dec 20</span></h5>
                  <p>Locations are quite flexible for me except far East</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5>Jay Lim<span class="chat_date">Dec 16</span></h5>
                  <p>Hello, nice to meet you! What would you like to learn?</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="../../../images/girl2.jpeg"> </div>
                <div class="chat_ib">
                  <h5>Angela Ng<span class="chat_date">Dec 15</span></h5>
                  <p>How many lessons are you looking each week?</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src= "../../../images/girl3.jpg"> </div>
                <div class="chat_ib">
                  <h5>Chloe Lim<span class="chat_date">Dec 15</span></h5>
                  <p>We can have classes either at your place or at mine, depending on your convenience.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" > </div>
                <div class="chat_ib">
                  <h5>Lina Tan<span class="chat_date">Dec 13</span></h5>
                  <p>What do you aim to achieve out of my classes?</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png"> </div>
                <div class="chat_ib">
                  <h5>John Lee<span class="chat_date">Dec 13</span></h5>
                  <p>Which days are you looking at?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mesgs">
          <div class="msg_history">
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="../../../images/guy1.jpg"> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Hello, may I ask what courses are you looking at? </p>
                  <span class="time_date"> 11:01 AM    |    Dec 19</span></div>
              </div>
            </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>I am looking at both Chemistry and Maths</p>
                <span class="time_date"> 11:30 AM    |    Dec 19</span> </div>
            </div>
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="../../../images/guy1.jpg"> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Ah I see. Which year are you in?</p>
                  <span class="time_date"> 12:41 PM    |    Yesterday</span></div>
              </div>
            </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>I am currently in Junior College Year 1.</p>
                <span class="time_date"> 12:45 PM    |    Today</span> </div>
            </div>
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="../../../images/guy1.jpg"> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Which days are you available for your class?</p>
                  <span class="time_date"> 11:39 PM    |    Today</span></div>
              </div>
            <div class="outgoing_msg">
              <div class="sent_msg">
                <p>I am looking at Sat and Sun.</p>
                <span class="time_date"> 11:45 AM    |    Today</span> </div>
                </div>
            
            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="../../../images/guy1.jpg"> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>What do you think of Sat 3pm?</p>
                  <span class="time_date"> 11:46 PM    |    Yesterday</span></div>
              </div>
            </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    <Footer/>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: 'FilteredSearch',

    components: {
        NavBar,
        Footer,
    },
}
</script>

<style>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css';
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js';
@import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js';

.container{max-width:90%; margin:auto;}

#topBackground {
  background-color: #000000;
  overflow: hidden;
}

#firstContainer {
  height: 10px;
  padding-right: 2%;
  padding-top: 1%;
  padding-left: 2%;
}

#search {
  background: #fff;
  border-radius: 24px;
  box-shadow: none;
  border: 1px solid #dfe1e5;
  padding: 10px;
  width: 50%;
  outline: none;
  text-align: center;
  font-size: 15px;
  margin-top: -10px;
  margin-left: 150px;
}

#input-icons i {
  position: absolute;
  margin-top: -4px;
  margin-left: 160px;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

#brandlogo {
  max-width: 60px;
  max-height: 60px;
  filter: invert(98%) sepia(100%) saturate(0%) hue-rotate(315deg) brightness(102%) contrast(103%);
}

#signUpLogin {
  float: right;
  margin-top: 5px;
  margin-right: 10px;    
  color: #ffffff;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  text-decoration: none;
  padding-top: 1%;
}

img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac{ margin: 20px 0 0;}


.recent_heading {float: left; width:40%;}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}

.recent_heading h4 {
  color:#C4A484;
  font-size: 21px;
  margin: auto;
}
.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon { margin: 0 0 0 -27px;}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat { height: 60%; overflow-y: scroll;}

.active_chat{ background:#ebebeb;}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: black;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #C4A484 none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}

.sent_msg {
  float: right;
  width: 46%;
}

.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #C4A484;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {border-top: 1px solid #c4c4c4;position: relative;}
.msg_send_btn {
  background: #C4A484 none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0; margin-top: 12%;}
.msg_history {
  height: 70%;
  overflow-y: auto;
}
</style>
