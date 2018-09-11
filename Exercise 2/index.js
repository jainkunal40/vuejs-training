var app = new Vue({
    el: '#exercise',
    data: {
        myName: 'Kunal Jain',
        myAge: 24,
        value: ''
    },
    methods: {
        greet: function (event) {
            alert('Hello ' + this.myName + '!')
        },
        storeValue: function (event) {
            this.value = event.target.value
        }
    }
});