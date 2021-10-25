<template>
<!-- Back to top button -->
<button type="button" class="btn btn-danger btn-lg btn-floating rounded-circle" id="btn-back-to-top">
    <i class="fas fa-arrow-up"></i>
</button>

</template>

<script>

// import firebaseApp from '@/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default {
    name: 'BackToTop',

    data() {
        return {
            user:false, 
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.user = user;      
            }
        });

        let mybutton = document.getElementById("btn-back-to-top");
        window.onscroll = function() {scrollFunction()};
        mybutton.addEventListener("click", backToTop);
        
        function scrollFunction() { 
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        function backToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }, 
}

</script>

<style>

#btn-back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
}
</style>