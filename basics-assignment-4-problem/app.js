const app = Vue.createApp({
  data() {
    return {
      inputText: "",
      inputBackgroundColor: "",
      isVisible: true,
    };
  },
  computed: {
    pClasses() {
      return {
        user1: this.inputText === "user1",
        user2: this.inputText === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible
      };
    },
  },
  methods: {
    clickButton() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
