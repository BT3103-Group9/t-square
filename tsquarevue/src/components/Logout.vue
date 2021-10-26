<template>
<button class="btn btn-sm btn-light" @click="signOut()" v-if="user" style="position: absolute; top:28px;">Logout</button>
<!-- <p id = "btn" @click="signOut()" v-if="user">  </p> -->
    
</template>

<script>

// import firebaseApp from '@/firebase.js'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


export default {
  name: 'Logout',

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
  })
  },

  methods: {
    signOut() {
      const auth = getAuth();      
      const user = auth.currentUser;  
      signOut(auth, user)
      this.$router.push({name:'Login'}) 
                      
    }
  }
}

</script>

<style scoped>
#btn{
    text-align: center;
    margin: auto;
}

.btn-light:hover, .btn-light:focus, .btn-light:active, .btn-light.active, .open>.dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #cca000;
    border-color: #7e91a1; /*set the color you want here*/
}
</style>