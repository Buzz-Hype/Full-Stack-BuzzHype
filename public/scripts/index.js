/* eslint-disable import/extensions */

import {
  fetchLoggedInUser,
  handleFetch,
  getFetchOptions,
  setNav,
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);
  let userid = user.id;

  const [secret, _err] = await handleFetch('/api/logged-in-secret');

  let posts = await handleFetch('/api/post')

  posts = posts[0]
  let postsection = document.getElementById('post_section');
  let cardsContainer = document.getElementById('cardsContainer')
  posts.forEach(post =>{
    if(userid === post.user_id){
      let div = document.createElement('div');
    let user = document.createElement('h1');
    let text = document.createElement('p');
    let button = document.createElement('button')
    let deletebut = document.createElement('button')
    deletebut.innerHTML = "Delete post"
    deletebut.id = post.id
    deletebut.className = 'delete'
//------------------
 //whole card
 let card = document.createElement('div');
 card.classList.add('card')
 // card.style.maxWidth = '50%';
 card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

 //top of card, username
 let cardHeaderUser = document.createElement('p');
 cardHeaderUser.classList.add('card-header-title')
 cardHeaderUser.style.color = '#D36B00';
 cardHeaderUser.style.webkitTextStroke = '.25px black';
 //creating card div for text
 let cardTextDiv = document.createElement('div');
 cardTextDiv.classList.add('card-content')
 cardTextDiv.style.backgroundColor = '#827397';

 let cardText = document.createElement('p');
 cardText.classList.add('content')
 cardText.style.color = '#FDE2F3';

 let cardFooter = document.createElement('footer')
 cardFooter.classList.add('card-footer')
 
 let cardFooterDiv = document.createElement('div')
 cardFooterDiv.style.width = '100%';
 cardFooterDiv.style.height = '75%';
 

 let commentButton = document.createElement('a')
 commentButton.classList.add('card-footer-item')
 commentButton.innerText = 'View Comments'

 let deleteComment = document.createElement('a')
 deleteComment.id = post.id
 deleteComment.classList.add('card-footer-item')
 deletebut.classList.add('delete')
 deleteComment.innerText = 'Delete Comment'

 commentButton.id = post.id

 cardFooterDiv.appendChild(commentButton)
 cardFooterDiv.appendChild(deleteComment)
 cardText.innerHTML = post.post_text
 cardHeaderUser.innerHTML = post.username
 card.appendChild(cardHeaderUser)
 cardTextDiv.appendChild(cardText)
 card.appendChild(cardTextDiv)
 cardFooter.appendChild(cardFooterDiv)
 card.appendChild(cardFooter)
 cardsContainer.appendChild(card)
 postsection.appendChild(cardsContainer)

 card.style.width = '20%';

    }else {
      //whole card
      let card = document.createElement('div');
      card.classList.add('card')
      card.classList.add('animate__animated')
      card.classList.add('animate__backInUp')
      card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
      let cardHeaderUser = document.createElement('p');
      cardHeaderUser.classList.add('card-header-title')
      cardHeaderUser.style.color = '#D36B00';
      cardHeaderUser.style.webkitTextStroke = '.25px black';
      let cardTextDiv = document.createElement('div');
      cardTextDiv.classList.add('card-content')
      cardTextDiv.style.backgroundColor = '#827397';

      let cardText = document.createElement('p');
      cardText.classList.add('content')
      cardText.style.color = '#FDE2F3';

      let cardFooter = document.createElement('footer')
      cardFooter.classList.add('card-footer')
      

      let commentButton = document.createElement('a')
      commentButton.classList.add('card-footer-item')
      commentButton.innerText = 'View Comments'
      commentButton.id = post.id
      cardText.innerHTML = post.post_text
      cardHeaderUser.innerHTML = post.username
      card.appendChild(cardHeaderUser)
      cardTextDiv.appendChild(cardText)
      card.appendChild(cardTextDiv)
      cardFooter.appendChild(commentButton)
      card.appendChild(cardFooter)
      cardsContainer.appendChild(card)
      postsection.appendChild(cardsContainer)

      card.style.width = '20%';
    }
    
  })
};

main();


let topBar = document.querySelector('#main-nav')
topBar.style.display = "none";







let modal = document.querySelector('#modal')
let commentsModalSpace = document.querySelector('#commentsModalSpace')

let titleModal = document.querySelector('#modalTitle')
titleModal.style.color = '#E3CCAE'

let topModal = document.querySelector('.modal-card-head')
topModal.style.backgroundColor = '#5C469C';

let middleModal = document.querySelector('.modal-card-body')
middleModal.style.backgroundColor = '#1D267D';

let bottomModal = document.querySelector('.modal-card-foot')
bottomModal.style.backgroundColor = '#D4ADFC'
bottomModal.classList.add('is-justify-content-center')
bottomModal.classList.add('is-align-items-center')

let submit = document.querySelector('.commentSumbitButton')
submit.classList.add('button')
submit.classList.add('is-rounded')

let closeModal = document.getElementById('close-commentcreate')
closeModal.classList.add('button')


let button =document.getElementById('post_section');
button.addEventListener('click', getcomments)


async function getcomments(e){
  let text = e.target.innerHTML
  let posts_id = e.target.id


  if(text === 'View Comments'){
    commentsModalSpace.innerText = '';
    let user = await  fetchLoggedInUser()
    let comments = await handleFetch(`/api/post/${posts_id}/comment`)
    modal.classList.add('is-active')
    comments =comments[0]
    comments.forEach(comment => {
      let commentLi = document.createElement('li')
      commentLi.style.color = '#E3CCAE'
      commentLi.classList.add('is-size-5')
      let username = document.createElement('h1')
      let br = document.createElement('br')
      username.innerHTML = comment.username + ':'
      username.style.color = '#E3CCAE'
      commentLi.innerText = comment.post_text
      commentsModalSpace.appendChild(username)
      commentsModalSpace.appendChild(commentLi)
      commentsModalSpace.appendChild(br)
      if(user.id = comment.user_id){
        let delcomment = document.createElement('button')
        delcomment.innerHTML = "delete"
        delcomment.id = comment.id
        commentsModalSpace.appendChild(delcomment)
      }
      commentsModalSpace.appendChild(br)
    })
    let submit = document.querySelector('.commentSumbitButton')
      submit.id = posts_id

  }
  else if(text === 'Create Comment'){
    modal.classList.add('is-active')
    let h1 = document.getElementById('createpostid')
    
    submit.id = posts_id
  }
  //for logged in user
  else if(text === 'Delete Comment'){
    const options  = await getFetchOptions({posts_id}, "DELETE")
    let finaldelete = await handleFetch(`/api/post/${posts_id}`, options)

  };
  
}














closeModal.addEventListener('click', event => {
  modal.classList.remove('is-active')
})





let comment = document.querySelector('.comment-form')


comment.addEventListener('submit', async (event) =>{
  event.preventDefault();
  let submitId = document.querySelector('.commentSumbitButton')
  let open = submitId.id
  const user = await fetchLoggedInUser();
  let userid = user.id
  let formdata = event.target.commentinput.value
  let options = await getFetchOptions({"posts_id":open ,"comment_body": formdata, "user_id":userid}, 'POST')

  let data = await handleFetch('/api/comment',options)
});

let modelbody = document.querySelector('.modal-card-body')
modelbody.addEventListener('click', deletecom)

async function deletecom(e){
  if(e.target.innerHTML = 'delete'){
    let commentid = e.target.id
    let options = getFetchOptions({}, 'DELETE')
    let deletedcom = handleFetch(`/api/comment/${commentid}`, options)
  }
}