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
  const articleId = article.getAttribute('id');
  console.log(articleId) ;
    /* get the article id */
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* find the title element */
  
    /* get the title from the title element */
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    /* create HTML of the link */
  titleList.innerHTML = titleList.innerHTML + linkHTML;
    /* insert link into titleList */

}
}
generateTitleLinks();


