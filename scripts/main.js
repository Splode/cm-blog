$(document).ready(function() {
  // Mobile menu icon toggle
  $(".menu-icon").click(function() {
    $(".menu").slideToggle("slow");
  });

  // console.log(posts);
});

new Vue({
  el: '#app-container',
  data: {
    searchObj: {
      searchItem: '',
      open: false,
    },
    posts: posts,
  },
  computed: {
    filterSearch: function() {
      var vm = this;
      return this.posts.filter(function(element) {
        return element.title.toLowerCase().match(vm.searchObj.searchItem.toLowerCase());
      });
    },
  },
  methods: {
    searchClose: function() {
      this.searchToggle();
      this.searchClear();
    },
    searchClear: function() {
      this.searchObj.searchItem = '';
    },
    searchToggle: function() {
      this.searchObj.open = !this.searchObj.open;
    },
  },
  created: function() {
    console.log('vue initiated');
    console.log(posts);
    console.log(this.filterSearch);
  }
});
