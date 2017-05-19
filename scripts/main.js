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
    searchItem: '',
    posts: posts,
  },
  computed: {
    filterSearch: function() {
      var vm = this;
      return this.posts.filter(function(element) {
        return element.title.toLowerCase().match(vm.searchItem.toLowerCase());
      });
    },
  },
  created: function() {
    console.log('vue initiated');
    console.log(posts);
    console.log(this.filterSearch);
  }
});
