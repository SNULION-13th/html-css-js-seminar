// 실습1, 과제 4
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

// 실습 3, 과제 3
const likeCount = document.getElementById('like-count');
likeCountNum = likeCount.innerText;
const blackHeart = document.getElementById('black-heart');
const redHeart = document.getElementById('red-heart');
const likeNotification = document.querySelector(".like-notification");

// 검정색 하트를 눌렀을 때 
blackHeart.addEventListener('click', () => {
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
})

// 빨간색 하트를 눌렀을 때
redHeart.addEventListener('click', () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) - 1;
})

// 실습 4
const commentsCreateForm = document.querySelector('.comments-create-form');
const commentContainer = document.querySelector('.written-comments-container');
const commentInput = document.querySelector('.comment');

// 댓글을 만드는 로직
const commentsList = [];
let commentId = 0;

commentsCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

  commentId = commentsList.length;
  const commentNode =
    `
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

})

// 과제 5 이모티콘 클릭 시 이모티콘 보여주고 클릭하면 댓글에 입력
const emojiButton = document.querySelector(".smile");
const emojiText = document.querySelector(".emoji-text");
const emojiItems = document.querySelectorAll(".emoji");

let isEmojiButtonVisible = false;
emojiButton.addEventListener("click", () => {
  if (isEmojiButtonVisible === false) {
    emojiText.style.display = "inline";
    emojiItems.forEach((emoji) => {
      emoji.style.display = "inline";
    });
    isEmojiButtonVisible = true;
  } else {
    emojiText.style.display = "none";
    emojiItems.forEach((emoji) => {
      emoji.style.display = "none";
    });
    isEmojiButtonVisible = false;
  }
});

emojiItems.forEach((emoji) => {
  emoji.addEventListener("click", (event) => {
    const emojiText = event.target.innerText;
    commentInput.value += emojiText;
    commentInput.focus();
  });
});

// 실습 5
const deleteComment = (id) => {

  // TODO1. commentsList 의 id번째 원소를 하나 삭제합니다. 
  commentsList.splice(id, 1);


  // TODO2. 새로운 commentsList에 map 함수를 호출하여 
  // 댓글 HTML 요소들로 이루어진 배열을 만듭니다. 
  // join 함수를 이용해 배열 원소들을 하나의 스트링으로 만들어 
  // commentContainer의 innerHTML에 저장합니다. 

  commentContainer.innerHTML = commentsList.map((comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`).join('')

}

// 실습6
const footer = document.querySelector('.footer-message');
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
// const commentContainer;

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