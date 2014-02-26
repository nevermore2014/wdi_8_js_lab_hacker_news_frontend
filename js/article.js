var AJAXer = AJAXer || {};

AJAXer.Vote = {};

AJAXer.Article = function(id, title, url, score, user_email, created_at, comments_count, current_vote){
  this.id = id;
  this.title = title;
  this.url = url;
  this.score = score;
  this.user_email = user_email;
  this.created_at = created_at;
  this.comments_count = comments_count;
  this.current_vote = current_vote;
}

AJAXer.Article.prototype.showContent = function(){
  var articleHTML = '<li id=article_' + this.id + '>';
  articleHTML += this.title;
  articleHTML += '<div>' + this.score + 'points by ' + this.user_email + ' ' + this.created_at + ' ago ' + '| ' + this.comments_count + ' comments' + '<button class="upvote" id="upvote_' + this.id + '">Upvote</button>' + '<button class="upvote" id="downvote_' + this.id + '">Downvote</button>'
  $('<li id="article_' + this.id + '">').click()
  $('<li id="article_' + this.id + '">').trigger('click');
  return articleHTML

  AJAXer.Vote.initVote($('#upvote'))
}

AJAXer.Vote.initVote = function(direction){
  this.direction = direction;

  $('#upvote' + this.id).click(this.upVote.bind(this));

  $('#upvote').trigger('click');

  $('#downvote' + this.id).click(this.downVote.bind(this));

  $('#downvote').trigger('click');

}

AJAXer.Vote.upVote = function(){

  $.ajax({
    type: 'PATCH',
    url: 'http://haxor-news-json.herokuapp.com/articles/:article_id/vote',
    dataType: 'json',
    data: { backdoor_user_id: 6, direction: 'up' },
    success:function(response){
      var vote_id_array = this.id.split("_"),
          article_id = vote_id_array[1];
      article = articles[article_id];
      article.score += 1;
    }
  });
}

AJAXer.Vote.downVote = function(){
  $.ajax({
    type: 'PATCH',
    url: 'http://haxor-news-json.herokuapp.com/articles/:article_id/vote',
    dataType: 'json',
    data: { backdoor_user_id: 6, direction: 'down' },
    success:function(response){
      var vote_id_array = this.id.split("_"),
          article_id = vote_id_array[1];
      article = articles[article_id];
      article.score -= 1;
    }
  })
}