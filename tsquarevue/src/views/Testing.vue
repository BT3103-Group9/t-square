<template>
    <ui-table :data="shownEntryList" :thead="thead" :tbody="tbody">
      <template #actions="{ data }">
        <ui-button @click="showEntry(data)">Show</ui-button>
      </template>
    </ui-table>
</template>

<script>
import { collection, getFirestore, getDocs } from "firebase/firestore";
import firebaseApp from '../firebase.js';

const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      tempList: [],
      thead: [
        'Name',
        'Rate/Hr',
        'Experience',
        'Actions'
      ],
      tbody: ['firstName', 'rate', 'yearsExperience', { slot: 'actions' }],
      searchTerm: '',
      budgetHigher: 1000,
      experience: 1
    };
  },
  mounted() {
    this.getList();
  },
  computed: {
    currentFilteredPrice: function() {
      return "Max Price $" + this.value1;
    },
    shownEntryList: function() {
      return this.tempList
        .filter(this.searchFilter)
        .filter(this.budgetFilter)
        .filter(this.experienceFilter); // chain however many filters you need
    },   
  },
  methods: {
    async getList () {
      const querySnapshot = await getDocs(collection(db, "profiles"));
      querySnapshot.forEach((doc) => {
        this.tempList.push(doc.data())
      });
    },
    searchFilter (entry) {
      return entry.firstName.toLowerCase().includes(this.searchTerm.toLowerCase());
    },
    budgetFilter (entry) {
      return entry.rate <= this.budgetHigher;
    },
    experienceFilter (entry) {
      switch (this.experience) {
        case 1:
          return entry.yearsExperience < 5;
        case 2:
          return entry.yearsExperience < 10;
        case 3:
        default:
          return entry.yearsExperience >= 10;
      }
    },
    showEntry(value) {
      const profile = value.username;
      this.$router.push({name:"profile", params: {word: profile}})
    }
  }

};
</script>
