<template>
                  <div class="experience">
                <h5>Experience</h5>
                <ui-form-field>
                    <ui-radio v-model="experienceValue" input-id="1" value="1"></ui-radio>
                    <label for="1" class="ml-1">&nbsp; &#60; 5 years</label>
                </ui-form-field> <br>
                <ui-form-field>
                    <ui-radio v-model="experienceValue" input-id="2" value="2"></ui-radio>
                    <label for="2" class="ml-1">5-10 years</label>
                </ui-form-field> <br>
                <ui-form-field>
                    <ui-radio v-model="experienceValue" input-id="3" value="3"></ui-radio>
                    <label for="3">&nbsp; &#62; 10 years</label>
                </ui-form-field>
                <p>test: {{experienceValue}}</p>
              </div>
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
