<template>
<p id = "btn" @click="signOut()" v-if="user"> Logout </p>
    
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
</style>