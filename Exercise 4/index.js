var app = new Vue({
    el: '#exercise',
    data: {
        appalyHighlightClass: false,
        intervalid1: '',
        activeClass: 'bg-success',
        errorClass: 'text-white',
        newCss: '',
        highlightClass: [],
        newMuiltipleCss: [],
        progress: 0
    },
    watch: {
        appalyHighlightClass: function (value) {
            this.highlightClass = value ? ['highlight'] : ['shrink'];
        }
    },
    methods: {
        startEffect: function () {
            var vm = this;
            setInterval(function () {
                vm.appalyHighlightClass = !vm.appalyHighlightClass;
            }, 1000)
        },
        changeStyleForDiv: function (event) {
            this.newCss = event.target.value
        },
        changeStyleForSecondDiv: function (event) {
            this.newMuiltipleCss = event.target.value.split(" ");
        },
        startProgress: function () {
            var vm = this
            setInterval(function () {
                if (vm.progress < 100) {
                    vm.progress++;
                }

            }, 100)
        }
    }
});