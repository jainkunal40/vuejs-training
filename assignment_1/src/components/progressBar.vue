<template lang="html">
  <div class="col-sm-12">
    <label class="form-group">Progress for To-do's</label>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0"
        aria-valuemax="100" :style="{width: (totalToDos / maxTodos) * 100 + '%'}">
        {{ totalToDos }} / {{ maxTodos }}
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: 'src-components-progress-bar',
    props: ['totalToDos', 'maxTodos'],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped>
</style>