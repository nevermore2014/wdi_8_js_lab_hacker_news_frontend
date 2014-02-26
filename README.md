# AJAXer News

*It's baaaaack!* To help us get in some more practice with AJAX, I've updated my Hacker News clone with a JSON API. The URL is http://haxor-news-json.herokuapp.com and the following methods are supported:

```
GET    /articles
POST   /articles                       # { article: { title: '...', url: '...' } }
PATCH  /articles/:article_id/vote      # { direction: '...' }
GET    /articles/:article_id/comments
POST   /articles/:article_id/comments  # { comment: { body: '...' } }
PATCH  /comments/:comment_id/vote      # { direction: '...' }
```

Example data objects are listed next to methods that require data. The `direction` parameter for the vote paths can have the values `'up'`, `'down'`, or `'neutral'`.

**Note:** Since the API doesn't support secret keys or anything fancy like that, I created a very insecure "back door": Register your own account through the web interface, then get its ID (displayed next to your email when signed in) and add an appropriate `backdoor_user_id` parameter to any API requests you make.

Here's an example AJAX request that would get all articles:

```
$.ajax({
  type: 'GET',
  url: 'http://haxor-news-json.herokuapp.com/articles',
  dataType: 'json',
  data: { backdoor_user_id: 1 }
}).done(function(response){
  console.log(response);
});
```

## Assignment

Use jQuery and AJAX to create a local frontend to "Haxor News".

* When the page loads, fetch all articles and display them. Each should have the article title linked to its URL, and display all other properties returned by the API.
* The page should have a button at the top that reloads all articles.
* The page should have a form at the top that allows creating new articles. Newly-created articles should be inserted at their correct position in the list (based on the fact that the list is sorted by score). If a submitted article has validation errors, these should be displayed near the form.
* Articles should have Upvote and Downvote links that behave as they do in the web interface. The user's current vote should be visually indicated, and the article's score *and position in the list* should be updated appropriately.

## EXPERT MODE

Turn each article's comment count into a link that dynamically loads that article's comments and expands a sub-view to display them (the user should then be able to collapse this view). Allow adding new comments and voting on them, and maintain correct sorting of comments based on score.
