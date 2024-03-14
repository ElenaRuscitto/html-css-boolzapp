
// import {contacts} from "./db.js";
import {contacts} from "./db.js";


const {createApp} = Vue;

createApp ({

  data() {
    return {
      contacts
    }
      
  },

  methods: {

  },

  mounted () {
    console.log(contacts);
  },

}).mount ('#app');