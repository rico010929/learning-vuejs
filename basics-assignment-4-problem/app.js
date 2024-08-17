const app = Vue.createApp({
    data() {
        return {
            inputText: '',
            isUser1: false,
            isUser2: false,
            buttonState: false
        };
    },
    watch: {
        inputText(value) {
            if (value === 'user1'){
                this.isUser1 = true;
            } else if (value === 'user2') {
                this.isUser2 = true;
            } else {
                this.isUser1 = false;
                this.isUser2 = false;
            }
        }
    },
    methods: {}
});

app.mount('#assignment');