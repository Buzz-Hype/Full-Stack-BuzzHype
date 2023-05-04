/* eslint-disable import/extensions */
import {
  fetchLoggedInUser,
  handleFetch,
  setNav,
} from './global.js';

const main = async () => {
  const user = await fetchLoggedInUser();
  setNav(!!user);

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
    let div = document.createElement('div');
    let user = document.createElement('h1');
    let text = document.createElement('p')
    text.innerHTML = post.post_text
    user.innerHTML = post.user_id
    div.appendChild(user)
    div.appendChild(text)
    postsection.appendChild(div)
  })
};

main();
