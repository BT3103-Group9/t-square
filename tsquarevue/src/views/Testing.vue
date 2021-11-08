<template>
<div class="container">
    <ui-table
  v-model="selectedRows"
  fullwidth
  :data="data"
  :thead="thead"
  :tbody="tbody"
  :tfoot="tfoot"
  row-checkbox
  selected-key="id"
>
  <template #th-dessert>
    Dessert
    <ui-icon v-tooltip="'100g serving'" aria-describedby="th-cell-1">
      error_outline
    </ui-icon>
  </template>
  <template #dessert="{ data }">
    <div class="dessert">{{ data.dessert }}</div>
  </template>
  <template #actions="{ data }">
    <ui-icon @click="show(data)">description</ui-icon>
    <ui-icon @click="show(data)">edit</ui-icon>
    <ui-icon @click="show(data)">delete</ui-icon>
  </template>

  <ui-pagination
    v-model="page"
    :total="total"
    show-total
    @change="onPage"
  ></ui-pagination>
</ui-table>
</div>
    
</template>

<script>
import { collection, getFirestore, getDocs } from "firebase/firestore";
import firebaseApp from '../firebase.js';

import { configureCompat } from 'vue';

configureCompat({
  COMPONENT_V_MODEL: false
})

const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      data: [],
      thead: [
        {
          value: 'ID',
          sort: 'asc',
          columnId: 'id'
        },
        {
          slot: 'th-dessert',
          class: 'good',
          sort: 'none',
          columnId: 'dessert'
        },
        'Calories',
        'Fat (g)',
        'Carbs (g)',
        'Protein (g)',
        'Actions',
      ],
      tbody: [
        'id',
        {
          slot: 'dessert'
        },
        {
          field: 'calories',
          numeric: true,
          class: 'test'
        },
        {
          field: 'fat',
          fn: data => {
            return data.fat.toFixed(1);
          }
        },
        'carbs',
        {
          field: 'protein',
          class: data => {
            return data.protein > 5 ? 'red' : 'green';
          }
        },
        {
          slot: 'actions'
        }
      ],
      tfoot: [
        {
          field: 'id',
          fnName: 'count'
        },
        null,
        {
          field: 'calories',
          fnName: 'sum',
          align: 'right',
          class: 'test'
        },
        {
          field: 'fat',
          fnName: 'avg'
        },
        {
          field: 'carbs',
          fnName: 'max'
        },
        {
          field: 'protein',
          fnName: 'min'
        }
      ],
      selectedRows: [1, 2, 4],
      page: 1,
      total: 12
    };
  },
  async created() {
    let { data } = await this.$http.get('/api/getData');
    this.data = data;
  },
  methods: {
    show(data) {
      console.log(data);
    },
    onPage(page) {
      // your code
    }
  }
};
</script>

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

.mdc-data-table{
  width: 100%;
}

.mdc-data-table__header-cell{
  margin: 0 auto;
}
</style>

