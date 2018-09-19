<template>
    <div>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" :value="firstName" @input="changeFirstName">
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" :value="lastName" @input="changeLastName">
        </div>
    </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      fullName: "",
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    changeFirstName() {
        this.firstName = event.target.value;
        this.emitFullName();
    },
    changeLastName() {
        this.lastName = event.target.value;
        this.emitFullName();
    },
    emitFullName() {
        this.fullName = this.firstName + " " + this.lastName;
        console.info('full name: ',this.fullName);
        this.$emit("input", this.fullName);
    }
  },
  created : function() {
    this.firstName = this.value.split(" ")[0];
    this.lastName = this.value.split(" ")[1];
  }
};
</script>