const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastname: '',
      fullname: '',
    };
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.lastname=== '') {
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    submitForm() {
      alert('Submitted!');
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    outputFullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Lee';
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
