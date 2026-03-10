'use strict';

function titleClickHandler(event){
  const clickedElement = this;
  event.preventDefault();
  console.log('Link was clicked!');


const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
clickedElement.classList.add('active');
console.log('clickedElement:', clickedElement);

const activeArticles = document.querySelectorAll('.posts .post.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
const articleSelector = clickedElement.getAttribute('href');
console.log(articleSelector) ;
  /* get 'href' attribute from the clicked link */
const targetArticle = document.querySelector(articleSelector);
console.log(targetArticle);
  /* find the correct article using the selector (value of 'href' attribute) */
targetArticle.classList.add('active');
console.log('targetArticle:', targetArticle);
  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
