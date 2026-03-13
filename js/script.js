'use strict';

function titleClickHandler(event){
  const clickedElement = this;
  event.preventDefault();
  console.log('Link was clicked!');
  const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    clickedElement.classList.add('active');
    console.log('clickedElement:', clickedElement);

    const activeArticles = document.querySelectorAll('.posts .post.active');

    for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    }
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector) ;

    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);

    targetArticle.classList.add('active');
    console.log('targetArticle:', targetArticle);
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){
  const titleList = document.querySelector(optTitleListSelector);
  function clearMessages(){
	    titleList.innerHTML = '';
  }
  clearMessages();
  /* remove contents of titleList */
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
      
  /* for each article */
  const articleId = articles.getAttribute('id');
  console.log(articleId) ;
    /* get the article id */
  const articleTitle = article.querySelector(optTitleSelector).innerHTML
    /* find the title element */
  const title = innerHTML.getAttribute();
    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}
}
generateTitleLinks();


