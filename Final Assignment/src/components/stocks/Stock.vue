<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-4">
        <div class="card my-3">
            <h5 class="card-header">
                {{ stock.name }}
                <div class="float-right font-weight-light">Price: {{ stock.price | toCurrency }}</div>
            </h5>
            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <input v-model.number="quantity" type="number" min="0" class="form-control" :class="{ danger: checkAvlFunds }" placeholder="Quantity">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-12">
                            <button :disabled="quantity <= 0 || checkAvlFunds" :class="(checkAvlFunds ? 'btn-danger' : 'btn-primary')" type="button" class="btn btn-block" @click="buy">
                                                    {{ checkAvlFunds ? 'Insufficient funds' : 'Buy' }}
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
import { mapGetters, mapActions } from "vuex";
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
    checkAvlFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    ...mapActions(["buyStock"]),
    buy() {
      this.buyStock({
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