<template>
    {{ sliderValue() }}
    <ui-slider v-model="value1" id="slider" @change="sliderValue()"></ui-slider>
    
    <!-- <ui-slider ></ui-slider>
    {{value}}
    
    <input id="slider" type="range" min="50" max="100" step="10"  value="50">
    <output id="output"></output> -->
</template>

<script>
export default {
    data() {
        return {
        // value1 = 10
        //   value: 0
        };
    },

    mounted() {
        this.sliderValue()
    },
    
    methods: {
        sliderValue() {
            console.log("hai")
            return this.value1
        }
    }
};
</script>

<style>
.mdc-slider .mdc-slider__track--active{
    background-color: black !important;
}
</style>