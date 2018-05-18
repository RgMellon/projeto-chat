export default ({ Vue }) => {
  Vue.prototype.$createImg = (file) => {
    let files = event.target.files || event.dataTransfer.files;
    if (!files.length) return;
    this.createImage(files[0])
  }
}
