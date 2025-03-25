const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", (e) => {
  if (e.target === storyModal) {
    storyModal.style.display = "none";
  }
});

const profile_container = document.querySelector(".profile-container");

const profile_modal = document.getElementById("profile-modal");

profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_container.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

const likeCount = document.getElementById("like-count");
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

window.addEventListener("DOMContentLoaded", () => {
  const likeAlert = document.querySelector(".like-alert");

  const likeCount = document.getElementById("like-count");
  const blackHeart = document.getElementById("black-heart");
  const redHeart = document.getElementById("red-heart");

  blackHeart.addEventListener("click", () => {
    redHeart.style.display = "inline";
    blackHeart.style.display = "none";

    likeCount.innerText = `${parseInt(likeCount.innerText) + 1}`;
    likeAlert.style.display = "block";

    setTimeout(() => {
      likeAlert.classList.add("show");
    }, 10);

    setTimeout(() => {
      likeAlert.classList.remove("show");
      setTimeout(() => {
        likeAlert.style.display = "none";
      }, 500);
    }, 3000);
  });

  redHeart.addEventListener("click", () => {
    blackHeart.style.display = "inline";
    redHeart.style.display = "none";
    likeCount.innerText = `${parseInt(likeCount.innerText) - 1}`;
  });
});

const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

// 댓글의 내용을 저장할 자료구조
const commentsList = [];
let commentId = 0;

// form 태그 제출 시 이벤트 핸들링. event(e)를 인자로 받아 event 정보를 취득. 매우 중요
commentsCreateForm.addEventListener("submit", (e) => {
  // TODO1. form 태그가 클릭 되었을 때 페이지 이동을 막고 댓글 내용을 취득하기
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

  // TODO2. 댓글 내용이 표시될 HTML노드를 만들어주기
  // 이렇게 string 형식으로 HTML요소를 만들어서 HTML파일에 삽입할 수 있어요!
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

  // TODO3. "written-comments-container"에 댓글 HTML노드를 추가해주기
  // 채팅창 값은 비워주기
  commentContainer.innerHTML = commentContainer.innerHTML + commentNode;
  commentInput.value = "";
});

// 실습 5

const deleteComment = (id) => {
  // TODO1. commentsList 의 id번째 원소를 하나 삭제합니다.
  // 우리가 각 comment의 id 를 commentsList 에서의 순서로 설정했기에 가능합니다.
  commentsList.splice(id, 1);

  // TODO2. 새로운 commentsList에 map 함수를 호출하여
  // 댓글 HTML 노드들로 이루어진 배열을 만듭니다.
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

const refresh = document.querySelector(".logo");

refresh.addEventListener("click", () => {
  location.reload();
});

const hoverIcon = document.querySelector(".icon-list");

hoverIcon.addEventListener("mouseover", () => {
  hoverIcon.style.opacity = "0.6";
});

hoverIcon.addEventListener("mouseout", () => {
  hoverIcon.style.opacity = "1";
});

const hoverFeedButton = document.querySelectorAll(".feed-buttons");

hoverFeedButton.forEach((feedButton) => {
  feedButton.addEventListener("mouseover", () => {
    feedButton.style.opacity = "0.6";
  });
  feedButton.addEventListener("mouseout", () => {
    feedButton.style.opacity = "1";
  });
});

const emojiModal = document.getElementById("emoji-modal");
const smile = document.querySelector(".smile");
const emoji = document.querySelectorAll(".emoji");
const input = document.querySelector(".comment");

smile.addEventListener("click", (e) => {
  e.stopPropagation();
  emojiModal.style.display =
    emojiModal.style.display === "block" ? "none" : "block";
});

emoji.forEach((emoji) => {
  emoji.addEventListener("click", (e) => {
    input.value += emoji.textContent;
    e.stopPropagation();
  });
});

window.addEventListener("click", () => {
  emojiModal.style.display = "none";
});
