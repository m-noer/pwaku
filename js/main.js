var post = new Vue({
  el:'#laporan',
  data: {
    list: [
      {
        img:'images/profil1.jpg',
        name: 'Sarah Doe',
        time: '2 minutes ago',
        title: 'Title Laporin',
        progress: '0',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img:'images/profil2.jpg',
        name: 'John Doe',
        time: '7 minutes ago',
        title: 'Title Laporin',
        progress: '10',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img:'images/profil3.jpg',
        name: 'Mei Ling',
        time: '2 hour ago',
        title: 'Title Laporin',
        progress: '7',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        img:'images/profil4.jpg',
        name: 'Sudarmawan',
        time: '2 day ago',
        title: 'Title Laporin',
        progress: '73',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  }
});

Vue.component('navbar', {
  template:'<nav><div class="cell isi-laporan"><a href="home.html" class="active"><i class="fa fa-home fa-lg" aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-user fa-lg"  aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-dollar fa-lg"  aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-list-alt fa-lg"  aria-hidden="true"></i></a></div><div class="cell isi-laporan"><a href=""><i class="fa fa-bars fa-lg" aria-hidden="true"></i></a></div></nav>'
});

Vue.component('search', {
  template: '<div class="search-box" id="search"><div class="input-box"> <i class="fa fa-search" aria-hidden="true"></i> <input type="text" placeholder="Search"></div></div>'
});

var vm = new Vue({
  el: '#template'
});

function tes() {
  document.getElementById('content2').style.transform = "scale(1)"
};

// Our app here
Vue.component('todo-form', {
  template: '<form class="tulis-comment" @submit.prevent="todoEvent"> <input type="text" v-model="newTodo" placeholder="Tulis komentar disini...">' +
            '<input type="submit" value="POST" onclick="foot()"></form>',
  data: function () {
    return {
      newTodo: ''
    }
  },
  methods: {
    todoEvent: function () {
      this.$emit('todo-created', this.newTodo);
      this.newTodo = '';
    }
  }
});
Vue.component('todo-list', {
  template: '<ul><li class="comment" v-for="todo in todos"><div class="cell1"><div class="photo"> <img src="images/profil.jpeg" alt=""></div></div><div class="isi-comment"><h1>Yusa</h1><p>{{todo}}</p><p>a few seconds ago</p></div></li></ul>',
  props: ['todos']
});
new Vue({
  el: '#app',
  data: {
    'todos': []
  },
  methods: {
    addTodo: function (todo) {
      this.todos.push(todo);
    }
  }
});

var prevScrollpos = window.pageYOffset;
var x = prevScrollpos + 5;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < 50) {
    document.getElementById("search").style.top = "0";
  } else if (prevScrollpos > currentScrollPos) {
    document.getElementById("search").style.top = "0";
  } else {
    document.getElementById("search").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

  console.log("prev: " + prevScrollpos);
  console.log("x: " + x);
}


// Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}
