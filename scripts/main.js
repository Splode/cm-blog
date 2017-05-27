$(document).ready(function() {
  // Mobile menu icon toggle
  $(".menu-icon").click(function() {
    $(".menu").slideToggle("slow");
  });

  // console.log(posts);
});

// new Vue({
//   el: '#app-container',
//   data: {
//     searchObj: {
//       searchItem: '',
//       open: false,
//     },
//     posts: posts,
//   },
//   computed: {
//     filterSearch: function() {
//       var vm = this;
//       return this.posts.filter(function(element) {
//         return element.title.toLowerCase().match(vm.searchObj.searchItem.toLowerCase());
//       });
//     },
//   },
//   methods: {
//     searchClose: function() {
//       this.searchToggle();
//       this.searchClear();
//     },
//     searchClear: function() {
//       this.searchObj.searchItem = '';
//     },
//     searchToggle: function() {
//       this.searchObj.open = !this.searchObj.open;
//     },
//   },
//   created: function() {
//     console.log('vue initiated');
//     console.log(posts);
//     console.log(this.filterSearch);
//   }
// });

// Scroll Collapse / Expand
new Vue({
  el: '#app-container',
  data: {
    // Classes assigned to nav on scroll
    navBar: {
      collapse: false,
      open: false,
    },
    scrollState: 0, // Used to keep track of scroll position
  },
  methods: {
    scrollDetect: function (home, down, up) {
      // Current scroll position
      var currentScroll = this.scrollTop();
      if (this.scrollTop() === 0) {
        home();
      } else if (currentScroll > (this.scrollState)) {
        down();
      } else {
        up();
      }
      // Set previous scroll position
      this.scrollState = this.scrollTop();
    },
    // Returns current scroll position
    scrollTop: function () {
      return window.scrollY;
    },
    // Called when scroll is in initial position
    scrollHome: function () {
    },
    // Called when scrolled down
    scrollDown: function () {
      this.navBar.collapse = true;
      this.navBar.open = false;
    },
    // Called when scolled up
    scrollUp: function () {
      this.navBar.collapse = false;
      this.navBar.open = true;
    },
  },
  created: function () {
    var vm = this;
    window.addEventListener('scroll', function() {
      vm.scrollDetect(vm.scrollHome, vm.scrollDown, vm.scrollUp);
    });
  }
});
