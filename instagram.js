// 실습1
const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", (e) => {
  if (e.target === storyModal) {
    storyModal.style.display = "none";
  }
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

// 실습 3
const likeCount = document.getElementById("like-count");
likeCountNum = likeCount.innerText;
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

// 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) + 1;

  const msg = document.createElement("div");
  msg.className = "top-right-message";
  msg.textContent = "OO님이 개시글을 좋아합니다.";
  document.body.appendChild(msg);

  // Force reflow before adding "show" class to trigger transition
  requestAnimationFrame(() => {
    msg.classList.add("show");
  });

  // Remove message after duration
  setTimeout(() => {
    msg.classList.remove("show");
    msg.classList.add("hide");

    // Remove element after transition ends
    msg.addEventListener("transitionend", () => msg.remove());
  }, 3000);
});

// 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) - 1;
});

// 실습 4
const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

// 댓글을 만드는 로직
const commentsList = [];
let commentId = 0;

const emojiList = document.querySelectorAll(".emoji");

emojiList.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    commentInput.value += emoji.textContent;
  });
});

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

  commentId = commentsList.length - 1;
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
  // TODO1. commentsList 의 id번째 원소를 하나 삭제합니다.
  commentsList.splice(id, 1);

  // TODO2. 새로운 commentsList에 map 함수를 호출하여
  // 댓글 HTML 요소들로 이루어진 배열을 만듭니다.
  // join 함수를 이용해 배열 원소들을 하나의 스트링으로 만들어
  // commentContainer의 innerHTML에 저장합니다.

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

const emojiModal = document.querySelector(".emoji-modal");
const smileButton = document.querySelector(".smile");
document.addEventListener("click", (e) => {
  if (!emojiModal.contains(e.target) && !smileButton.contains(e.target)) {
    emojiModal.style.display = "none";
  }
});

smileButton.addEventListener("click", (e) => {
  if (emojiModal.style.display === "block") {
    emojiModal.style.display = "none";
  } else {
    emojiModal.style.display = "block";
  }
});
