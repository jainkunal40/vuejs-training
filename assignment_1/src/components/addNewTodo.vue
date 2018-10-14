<template lang="html">
  <form class="col-xs-12 col-sm-6">
    <label class="form-group">Please write To-Dos one by one and Hit Add TODO button: </label>
    <div class="form-group">
      <input class="form-control" v-model="todo" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click.prevent="addTodo"> Add To-Do </button>
    </div>
    <div v-if="showMaxWarning">
      <br>
      <div class="row">
        <div class="col-sm-12">
          <div class="alert alert-warning">
            You cannot add more then {{maxTodos}} To-Do's.
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <srcComponentsProgressBar :totalToDos="totalToDos" :maxTodos="maxTodos"></srcComponentsProgressBar>
    </div>
  </form>

</template>

<script lang="js">
import srcComponentsProgressBar from './progressBar.vue';
  export default {
    name: 'src-components-add-new-todo',
    props: ['totalToDos', 'maxTodos'],
    mounted() {

    },
    data() {
      return {
        todo: '',
        showMaxWarning: false
      }
    },
    methods: {
      addTodo() {
        //console.info('Submit new todo:', this.todo);
        if (this.maxTodos <= this.totalToDos) {
          this.showMaxWarning = true;
          return;
        } else {
          this.$emit('addTodoevent', this.todo);
          this.showMaxWarning = false;
          this.todo = '';
        }
      }
    },
    watch: {
      totalToDos: function () {
        if (this.maxTodos <= this.totalToDos) {
          this.showMaxWarning = true;
        } else {
          this.showMaxWarning = false;
        }
      }
    },
    components : {
         srcComponentsProgressBar
      }
  }
</script>

<style scoped>
</style>