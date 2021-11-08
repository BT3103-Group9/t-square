<template>
<div class="container">
  <ui-table
    fullwidth
    :data="shownEntryList"
    :thead="thead"
    :tbody="tbody"
    >
    <!-- <template #th-name></template>
    <template #th-rate></template>
    <template #th-experience></template>
    <template #actions="{ tempList }">
      <ui-icon><a href="/profile/" + tempList.username>face</a></ui-icon>
    </template> -->

  </ui-table>

</div>
	
</template>

<script>
import { collection, getFirestore, getDocs } from "firebase/firestore";
import firebaseApp from '../firebase.js';
import { getAuth } from "firebase/auth";
import { configureCompat } from 'vue';

configureCompat({
  COMPONENT_V_MODEL: false
})

const db = getFirestore(firebaseApp);

export default {
  name: "Testing",

  data() {
    return {
      experienceValue: 1,
      tempList: [], // onMount: get data from database
      searchTerm: '', // This should be synced with your search input via v-model
      thead: [
        {
          value: 'Name',
          sort: 'asc',
          columnId: 'username'
        },
        {
          value: 'Rate/ Hour ($)',
          sort: 'asc',
          columnId: 'rate'
        },
         {
          value: 'Experience (Years)',
          sort: 'asc',
          columnId: 'yearsExperience'
        },

        'Actions',
      ],
      tbody: [
        'username',
        'rate',
        'yearsExperience',
        {
          slot:"actions"
        }
      ],
    };
  },

  mounted() {
    const auth = getAuth(); 
    // this.user = auth.currentUser.email;
    this.user = auth.currentUser;
    this.getList()
  },

  computed: {
    currentFilteredPrice: function() {
        return "Max Price $" + this.budgetHigher;
      },

    shownEntryList: function() {
      const output = this.tempList
        .filter(this.searchFilter)


      return output;
    },   
  },

  methods: {
    async getList() {
      const querySnapshot = await getDocs(collection(db, "profiles"));
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          this.tempList.push(doc.data())
      });
    },
    searchFilter(entry) {
      return entry.subject.toLowerCase().includes(this.searchTerm.toLowerCase());
    },
  }
};

	
</script>

<style scoped>
#bg { 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}

/* Footer {
	position: absolute;
	bottom:0;
	left:0;
	width:100%;
	height:300px;
} */

img.animated-gif{
  width: 200px;
  height: auto;
  
}

</style>