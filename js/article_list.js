var AJAXer = AJAXer || {};

AJAXer.ArticleList = {};

AJAXer.ArticleList.init = function(getUrl, articleListEl){
  this.url = getUrl.
  this.articleListEl = articleListEl;

  $('#get-articles').click(this.AJAXer.getArticles.bind(this));

  $('#get-articles').trigger('click');

  $('#new-article').submit(this.createArticle.bind(this));
};