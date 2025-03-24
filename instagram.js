console.log("연결완료");

//실습1: 스토리 클릭 시 사진 보이게
//과제4: 배경 클릭해야만 사진 닫히게

const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", (event) => {
  if (event.target === storyModal) {
    storyModal.style.display = "none";
  }
});

//실습2: 프로필 블록에 마우스 올리면 프로필 띄우기

const profile = document.querySelector(".profile");
const profile_modal = document.getElementById("profile-modal");

profile.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
});

profile.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

//실습3: 좋아요 기능
const likeCount = document.getElementById("like-count");
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";
  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count) + 1}`;
});

redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";
  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count) - 1}`;
});

//실습4: 댓글 달기
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

  commentContainer.innerHTML += commentNode;
  commentInput.value = "";
});

//실습5: 댓글 삭제
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

//과제1: 로고 새로고침
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
  location.reload();
});

//과제2: 아이콘에 호버링 시 투명도
const header_icons = document.querySelectorAll(".icon-list");
const feed_buttons = document.querySelectorAll(".feed-buttons");

header_icons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.opacity = 0.5;
  });
  icon.addEventListener("mouseout", () => {
    icon.style.opacity = 1;
  });
});

feed_buttons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.opacity = 0.5;
  });
  icon.addEventListener("mouseout", () => {
    icon.style.opacity = 1;
  });
});

//과제3: 좋아요 시 알림 모달
const likeModal = document.querySelector(".like-modal");
const likeModalBackground = document.querySelector(".like-modal-background");
const likeButton = document.getElementById("black-heart");

likeButton.addEventListener("click", () => {
  likeModalBackground.style.display = "block";
  setTimeout(() => {
    likeModal.classList.add("open"); // 모달 이동
  }, 10);
});

likeModalBackground.addEventListener("click", () => {
  likeModal.classList.remove("open"); // 모달 다시 오른쪽으로 이동
  setTimeout(() => {
    likeModalBackground.style.display = "none"; // 배경 숨기기
  }, 400); // 애니메이션 시간과 맞추기
});

//과제5: 이모티콘 모달, 이모티콘 입력
const smile = document.querySelector(".smile");
const emojiModal = document.querySelector(".emoji-modal");
const emojiModalOverlay = document.querySelector(".emoji-modal-overlay");

smile.addEventListener("click", () => {
  emojiModalOverlay.style.display = "block";
  emojiModal.style.display = "block";
  commentInput.focus();
});

emojiModalOverlay.addEventListener("click", (event) => {
  if (event.target === emojiModalOverlay) {
    emojiModalOverlay.style.display = "none";
    emojiModal.style.display = "none";
  }
});

const emoji_icons = document.querySelectorAll(".emoji-icon");

emoji_icons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.backgroundColor = "hsl(0, 0%, 30%)";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.backgroundColor = "hsl(0, 0%, 18%)";
  });
  icon.addEventListener("mousedown", (event) => {
    event.preventDefault(); // 아이콘 클릭 시 포커스 이동 방지
  });
  icon.addEventListener("mouseup", (event) => {
    event.preventDefault(); // 아이콘 클릭 시 포커스 이동 방지
    commentInput.value += icon.innerText;
  });
});

commentInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    emojiModal.style.display = "none"; // 모달 닫기
  }
});
