// function submit(){
//     var form = document.getElementById('form-box')
//     var name = document.getElementById('name')
//     var message = document.getElementById('message')
//     console.log(name.value)
//     console.log(message.value)
//     form.style.display = "none"
// }

const app = Vue.createApp({

    data() {
        return {
            
            message_board: [],
            message_name: "",
            message_content: ""
            

        }
    },
    methods: {


        add_message() {
            this.message_board.push({name: this.message_name, text: this.message_content}); 
            console.log(this.message_board)
            this.message_name = ''; 
            this.message_content = '';
        },

        clear_message(){
            this.message_board = []
        }

    }

})

app.mount("#main")