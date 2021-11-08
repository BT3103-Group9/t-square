<template>
    <div class="container">
        <ui-slider v-model="value1"></ui-slider>
        <ui-slider v-model="value2"></ui-slider>    
    </div>
</template>

<script>
import { configureCompant } from 'vue'


export default {
    compatConfig: {
        COMPONENT_V_MODEL: false
    },

    data() {
        return {
            value1: 50,
            value2: [30, 70]
        };
    }
};
</script>

<style>
.mdc-slider .mdc-slider__track--active{
    background-color: black !important;
}
</style>