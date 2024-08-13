const app = Vue.createApp({
    data() {
        return {
            enteredText1: 'OUTPUT',
            enteredText: '',
            confirmedText: 'OUTPUT',
        };
    },
    methods: {
        showAlert() {
            alert("Warning!!!");
        },
        getInput1(event, text) {
            this.enteredText1 = text + ' : ' + event.target.value;
        },
        getInput(event, text) {
            this.enteredText = text + ' : ' + event.target.value;
        },
        confirmInput() {
            this.confirmedText = this.enteredText;
        }
    }
});

app.mount('#assignment');