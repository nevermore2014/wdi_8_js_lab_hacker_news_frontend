var AJAXer = AJAXer || {}

AJAXer.Article = function(id, title, url, point, author, time_past, num_comment){
  this.id = id;
  this.title = title;
  this.url = url;
  this.point = point;
  this.author = author;
  this.time_past = time_past;
  this.num_comment = num_comment;
}

AJAXer.Article.prototype.showContent = function(){
  var articleHTML = '<li id=article_' + this.id + '>';
  articleHTML += this.title;
  articleHTML += '<div>' + this.point + 'points by' + this.author + ' ' + this.time_past + 'ago' + '|' + this.num_comment + 'comments';
  return articleHTML
}