var AJAXer = AJAXer || {}

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
  articleHTML += '<div>' + this.score + 'points by' + this.user_email + ' ' + this.created_at + 'ago' + '|' + this.comments_count + 'comments';
  return articleHTML
}