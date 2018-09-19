<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <p> 1. Pass some text to the 3 components but not using props </p>

                <app-orange>Passing data to Orange Template</app-orange>
                <app-black>Passing data to Black Template</app-black>
                <app-red>Passing data to Red Template</app-red>
                <hr/>
                
                <p> 2. Dynamically switching the components using buttons </p>
                <br>
                <button class="btn btn-warning" @click="isSelected = 'appOrange'">
                    Load Orange Template
                </button>
                <button class="btn btn-default" @click="isSelected = 'appBlack'">
                    Load Black Template
                </button>
                <button class="btn btn-danger" @click="isSelected = 'appRed'">
                    Load Red Template
                </button>
                <hr>
                <component :is="isSelected">
                    <p>{{ isSelected }} component loaded</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Orange from "./components/Orange.vue";
import Black from "./components/Black.vue";
import Red from "./components/Red.vue";
export default {
  components: {
    appOrange: Orange,
    appBlack: Black,
    appRed: Red
  },
  data: function() {
    return {
      isSelected: "appOrange"
    };
  }
};
</script>

<style>
</style>