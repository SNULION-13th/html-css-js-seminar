// 실습1
const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

storyModal.addEventListener("click", (event) => {
  // 4. 클릭된 요소가 storyModal 자체인 경우만 닫기
  if (event.target === storyModal) {
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
const likeCount = document.getElementById('like-count');
likeCountNum = likeCount.innerText;
const blackHeart = document.getElementById('black-heart');
const redHeart = document.getElementById('red-heart');

// 검정색 하트를 눌렀을 때 
blackHeart.addEventListener('click', () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) + 1;

  // 알림창 요소 생성
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = "💖 l.anded님이 회원님의 게시물을 좋아합니다.";

  document.body.appendChild(notification); // body에 추가

  // 애니메이션 적용 후 등장
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // 💡 알림이 나타나는 시간을 줄임 (1초 후 사라짐)
  setTimeout(() => {
    notification.classList.remove("show"); // 원래 위치로 이동
    setTimeout(() => {
      notification.remove(); // DOM에서 제거
    }, 300);
  }, 1000);
});

// 빨간색 하트를 눌렀을 때
redHeart.addEventListener('click', () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = parseInt(count) - 1;
})

// 실습4
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


// 1. 사이트 새로고침
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  location.reload()
})


// 2. hover하면 투명도 
const iconElements = document.getElementById("iconElements");

iconElements.addEventListener("mouseover", () => {
  iconElements.style.opacity = "0.6";
});

iconElements.addEventListener("mouseleave", () => {
  iconElements.style.opacity = "1";
});


const feedElements = document.querySelectorAll(".feed-buttons");

feedElements.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.opacity = "0.6";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.opacity = "1";
  });
});

const logoElements = document.querySelector(".logo");
logoElements.addEventListener("mouseover", () => {
  logoElements.style.opacity = "0.6";
});

logoElements.addEventListener("mouseleave", () => {
  logoElements.style.opacity = "1";
});


// 과제 5번 최고인기 이모티콘
// 기존에 선언된 commentInput을 재사용하기 위해 중복 선언 제거
const smileIcon = document.querySelector('.smile');
const emojiModal = document.querySelector('.emoji-modal');
const emojis = document.querySelectorAll('.emoji');

// 클릭 시 이모티콘 모달 열기
smileIcon.addEventListener('click', (e) => {
  emojiModal.style.display = 'block';
  e.stopPropagation(); // 모달 클릭 이벤트가 body로 전파되지 않도록 방지
});

// 이모티콘 클릭 시 댓글 입력창에 추가
emojis.forEach((emoji) => {
  emoji.addEventListener('click', () => {
    commentInput.value += emoji.innerText;
   // emojiModal.style.display = 'none'; // 이모티콘 선택 후 모달 닫기
  });
});

// 화면의 다른 부분을 클릭하면 모달 닫기
window.addEventListener("click", (event) => {
  if (!emojiModal.contains(event.target) && event.target !== smileIcon) {
    emojiModal.style.display = "none";
  }
});
