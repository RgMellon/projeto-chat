let userLocal = localStorage.getItem('vuex');
let userJson = JSON.parse(userLocal);

export default ({ app, router, Vue }) => {

}

export const user = () => {
  return userJson ? userJson.user.user : false;
}