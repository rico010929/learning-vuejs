const app = Vue.createApp({
    data() {
        return {
            count: 0
        };
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.count = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.count < 37) {
                return 'Not ther yet';
            } else if (this.count ===  37) {
                return this.count;
            }  else {
                return 'Too much!';
            }
        }
    },
    methods: {
        increaseValue(num) {
            this.count += num;
        },

    }
});

app.mount('#assignment');