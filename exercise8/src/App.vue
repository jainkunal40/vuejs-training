<template>
    <div class="container">
          
        <form v-if="!submitform">
            <hr>
            <div class="row">
                <div>
                    <fullname v-model="fullName"></fullname>
                    <div class="form-group">
                        <label>Mail</label>
                        <input type="text" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="form-group">
                        <label class="radio-inline">
                            <input type="radio" value="Yes" v-model="storeData"> Yes
                        </label>
                        <label class="radio-inline">
                            <input type="radio" value="No" v-model="storeData"> No
                        </label>
                    </div>
                   <button
                            type="submit"
                            @click.prevent="submitform = true"
                            class="btn btn-warning">Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitform">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./FullName.vue";
export default {
  components: {
    Fullname: FullName
  },
  data() {
    return {
      fullName: "Kunal Jain",
      email: "",
      password: "",
      storeData: "Yes",
      submitform: false
    };
  }
};
</script>

<style>
</style>
