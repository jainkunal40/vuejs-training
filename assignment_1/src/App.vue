<template>
  <div class="App">
    <header class="App-header">
      <h1 class="App-title">To-Do Application</h1>
    </header>
    <div class="App-intro">
      <div class="container">
        <div class="row">
        <srcComponentsAddNewTodo @addTodoevent="addTodoToList" :totalToDos="todos.length" :maxTodos="maxTodos"/>
        <srcComponentsDisplayTodos :todoList="todos" @deleteTodoevent="deleteTodoFromList"></srcComponentsDisplayTodos>       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import srcComponentsAddNewTodo from "./components/addNewTodo.vue";
  import srcComponentsDisplayTodos from "./components/displayTodos.vue"
  export default {
    name: "app",
    components: {
      srcComponentsAddNewTodo,
      srcComponentsDisplayTodos
    },
    data: function () {
      return {
        todos: [],
        maxTodos: 12
      };
    },
    methods: {
      addTodoToList(todo) {
        //console.info('Todo recived from child to add to list:',todo);
        if(this.maxTodos < this.todos.length) {
          return alert('You cannot add To-do more than 12')
        }
          this.todos.push(todo);
      },
      deleteTodoFromList(index) {
        //console.info('index recived from child to delete from list:',index);
        this.todos.splice(index, 1);
      }
    }
  };
</script>

<style scoped>
  .App-header {
    background-color: rgb(93, 10, 126);
    height: 100px;
    padding: 20px;
    color: white;
    text-align: center;
  }

  .App-title {
    font-size: 1.5em;
  }

  .App-intro {
    padding-top: 40px;
  }
</style>