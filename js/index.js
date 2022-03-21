var app = Vue.createApp({
    
    // Data Properties
    data() {
        return {
            image : "photo_2022-01-11_14-19-50.jpg"
        }
    },

    methods: {
        change_img() {
            let api_endpoint_url = `https://dog.ceo/api/breeds/image/random`
            
            axios.get(api_endpoint_url)
            .then(response => {
                
                // Inspect the response.data
                console.log(response.data.message)
                this.image = response.data.message
                
            })
            .catch(error => {
                console.log(error.message)
            })
        }
    }

})

app.mount("#img")

