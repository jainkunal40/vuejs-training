<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="card my-3">
            <h5 class="card-header">
                {{ stock.name }}
                <span class="font-weight-light">({{ stock.quantity }})</span>
                <div class="float-right font-weight-light">{{ stock.price | toCurrency }}</div>
            </h5>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <input placeholder="Quantity" v-model.number="quantity" type="number" min="0" class="form-control" :class="{danger : checkAvaliableQuantity}">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <button :disabled="quantity <= 0 || checkAvaliableQuantity" :class="(checkAvaliableQuantity ? 'btn-danger' : 'btn-primary')" type="button" class="btn btn-block" @click="sell">
                            {{ checkAvaliableQuantity ? 'Too Much Quantity' : 'Sell' }}
                          </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
    import {
        mapGetters,
        mapActions
    } from "vuex";
    
    export default {
        props: {
            stock: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                quantity: 0
            };
        },
        computed: {
            ...mapGetters(["funds"]),
            checkAvaliableQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions(["sellStock"]),
            sell() {
                this.sellStock({
                    id: this.stock.id,
                    quantity: this.quantity,
                    price: this.stock.price
                });
                this.quantity = 0;
            }
        },
        filters: {
            toCurrency: function(value) {
                if (typeof value !== "number") {
                    return value;
                }
                var formatter = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0
                });
                return formatter.format(value);
            }
        }
    };
</script>