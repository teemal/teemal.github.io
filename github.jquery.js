
jQuery.githubUserRepositories = function(teemal, callback) {
  jQuery.getJSON("https://api.github.com/users/teemal/repos?callback=?", callback);
}
 
jQuery.fn.loadRepositores = function(teemal) {
  this.html("<span>Querying GitHub for repositories...</span>");
 
  var target = this; 
  $.githubUserRepositories(teemal, function(data) {
    var repos = data.data;
    sortByNumberOfWatchers(repos);
 
    var list = $('<dl/>');
    target.empty().append(list);
    $(repos).each(function() {
      list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
      list.append('<dd>' + this.description + '</dd>');
    });
  });
 
  function sortByNumberOfWatchers(repos) {
    repos.sort(function(a,b) {
      return b.watchers - a.watchers;
    });
  }
};
