// var app = new Vue({
//   el: '#app',
//   data: {
//       message: 'Hello Vuegf!'
//   }
// });

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'You loaded this page on ' + new Date().toLocaleString()
//   }
// })

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// var app5 = new Vue({
//   el: '#app-dong',
//   data: {
//     message: "My name is Dong"
//   },
//   methods: {
//     reverseMessage: function() {
//       debugger
//       this.message = this.message.split('').reverse().join('');
//     }
//   }
// })

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    groceryList1: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})