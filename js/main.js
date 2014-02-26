$(document).ready(function() {
  // Put any document-ready code in here
  // Other code should go in separate files organized by namespace/class
  AJAXer.ArticleList.init('http://haxor-news-json.herokuapp.com', $('#articles'));
});
