<template>
    <div class="col-12">
    
        <div v-if="portfolio.length === 0" class="text-center my-4 alert alert-warning" role="alert">
            You dont have any stock to show here
        </div>
    
        <div class="row">
            <app-stock v-for="(stock, stock_id) in portfolio" :stock="stock" :key="stock_id"/>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue';
    import {
        mapGetters
    } from 'vuex'
    export default {
        components: {
            appStock: Stock
        },
        computed: {
            ...mapGetters([
                'portfolio'
            ])
        }
    }
</script>