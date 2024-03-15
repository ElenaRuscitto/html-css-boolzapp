

// import {contacts} from "./db.js";
import {contacts} from "./db.js";


const {DateTime} = luxon;


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
        status: '',
      },
       
      nameToSearch: '',
    
      dataOra: '',
    }
      
  },

  methods: {

    

    addMsg() {

      this.printData();

      this.obj={ 
        date: this.dataOra,
        message: this.newMsg,
        status: 'sent' 
      };
      this.contacts[this.activeContact].messages.push(this.obj);

      this.obj={ 
        date: '',
        message: '',
        status: '',
       
      };
      this.newMsg= ''
    },

    msgBot () {

      this.printData();

      this.newMsg = {
        date: this.dataOra,
        message: 'Ok!',
        status: 'received',
      }
      this.contacts[this.activeContact].messages.push(this.newMsg)
    },

    deleteMsg (indice) {
      this.contacts[this.activeContact].messages.splice(indice, 1);

    },

    // data
    printData() {

      this.dataOra = DateTime.now()
              .setLocale('it')
              .toFormat('dd/MM/yyyy      HH:mm:ss')
          return this.dataOra;
    },  

    

  },

  mounted () {
    console.log(contacts);

        
  },

  computed: {

  
    nameFiltrate() {

      contacts.forEach(contact => {
        
        if (contact.name.toLowerCase().includes(this.nameToSearch.toLowerCase())){
         
          contact.visible = true;
         
        } else {
           contact.visible = false;
        }
        
      })
      return contacts
      // return pizzeria.pizze.filter(pizza => pizza.nome_pizza.toLowerCase().includes(this.pizzaToSerach.toLowerCase()))

      // return contacts.contact.filter(elementoMsg => elementoMsg.name.toLowerCase().includes(this.elementoMsg.toLowerCase()))
  
    }
  },

}).mount ('#app');