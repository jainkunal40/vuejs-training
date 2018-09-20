<template lang="html">

  <div v-if="todoList.length > 0" class="col-xs-12 col-sm-6">
    <label class="form-group">To-Do List</label>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Please click on a To-Do to delete it!
        </div>
      </div>
    </div>
    <ul class="list-group">
      <li v-for="(todo, index) in todoList" :key="index" class="list-group-item" style="cursor: pointer" @click="deleteToDo(index)">
        {{index + 1}}# {{ todo }}
      </li>
    </ul>
  </div>
  <div v-else class="col-xs-12 col-sm-6">
    <br>
    <div class="row">
      <div class="col-sm-12">
        <div class="alert alert-success">
          You dont have any To-Do's pending! Please add one.
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="js">
  export default {
    name: 'src-components-display-todos',
    props: ['todoList'],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      deleteToDo(index) {
        this.$emit('deleteTodoevent', index);
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  
</style>