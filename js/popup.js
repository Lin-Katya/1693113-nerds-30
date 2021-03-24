const ContactUsLink = document.querySelector(".contact-us-link");
const Popup = document.querySelector(".popup");
const PopupClose = Popup.querySelector(".popup-close");

ContactUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.add("popup-show");
});

PopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.remove("popup-show");
});
