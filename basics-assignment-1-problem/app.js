const app = Vue.createApp({
    data() {
        return {
            myName: '이형준',
            myAge: 22,
            imgSource: './images/Vue.png',
        }
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');