document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    location.reload();
  });
});

const like_button = document.querySelector("#black-heart");

like_button.addEventListener("click", () => {
  const alertBox = document.querySelector(".alert");
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 2000);
});

storyModal.addEventListener("click", (e) => {
  if (e.target.className === "story-modal") {
    storyModal.style.display = "none";
  } else {
    storyModal.style.display = "block";
  }
});

const smile = document.querySelector(".smile");
const emoji_selector = document.querySelector(".emoji-selector");

smile.addEventListener("click", () => {
  if (emoji_selector.classList.contains("show")) {
    emoji_selector.classList.remove("show");
  } else {
    emoji_selector.classList.add("show");
  }
});

const emoji_item = document.querySelectorAll(".emoji-item");
const commentBox = document.querySelector(".comment");

emoji_item.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    commentBox.value += emoji.innerText;
  });
});
