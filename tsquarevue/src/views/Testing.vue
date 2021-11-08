<template>
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
    <ui-table :data="shownEntryList" :thead="thead" :tbody="tbody"></ui-table>
</template>

<script>
import { collection, getFirestore, getDocs } from "firebase/firestore";
import firebaseApp from '../firebase.js';

const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
        value1: 100,
        tempList: [],
        thead: [
            'Name',
            'Rate/Hr',
            'Experience',
        ],
        tbody: ['firstName', 'rate', 'yearsExperience'],
        searchTerm: '',
        budgetLower: 1,
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
      searchFilter(entry) {
          return entry.subject.toLowerCase().includes(this.searchTerm.toLowerCase());
      },
      budgetFilter(entry) {
          return entry.rate <= this.budgetHigher;
      },
      experienceFilter(entry) {
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
  }
};
</script>
