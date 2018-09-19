<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <p>Exercise</p>
                <p>Build a Custom Directive which works like v-on (Listen for Events) which accepts a function as the parameter</p>
                <p>Eg - v-custom-on:click="function"</p>
                <!-- Hint - Think about native addEventListener -->
                <button v-custom-on:click="triggerThisFunction" class="btn btn-primary">Click on this button!!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
      }
    }
  },
  methods: {
    triggerThisFunction() {
      console.info("Event listner for button is working Fine!!!");
    }
  }
};
</script>

<style>
</style>