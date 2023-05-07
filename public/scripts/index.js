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
  let userid = user.id
  console.log(userid)

  const [secret, _err] = await handleFetch('/api/logged-in-secret');

  // console.log('secret, _err:', secret, _err);
  // if (secret) {
  //   document.querySelector('#secret-message').textContent = secret.msg;
  // }
  let posts = await handleFetch('/api/post')

  posts = posts[0]
  console.log(posts)
  let postsection = document.getElementById('post_section')
  let cardsContainer = document.getElementById('cardsContainer')
  posts.forEach(post => {
    if (userid === post.user_id) {
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
      card.classList.add('animate__animated')
      card.classList.add('animate__backInUp')
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

      //  let cardFooterDiv = document.createElement('div')
      //  cardFooter.classList.add('cardFooterDiv')

      let cardFooter = document.createElement('footer')
      cardFooter.classList.add('card-footer')

      let cardFooterDiv = document.createElement('div')
      cardFooterDiv.style.width = '100%';
      cardFooterDiv.style.height = '75%';


      let commentButton = document.createElement('a')
      commentButton.classList.add('card-footer-item')
      commentButton.innerText = 'View Comments'
      //  let createComment = document.createElement('a')
      //  createComment.classList.add('card-footer-item')
      //  createComment.innerText = 'Create Comment'

      let deleteComment = document.createElement('a')
      deleteComment.id = post.id
      deleteComment.classList.add('card-footer-item')
      deletebut.classList.add('delete')
      deleteComment.innerText = 'Delete Comment'

      commentButton.id = post.id

      cardFooterDiv.appendChild(commentButton)
      cardFooterDiv.appendChild(deleteComment)

      //  createComment.id = post.id

      //  console.log(createComment.id)

      // let button = document.createElement('button')
      // let createbutton = document.createElement('button')
      // createbutton.id = post.id
      // createbutton.className = "createComment"
      // createbutton.innerHTML = 'Make Comment'
      // button.id = post.id
      // button.innerHTML = 'comments'
      cardText.innerHTML = post.post_text
      cardHeaderUser.innerHTML = post.username
      card.appendChild(cardHeaderUser)
      cardTextDiv.appendChild(cardText)
      card.appendChild(cardTextDiv)
      cardFooter.appendChild(cardFooterDiv)
      //  cardFooter.appendChild(createComment)
      //  cardFooter.appendChild(deleteComment)
      card.appendChild(cardFooter)
      // card.appendChild(button)
      // card.appendChild(createbutton)
      cardsContainer.appendChild(card)
      postsection.appendChild(cardsContainer)

      card.style.width = '20%';





      // let createbutton = document.createElement('button')
      // createbutton.id = post.id
      // createbutton.className = "createComment"
      // createbutton.innerHTML = 'Make Comment'
      // button.id = post.id
      // button.innerHTML = 'comments'
      // text.innerHTML = post.post_text
      // user.innerHTML = post.username
      // div.appendChild(user)
      // div.appendChild(text)
      // div.appendChild(button)
      // div.appendChild(createbutton)
      // div.appendChild(deletebut)
      // postsection.appendChild(div)
    } else {
      //whole card
      let card = document.createElement('div');
      card.classList.add('card')
      card.classList.add('animate__animated')
      card.classList.add('animate__backInUp')
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


      let commentButton = document.createElement('a')
      commentButton.classList.add('card-footer-item')
      commentButton.innerText = 'View Comments'
      // let createComment = document.createElement('a')
      // createComment.classList.add('card-footer-item')
      // createComment.innerText = 'Create Comment'

      commentButton.id = post.id
      // createComment.id = post.id

      // console.log(createComment.id)
      // let button = document.createElement('button')
      // let createbutton = document.createElement('button')
      // createbutton.id = post.id
      // createbutton.className = "createComment"
      // createbutton.innerHTML = 'Make Comment'
      // button.id = post.id
      // button.innerHTML = 'comments'
      cardText.innerHTML = post.post_text
      cardHeaderUser.innerHTML = post.username
      card.appendChild(cardHeaderUser)
      cardTextDiv.appendChild(cardText)
      card.appendChild(cardTextDiv)
      cardFooter.appendChild(commentButton)
      // cardFooter.appendChild(createComment)
      card.appendChild(cardFooter)
      // card.appendChild(button)
      // card.appendChild(createbutton)
      cardsContainer.appendChild(card)
      postsection.appendChild(cardsContainer)

      card.style.width = '20%';
    }

  })
};

main();


let topBar = document.querySelector('#main-nav')
topBar.style.display = "none"
console.log(topBar)









// async function showcomments(){
//   document.addEventListener('DOMContentLoaded', () =>{
//     document.querySelectorAll('.createComment').forEach(item =>{
//       item.addEventListener('click', async (e) =>{
//         console.log('test')
//       })
//     })
//   })
// }
// showcomments()
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


let button = document.getElementById('post_section');
button.addEventListener('click', getcomments)


async function getcomments(e) {
  let text = e.target.innerHTML
  let posts_id = e.target.id

  if (text === 'View Comments') {
    commentsModalSpace.innerText = '';
    let comments = await handleFetch(`/api/post/${posts_id}/comment`)
    modal.classList.add('is-active')
    comments = comments[0]
    comments.forEach(comment => {
      let commentLi = document.createElement('li')
      commentLi.style.color = '#E3CCAE'
      commentLi.classList.add('is-size-5')

      // let postId = document.createElement('h1')
      // postId.id = posts_id
      commentLi.innerText = comment.post_text
      commentsModalSpace.appendChild(commentLi)
      // console.log(commentLi, postId);
      let submit = document.querySelector('.commentSumbitButton')
      submit.id = posts_id
    })


    console.log(comments)
  }
  else if (text === 'Create Comment') {
    // let modelcontainer = document.getElementById('model-container')
    modal.classList.add('is-active')
    let h1 = document.getElementById('createpostid')
    // h1.innerHTML = posts_id

    submit.id = posts_id
  }
  //for logged in user
  else if (text === 'Delete post') {
    console.log(posts_id)
    const options = await getFetchOptions({ posts_id }, "DELETE")
    let finaldelete = await handleFetch(`/api/post/${posts_id}`, options)

    console.log(finaldelete)
  }

}














closeModal.addEventListener('click', event => {
  modal.classList.remove('is-active')
})


// let aTags = document.querySelectorAll('a');
//  let postId = undefined;

// aTags.forEach(function(a) {
//   a.addEventListener('click', function() {
//     postId = a.id;
//     console.log(postId);
//   });
// });


let comment = document.querySelector('.comment-form')


comment.addEventListener('submit', async (event) => {
  event.preventDefault();
  //I need get posts id
  // let open = document.getElementById('createpostid')
  // let postId = document.getElementById('your_a_tag_id').id;
  let submitId = document.querySelector('.commentSumbitButton')
  // let postId = e.target.id
  let open = submitId.id
  console.log(open, 'test')
  const user = await fetchLoggedInUser();
  console.log(user)
  let userid = user.id
  let formdata = event.target.commentinput.value
  console.log(formdata, userid)
  let options = await getFetchOptions({ "posts_id": open, "comment_body": formdata, "user_id": userid }, 'POST')
  console.log(options)

  let data = await handleFetch('/api/comment', options)
});

//Bulma modal -------

// let modal = document.querySelector('#modal')
// let createCommentButton = document.querySelector('.createComment')

// console.log(createCommentButton)

// createCommentButton.addEventListener('click', async () =>{
//   if(modal.classList.contains('modal')){
//     modal.classList.add('is-active')
//   }
// })

