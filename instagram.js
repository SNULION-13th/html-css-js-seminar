// 실습1
const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");
const storyImage = document.getElementById("story-image");


storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyImage.addEventListener("click", (event) => {
  event.stopPropagation(); // 이벤트 전파 막기
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

const refreshLogo = document.getElementById("refresh-logo");
refreshLogo.addEventListener("click", () => {
  location.reload(); 
});

// 알림창 생성 함수
function showNotification(text) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerText = text;
  document.body.appendChild(notification);

  notification.addEventListener("animationend", e => {
    if (e.animationName === "slide-out") notification.remove();
  });
}

// 기존 하트 클릭 핸들러 수정: showNotification 호출 추가
blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";
  likeCount.innerText = parseInt(likeCount.innerText) + 1;
  showNotification("❤️ 최재혁님이 회원님의 게시물을 좋아합니다!");
});

redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";
  likeCount.innerText = parseInt(likeCount.innerText) - 1;
  showNotification("💔 최재혁님이 회원님의 게시물을 안좋아합니다? ");
});

const emojiModal = document.querySelector(".emoji-modal");
const smileIcon = document.querySelector(".smile");

// 모달 열기
smileIcon.addEventListener("click", () => {
  emojiModal.style.display = "flex";
});

// 이모티콘 선택 또는 모달 외부 클릭 시 닫기 & 댓글 입력
emojiModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("emoji-item")) {
    commentInput.value += e.target.innerText;
    emojiModal.style.display = "none";
  } else if (!e.target.closest(".emoji-content")) {
    emojiModal.style.display = "none";
  }
});
