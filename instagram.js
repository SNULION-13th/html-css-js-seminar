const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach( storyElement => {
   storyElement.addEventListener("click", () => {
     storyModal.style.display = "block";
   });
});

storyModal.addEventListener("click", (event) => {
      // TODO: storyModal 외부를 클릭했을 때, storyModal을 닫기
      if (event.target===storyModal) {
        storyModal.style.display = "none";
      }
  }
)

const profile_container = document.querySelector(".profile-container")
const profile_modal = document.querySelector("#profile-modal")

profile_container.addEventListener(
   "mouseover", () => {
    profile_modal.style.display = "block";
    profile_modal.style.position = "absolute";
});

profile_container.addEventListener(
    "mouseout", () => {
      profile_modal.style.display = "none";
});

const likeCount = document.getElementById('like-count');
const blackHeart = document.getElementById('black-heart');
const redHeart = document.getElementById('red-heart');

blackHeart.addEventListener('click', () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count)+1}`;
  
  //TODO: 좋아요 버튼을 눌렀을 때, 알림창을 띄우기
  showAlert();
})

function showAlert() {
  const alertBox = document.getElementById("custom-alert");

  alertBox.classList.add("show");
  alertBox.style.visibility = "visible";

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}

redHeart.addEventListener('click', () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count)-1}`;
})

const commentsCreateForm = document.querySelector('.comments-create-form');
const commentContainer = document.querySelector('.written-comments-container');
const commentInput = document.querySelector('.comment');

const commentsList = [];
let commentId = 0;

commentsCreateForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) {
    return;
  }

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

const deleteComment = (id) => {
  commentsList.splice(id, 1);

  commentContainer.innerHTML = commentsList.map((comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`).join('');
}

//TODO: 인스타그램 로고 클릭 시 새로고침
const logo=document.querySelector('.logo');
logo.addEventListener('click', () => {
    location.reload();
  }
);

//TODO: 아이콘 클릭 시 투명도 생성 
const icons = document.querySelectorAll('.logo, .search, .icon-list, .feed-buttons');

icons.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.opacity = '0.5';
  });

  element.addEventListener('mouseout', () => {
    element.style.opacity = '1'; 
  });
});

//TODO: 이모티콘 클릭 시 이모티콘 모달창 생성 및 댓글에 이모티콘 추가
const smile = document.querySelector('.smile');
const emojiModal=document.querySelector('.emoji-modal');
const emojiSpans=document.querySelectorAll('.emoji');

smile.addEventListener('click', () => {
  const btnRect = smile.getBoundingClientRect(); // 버튼 위치 정보 가져오기

  //버튼 위치 기준으로 이모티콘 모달 위치 정하기
  emojiModal.style.top = btnRect.top - 110 + "px";
  emojiModal.style.left = btnRect.left + "px";
  
  if (emojiModal.style.display === "block") {
    emojiModal.style.display = "none";
  }
  else {
    emojiModal.style.display = "block";
  }
});

emojiSpans.forEach((element) => {
  element.addEventListener('click', () => {
    commentInput.value += element.innerHTML;
  });
});
