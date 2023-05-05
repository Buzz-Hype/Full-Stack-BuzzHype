import {
    fetchLoggedInUser,
    handleFetch,
    getFetchOptions,
    setNav,
  } from './global.js';
  
  const main = async () => {
    const user = await fetchLoggedInUser();
    setNav(!!user);

    document.querySelector('#create-form')
    .addEventListener('submit', async (event) => {
      event.preventDefault();
      let formdata = event.target.password.value
      let userid = user.id
      let options = await getFetchOptions({"post_text": formdata, "user_id":userid}, 'POST')
      let data = await handleFetch('/post',options)
    });
}
main()