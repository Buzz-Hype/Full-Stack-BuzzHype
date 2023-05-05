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
  const [secret, _err] = await handleFetch('/logged-in-secret');
  console.log('secret, _err:', secret, _err);
  if (secret) {
    document.querySelector('#secret-message').textContent = secret.msg;
  }
  let posts = await handleFetch('/post')
  posts = posts[0]
  console.log(posts)
  let postsection = document.getElementById('post_section')
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
    let createbutton = document.createElement('button')
    createbutton.id = post.id
    createbutton.className = "createComment"
    createbutton.innerHTML = 'Make Comment'
    button.id = post.id
    button.innerHTML = 'comments'
    text.innerHTML = post.post_text
    user.innerHTML = post.username
    div.appendChild(user)
    div.appendChild(text)
    div.appendChild(button)
    div.appendChild(createbutton)
    div.appendChild(deletebut)
    postsection.appendChild(div)
    }else {
      let div = document.createElement('div');
      let user = document.createElement('h1');
      let text = document.createElement('p');
      let button = document.createElement('button')
      let createbutton = document.createElement('button')
      createbutton.id = post.id
      createbutton.className = "createComment"
      createbutton.innerHTML = 'Make Comment'
      button.id = post.id
      button.innerHTML = 'comments'
      text.innerHTML = post.post_text
      user.innerHTML = post.username
      div.appendChild(user)
      div.appendChild(text)
      div.appendChild(button)
      div.appendChild(createbutton)
      postsection.appendChild(div)
    }
    
  })
};

main();
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




let button =document.getElementById('post_section');
button.addEventListener('click', getcomments)

async function getcomments(e){
  let text = e.target.innerHTML
  let posts_id = e.target.id
  if(text === 'comments'){
    // let options = await getFetchOptions({"posts_id":posts_id}, 'GET')
    let comments = await handleFetch(`/comment/${posts_id}`)
    // comments =comments[0][0]
    console.log(comments)
  }
  else if(text === 'Make Comment'){
    let modelcontainer = document.getElementById('model-container')
    modelcontainer.classList.add('show')
    let h1 = document.getElementById('createpostid')
    h1.innerHTML = posts_id
  }
  else if(text === 'Delete post'){
    console.log(posts_id)
    let finaldelete = await handleFetch(`/post/${posts_id}`)
    console.log(finaldelete)
  }
  
}


let close = document.getElementById('close-commentcreate')
close.addEventListener('click', event => {
  let modelcontainer = document.getElementById('model-container')
  modelcontainer.classList.remove('show')
})

let comment = document.querySelector('.comment-form')
comment.addEventListener('submit', async (event) =>{
  event.preventDefault();
  //I need get posts id
  let open = document.getElementById('createpostid')
  open = open.innerHTML
  // console.log(open)
  const user = await fetchLoggedInUser();
  console.log(user)
  let userid = user.id
  let formdata = event.target.commentinput.value
  console.log(formdata, userid)
  let options = await getFetchOptions({"posts_id":open ,"comment_body": formdata, "user_id":userid}, 'POST')
  console.log(options)
  let data = await handleFetch('/comment',options)
});
