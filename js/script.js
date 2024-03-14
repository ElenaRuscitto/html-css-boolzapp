
// import {contacts} from "./db.js";
import {contacts} from "./db.js";


const {createApp} = Vue;

createApp ({

  data() {
    return {
      contacts, 
      activeContact: 0,
      
    }
      
  },

  methods: {

  },

  mounted () {
    console.log(contacts);
  },

}).mount ('#app');