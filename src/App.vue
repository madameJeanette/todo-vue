<template>
  <div id="app">
    <img src="./assets/cat-logo-01.png" width="100px" height="75px">
    <h1 class="mt-3">To do's</h1>
    <div class="container">

      <section>
         <div class="row justify-content-center mt-4">
           <input v-model="inputField" v-on:keyup.enter="addTodo" class="mr-1" placeholder="Todo Item" />
           <button @click="addTodo" class="btn btn-primary">Add Todo</button>
        </div>
      </section>

       <section class="container">
          <div class="row">
             <div class="offset-md-3 col-md-6 mt-3">
                <ul class="list-group justify-content-center">
                   <li class="row list-group-item border mt-2 col-xs-1" v-for="todo in todoList">
                      <div class="row align-items-center">
                        <input type="checkbox" v-on:change="toggle(todo)" v-bind:checked="todo.complete" class="col-sm-1 border border-danger">
                        <del v-if="todo.complete" class="col-sm-8">
                           <h5>{{ todo.name }}</h5>
                        </del>
                        <span v-else class="col-sm-8">
                           <h5>{{ todo.name }}</h5>
                        </span>
                        <span @click="deleteTodo(todo)" class="offset-sm-1 col-sm-2 delete text-right">X</span> 
                        <!-- click listener -->
                      </div>
                   </li>
                </ul>
             </div>
          </div>
       </section>

    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import test from './components/test';
export default {
  name: 'app',
  components: {
     test
 },
  methods: {
    addTodo: function(todo) {  //Add the to do
      todo = this.inputField; //input field
      this.todoList.push({name: todo, complete: false}); //push name and false/true
      this.inputField = '';
      console.log(this.todoList); //log to do list
   },
   deleteTodo: function(todo) {      //delete to do button
      var index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1); //delete one todo
      console.log(this.todoList);
   },
   toggle: function(todo) {
      todo.complete = !todo.complete; //toggle to do completion
   }
 },
  data () {
    return {
      inputField: '', //show input in  input field to user
      todoList: [] //show input array to user
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #aa4b6b;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
h1, h2 {
  font-weight: normal;
}
h5 {
   margin-bottom: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.delete {
   color: pink;
   cursor: pointer;
}
.delete:hover {
   color: red;
}



</style>