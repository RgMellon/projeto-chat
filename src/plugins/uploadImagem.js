import axios from 'axios'
const pathUrlLocal = 'http://localhost:8000/api/v1/foto';
const pathUrlProd = 'https://api-chat-aps.herokuapp.com/api/v1/foto';
export default ({ app, router, Vue }) => {
  Vue.prototype.$uploadImagem = (img) => {
    const data = {
      foto: img
    };
    return axios.post(pathUrlProd, data)
      .then(res => res.data)
  }
}
