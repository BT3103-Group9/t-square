var firebaseConfig = {
    apiKey: "AIzaSyA1PJclAOm-RuTEGEaq8tM4CVkPE4GIwQM",
    authDomain: "bt3103-final-project-bc034.firebaseapp.com",
    projectId: "bt3103-final-project-bc034",
    storageBucket: "bt3103-final-project-bc034.appspot.com",
    messagingSenderId: "726547598812",
    appId: "1:726547598812:web:0ff2869d0b048a8f40d319",
    measurementId: "G-T20L1MB3G1"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

console.log("Firebase connected");

// get current username
var name = window.prompt("Enter your name (For testing and recording into database purpose)");

// Getting all message and listeing real time chat

db.collection("chats").orderBy("date").onSnapshot(function(snapshot){

    snapshot.docChanges().forEach(function(change,ind){
        var data = change.doc.data();
        // if new message added
        if(change.type == "added"){

            if(data.senderName == name){ //Which message i sent 

                var html = `<li class="left clearfix">
                    <span class="chat-img pull-left">
                        <img src="http://placehold.it/50/55C1E7/fff&text=${data.senderName}" alt="User Avatar" class="img-circle" />
                    </span>
                    <div class="chat-body clearfix">
                        <div class="header">
                            <strong class="primary-font">${data.senderName}</strong> <small class="pull-right text-muted">
                                <span class="glyphicon glyphicon-time"></span>${data.date}</small>
                        </div>
                        <p id="${change.doc.id}-message">
                            ${data.message}
                        </p>
                        <span onclick="deleteMessage('${change.doc.id}')" class="glyphicon glyphicon-trash"></span> 
                    </div>
                </li>`;

                $('.chat').append(html);

            }else{

                var html = `<li class="right clearfix">
                    <span class="chat-img pull-right">
                        <img src="http://placehold.it/50/FA6F57/fff&text=${data.senderName}" alt="User Avatar" class="img-circle" />
                    </span>
                    <div class="chat-body clearfix">
                        <div class="header">
                            <small class=" text-muted">
                                <span class="glyphicon glyphicon-time"></span>${data.date}</small>
                            <strong class="pull-right primary-font">${data.senderName}</strong>
                        </div>
                        <p id="${change.doc.id}-message">
                            ${data.message}
                        </p>
                        <span onclick="deleteMessage('${change.doc.id}')" class="glyphicon glyphicon-trash"></span> 
                    </div>
                </li>`;

                $('.chat').append(html);

            }
            if(snapshot.docChanges().length - 1 == ind){ // we will scoll down on last message
                // auto scroll
                $(".panel-body").animate({ scrollTop: $('.panel-body').prop("scrollHeight")}, 1000);
            }
        }

        if(change.type == "modified"){

        }

        if(change.type == "removed"){

            $("#"+change.doc.id+"-message").html("this message has been deleted")

        }

    })  

})

function sendMessage(object){
    console.log(object)
    db.collection("chats").add(object).then(added => {
        console.log("message sent ",added)
    }).catch(err => {
        console.err("Error occured",err)
    })

}

// on click function
$('.send-button').click(function(){

    var message = $('#btn-input').val();

    if(message){
        // insert message 

        sendMessage({
            senderName : name,
            message : message,
            date : moment().format("YYYY-MM-DD HH:mm")
        })

        $('#btn-input').val("")
    }

})

// also we will send message when user enter key
$('#btn-input').keyup(function(event) {

    // get key code of enter
    if(event.keyCode == 13){ // enter
       var message = $('#btn-input').val();

        if(message){
            // insert message 

            sendMessage({
                senderName : name,
                message : message,
                date : moment().format("YYYY-MM-DD HH:mm")
            })

            $('#btn-input').val("")
        }
    }
    // console.log("Key pressed");
})