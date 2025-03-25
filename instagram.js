// 과제 코드는 실습 코드와 분리되어있습니다
// 실습 1 과제 4로 대체

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

// 실습 3 과제 3으로 대체
// 실습 4 과제 5로 대체

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

// 실습 6
const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

// 과제 1 사이트 새로고침 기능 추가
const instagramLogo = document.querySelector(".logo");
instagramLogo.addEventListener("click", () => {
  location.reload();
});

// 과제 2 아이콘에 mouse hover 투명도 기능 추가
const iconList = document.querySelector(".icon-list");
const story = document.querySelectorAll(".story");
const profileContainer = document.querySelector(".profile-container");
const feedButtons = document.querySelectorAll(".feed-buttons");
const commentContainer = document.querySelector(".written-comments-container");

const hoverTransparentElements = [
  iconList,
  ...story,
  profileContainer,
  ...feedButtons,
  commentContainer,
];

hoverTransparentElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.opacity = "0.5";
  });
  element.addEventListener("mouseout", () => {
    element.style.opacity = "1";
  });
});

// 과제 3 좋아요 버튼 누르면 오른쪽에서 왼쪽으로 알림창 이동
const likeCount = document.getElementById("like-count");
likeCountNum = likeCount.innerText;
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");
const likeNotification = document.querySelector(".like-notification");

// 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) + 1;

  // 알림창 띄우기
  likeNotification.style.visibility = "visible";
  likeNotification.style.right = "0%"; // 화면 안으로 이동

  setTimeout(() => {
    likeNotification.style.right = "-110%"; // 다시 숨기기
    setTimeout(() => {
      likeNotification.style.visibility = "hidden";
    }, 500); // 0.5초 animation
  }, 2000); // 2초 동안 visible
});

// 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) - 1;
});

// 과제 4 스토리 모달 외부 클릭해야 해제
const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");
const storyImage = document.getElementById("story-image");

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", () => {
  storyModal.style.display = "none";
});

storyImage.addEventListener("click", (e) => {
  e.stopPropagation();
});

// 과제 5 이모티콘 클릭 시 최고 인기 이모티콘 보여주고 클릭하면 댓글에 입력
// 이모지 패널 display 버튼
const emojiButton = document.querySelector(".smile");
let isEmojiButtonClicked = false;
const emojis = document.querySelectorAll(".emoji");

emojiButton.addEventListener("click", () => {
  if (isEmojiButtonClicked === false) {
    emojis.forEach((emoji) => {
      emoji.style.display = "inline";
    });
    isEmojiButtonClicked = true;
  } else {
    emojis.forEach((emoji) => {
      emoji.style.display = "none";
    });
    isEmojiButtonClicked = false;
  }
});

const commentsCreateForm = document.querySelector(".comments-create-form");
// const commentContainer;
const commentInput = document.querySelector(".comment");
// 댓글을 만드는 로직

const commentsList = [];

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

// 이모지 클릭하여 채팅창에 입력
for (let i = 0; i < 10; i++) {
  const emojiPointer = document.getElementById(`emoji-${i}`); // 변수 `const`로 변경하여 블록 스코프 유지
  if (emojiPointer) {
    emojiPointer.addEventListener("click", (event) => {
      commentInput.value += event.target.innerText; // 클릭한 요소의 텍스트(이모지) 가져오기
      commentInput.focus();
    });
  }
}
