
// import {contacts} from "./db.js";
import {contacts} from "./db.js";


const {createApp} = Vue;

createApp ({

  data() {
    return {
      contacts, 
      activeContact: 0,
      newMsg: '',
      obj: {
        date: '',
        message: '',
        status: ''
      }
              
    }
      
  },

  methods: {
    addMsg() {
      this.obj={ 
        date: '7/4/91',
        message: this.newMsg,
        status: 'sent' 
      }
      this.contacts[this.activeContact].messages.push(this.obj);

      this.obj={ 
        date: '',
        message: '',
        status: '',
       
      }
      this.newMsg= ''
    },

    msgBot () {

      this.newMsg = {
        date: '',
        message: 'Ok!',
        status: 'received',
      }
      this.contacts[this.activeContact].messages.push(this.newMsg)
    }
  },

  mounted () {
    console.log(contacts);
  },

}).mount ('#app');