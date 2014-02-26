var AJAXer = AJAXer || {};

AJAXer.ArticleList = {};

AJAXer.ArticleList.init = function(getUrl, articleListEl){
  this.url = getUrl.
  this.articleListEl = articleListEl;

  $('#get-articles').click(this.AJAXer.getArticles.bind(this));

  $('#get-articles').trigger('click');

  $('#new-article').submit(this.createArticle.bind(this));
};


AJAXer.ArticleList.getArticles = function(event){
  var articlesHTML = ''
  $.get( this.url, function(data){
    var articles = data.articles;
    for (var i = 0; i < articles.length; i++){
      article = new AJAXer.article)articles[i].id,
      articles[i].title, articles[i].url, article[i].score, article[i].user_email, article[i].created_at, article[i].comments_count, article[i].current_vote);
      articlesHTML += article.showContent();
    };

    this.articleListEl.empty();
    this.articleListEl.append(articlesHTML);
  }.bind(this));
}

AJAXer.ArticleList.createArticle = function(event){

  var $form = $(event.target),
      $title = $form.find("input[name='title']"),
      $url = $form.find("input[name='url]"),
      action = $form.attr('action'),
      articleListEl = this.articleListEl;
      event.preventDefault();

  $.ajax({
    type: 'GET',
    url: 'http://haxor-news-json.herokuapp.com/articles',
    dataType: 'json',
    data: { backdoor_user_id: 6 }
  }).done(function(response){
    event.preventDefault();
    var article = new AJAXer.Article(
      response.article.id,
      response.article.title,
      response.article.url,
      response.article.score,
      response.article.user_email,
      response.article.created_at,
      response.article.comments_count,
      response.article.current_vote);
    articleListEl.append(append.showContent());
  });
}