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
  
function generateTitleLinks(customSelector = ''){
  const titleList = document.querySelector(optTitleListSelector);
  console.log(titleList);
  console.log('customSelector', customSelector)
  function clearMessages(){
	    titleList.innerHTML = '';
  }
  clearMessages();

  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

const optArticleTagsSelector = '.post-tags .list';
function generateTags(){
  
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const articleTag = article.querySelector(optArticleTagsSelector);
    console.log('articleTag', articleTag);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('articleTags', articleTags) ;
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#' + tag + '"><span>' + tag + '</span></a></li>';
      console.log('linkHTML', linkHTML);
      /* add generated code to html variable */
      articleTag.insertAdjacentHTML('beforeend', linkHTML);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    
  /* END LOOP: for every article: */
}

}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href'); 
  console.log('href', href);
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('tag', tag);
  /* find all tag links with class active */
  
    /* START LOOP: for each active tag link */

      /* remove class active */

    /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

    /* START LOOP: for each found tag link */

      /* add class active */

    /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}



function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();


