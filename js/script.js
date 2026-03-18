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




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  
function generateTitleLinks(){
  const titleList = document.querySelector(optTitleListSelector);
  function clearMessages(){
	    titleList.innerHTML = '';
  }
  clearMessages();

  let html = '';
  const articles = document.querySelectorAll(optArticleSelector);
  for(let article of articles){
  const articleId = article.getAttribute('id');
  console.log(articleId) ;
  const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log('linkHTML:', linkHTML);
  html = html + linkHTML;
  titleList.insertAdjacentHTML('beforeend', linkHTML);
  }
  console.log(html);

  const links = document.querySelectorAll('.titles a');
  console.log('links', links);

  for(let link of links){
  link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

const  = '.post-tags .list';
function generateTags(){
    const articles = document.querySelectorAll(optArticleSelector);
    for(let article of articles){
    const articleTag = article.getAttribute('data-tags');
    console.log('articleTag', artcicleTag);
    const tagList = article.querySelector(optArticleTagsSelector);
    }
}


