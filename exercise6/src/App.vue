<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Project Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li @click="projectSelected(index)"
                            class="list-group-item"
                            style="cursor: pointer"
                            v-for="index in 5"
                            v-bind:key="index">
                        Project #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <ProjectDetails :projectDetails="projectDetails"/>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Project are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

import ProjectDetails from "./components/projectDetails.vue";

export default {
  name: "app",
  components: { ProjectDetails },
  data() {
    return {
      projectDetails: 'Project Details are currently not updated'
    };
  },
  methods: {
    projectSelected(index) {
        console.info(index);
      this.projectDetails = 'Project #'+index+' detail are recently updated';
    }
  }
};

</script>

<style>
</style>
