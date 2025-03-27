// 실습1
const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", () => {
  storyModal.style.display = "none";
});

// 실습 2
const profile_container = document.querySelector(".profile-container");
const profile_modal = document.getElementById("profile-modal");

profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_container.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

// 실습 3 & 과제 3 통합
const likeCount = document.getElementById("like-count");
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");
const notification = document.getElementById("notification");

let isLiked = false; // 좋아요 상태

blackHeart.addEventListener("click", () => {
  if (!isLiked) {
    redHeart.style.display = "inline";
    blackHeart.style.display = "none";

    likeCount.innerText = `${parseInt(likeCount.innerText) + 1}`;
    notification.classList.add("show");

    isLiked = true;
  }
});

redHeart.addEventListener("click", () => {
  if (isLiked) {
    blackHeart.style.display = "inline";
    redHeart.style.display = "none";

    likeCount.innerText = `${parseInt(likeCount.innerText) - 1}`;
    notification.classList.remove("show");

    isLiked = false;
  }
});

// 실습 4
const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

const commentsList = [];
let commentId = 0;

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

  commentId = commentsList.length;
  const commentNode = `
    <div class="comment-wrapper">
      <span class="comment">${commentText}</span>
      <img
        id="${commentId}" 
        class="comment-delete-icon" 
        onclick="deleteComment(${commentId})" 
        src="./images/close.png" 
        alt="comment" 
      />
    </div>
  `;
  commentContainer.innerHTML = commentContainer.innerHTML + commentNode;
  commentInput.value = "";
});

// 실습 5
const deleteComment = (id) => {
  commentsList.splice(id, 1);

  commentContainer.innerHTML = commentsList
    .map(
      (comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`
    )
    .join("");
};

// 실습6
const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

// 과제 1
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location.reload();
});

// 과제 2
const iconList = document.querySelector(".icon-list");

iconList.addEventListener("mouseenter", () => {
  iconList.style.opacity = "0.5";
});

iconList.addEventListener("mouseleave", () => {
  iconList.style.opacity = "1";
});

const feedButton = document.querySelectorAll(".feed-buttons");

feedButton.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.opacity = "0.5";
  });

  button.addEventListener("mouseleave", () => {
    button.style.opacity = "1";
  });
});

// 과제 4
const storyImage = document.getElementById("story-image");

storyElements.forEach((el) => {
  el.addEventListener("click", () => {
    storyModal.style.display = "flex";
  });
});

storyImage.addEventListener("click", (e) => {
  e.stopPropagation();
});

storyModal.addEventListener("click", () => {
  storyModal.style.display = "none";
});

// 과제 5
const emojiModal = document.querySelector(".emoji-modal");
const emojiButton = document.querySelector(".smile");
const emojiList = document.querySelectorAll(".emoji");

emojiButton.addEventListener("click", () => {
  if (emojiModal.style.display === "block") {
    emojiModal.style.display = "none";
  } else {
    emojiModal.style.display = "block";
  }
});

emojiList.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    commentInput.value += emoji.innerText;
    emojiModal.style.display = "none";
    commentInput.focus();
  });
});
