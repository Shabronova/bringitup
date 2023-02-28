export default class Download {
  constructor(triggers) {
    this.btns = document.querySelectorAll(triggers);
    this.path = "assets/img/mainbg.jpg";
  }

  downloadItem(path) {
    const element = document.createElement("a");

    element.setAttribute("href", path);
    element.setAttribute("download", "nice_picture");

    element.style.dispalay = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.downloadItem(this.path);
      });
    });
  }
}
