$(document).ready(function() {
  // Mobile menu icon toggle
  $(".menu-icon").click(function() {
    $(".menu").slideToggle("slow");
  });

  // console.log(posts);
});

// new Vue({
//   el: '#app-header',
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
  el: '#app-header',
  data: {
    // Classes assigned to nav on scroll
    navBar: {
      collapse: false,
      open: false,
    },
    scrollState: 0, // Used to keep track of scroll position

    // Search
    searchObj: {
      searchItem: '',
      open: false,
    },
    posts: posts,
  },

  computed: {
    // Search
    filterSearch: function() {
      var vm = this;
      var searchItem = this.searchObj.searchItem.toLowerCase();
      // filter posts by title and tags against search query
      return this.posts.filter(function(element) {
        // concatenate tags into single string
        var tags = element.tags.reduce(function(acc, item) {
          acc += item.toLowerCase();
          return acc;
      }, "")
        return (element.title.toLowerCase().match(searchItem) || tags.match(searchItem));
      });
    },
    searchOpen: function () {
      return (this.searchObj.searchItem.length === 0 || this.searchObj.open) ? false : true;
    },
  },

  methods: {
    // Scroll Expansion
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
      // Collapse if search is not open
      if (!this.searchOpen) {
        this.navBar.collapse = true;
        this.navBar.open = false;
      }
    },
    // Called when scolled up
    scrollUp: function () {
      // Expand if search is not open
      if (!this.searchOpen) {
        this.navBar.collapse = false;
        this.navBar.open = true;
      }
    },

    // Search
    searchClose: function () {
      this.searchClear();
    },
    searchClear: function () {
      this.searchObj.searchItem = '';
    },
    searchToggle: function () {
      this.searchObj.open = !this.searchObj.open;
    },
  },

  created: function () {
    var vm = this;
    window.addEventListener('scroll', function () {
      vm.scrollDetect(vm.scrollHome, vm.scrollDown, vm.scrollUp);
    });

    // Search
    console.log(posts);
  }
});
