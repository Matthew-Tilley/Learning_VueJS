
let vm = new Vue({
    
        el: "#app",

        data: {
            url: "https://www.google.com",
            name: "",
        },


        methods: {

            tester: function(name)
            {
                console.log(this.name + " is the name!");
            }

        }

})