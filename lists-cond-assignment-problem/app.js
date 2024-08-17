const app = Vue.createApp({
    data() {
        return {
            inputText: "",
            tasks: [],
            visibilityList: true
        };
    },
    computed: {
        buttonUpdate() {
            return this.visibilityList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputText);
            this.inputText = "";
        },
        toggleVisibilityList() {
            this.visibilityList = !this.visibilityList;
        }
    }
});

app.mount("#assignment");
