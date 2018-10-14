<template>
    <div class="row my-5">
        <div class="col-12">
            <h1 class="display-4">Trade or View your Portfolio</h1>
            <h5>You may Save & Load your Data</h5>
            <h5>Click on 'End Day' to begin a New Day!</h5>
            <hr>
            <p class="lead">Your Funds: ${{ funds }}</p>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'funds'
            ])
        }
    }
</script>