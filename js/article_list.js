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
      articles[i].title, articles[i].
      articlesHTML += article.showContent();
    };

    this.articleListEl.empty();
    this.articleListEl.append(articlesHTML);
  }.bind(this));
}