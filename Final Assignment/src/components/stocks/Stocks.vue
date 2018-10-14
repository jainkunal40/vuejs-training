<template>
    <div class="col-12">
        <div class="row">
            <app-stock v-for="(stock, stock_id) in stocks" :key="stock_id" :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import Stock from './Stock.vue';
    
    export default {
        components: {
            appStock: Stock
        },
        computed: {
            ...mapGetters([
                'stocks'
            ])
        }
    }
</script>