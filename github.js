var githubInfo = {
    username: "teemal" // This is the only variable that needs to be changed to access other github accounts
}
$.githubUserRepositories = function(username, callback) {
    jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
}

$.fn.loadRepo = function(username) {
    //this.html("<span>Querying GitHub for repositories...</span>");
    var target = this;
    $.githubUserRepositories(username, function(data) {
        var repos = data.data;
        sortByNumberOfWatchers(repos);

        var list = $('<ul class="list-group"></ul>');
        target.empty().append(list);
        $(repos).each(function() {
            list.append('<li class="list-group-item"><a href="https://www.github.com/'+ this.full_name +'">' + this.name + '</a></li>');
            if (this.description == null) {
                list.append('<li class="list-group-item"> No description </li>');
            } else {
                list.append('<li class="list-group-item">' + this.description + '</li>');
            }
        });
    });

    function sortByNumberOfWatchers(repos) {
        repos.sort(function(a, b) {
            return b.watchers - a.watchers;
        });
    }
};

$(document).ready(function() {
    $("#github-projects").loadRepo(githubInfo.username); // 
})