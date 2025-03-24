// TODO1. "story-modal" 클래스 요소 취득하기
// document 에서 "story-modal" 이라는 클래스를 가진 요소를 하나 취득하여
// storyModal 변수에 저장하세요.
// getElementById? querySelector? querySelectorAll? 무엇을 사용할지 고민해보세요.

const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

// TODO2. "story-element" 클래스 div가 클릭될 시 "story-modal" 클래스 요소 보여주기

// storyElements를 forEach로 순회하며
// 각 storyElement DOM 에 eventListener를 추가하세요.
// eventType은 'click' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : 앞서 정의한 storyModal 의 style.display 속성을 "block"으로 바꿈.

storyElements.forEach((storyElement) => {
  // PUT YOUR CODE HERE...
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

// TODO3.
// 앞서 정의한 storyModal 에 eventListener를 추가하세요.
// eventType은 'click' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : 앞서 정의한 storyModal의 style.display 속성을 "none"으로 바꿈.
// storyModal.addEventListener(
//   // PUT YOUR CODE HERE

//   "click",
//   () => {
//     storyModal.style.display = "none";
//   }
// );

// TODO1. "profile-container" 클래스 요소 취득하기
const profile_container = document.querySelector(".profile-container");

// TODO2. "profile-modal" id를 가진 요소 취득하기
const profile_modal = document.querySelector("#profile-modal");

// TODO3. profile_container에 eventListener를 추가하세요.
// eventType은 'mouseover' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능1 : profile_modal 의 style.display 속성을 "block"으로 바꿈.
// eventHandler 기능2 : profile_modal 의 style.position 속성을 "absolute"으로 바꿈.
profile_container.addEventListener(
  // PUT YOUR CODE HERE...
  "mouseover",
  () => {
    profile_modal.style.display = "block";
    profile_modal.style.position = "absolute";
  }
);

// TODO4. profile_container에 또 다른 eventListener를 추가하세요.
// eventType은 'mouseout' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : profile_modal 의 style.display 속성을 "none"으로 바꿈.
profile_container.addEventListener(
  // PUT YOUR CODE HERE...
  "mouseout",
  () => {
    profile_modal.style.display = "none";
  }
);

// 실습 3
const likeCount = document.getElementById("like-count");
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

// TODO1. 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  // 빨간 하트를 보여주고 검정 하트는 숨기기
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  const count = document.getElementById("like-count").innerText;

  // 좋아요 갯수를 하나 늘려서 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = parseInt(count) + 1;
});

// TODO2. 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  // 검정 하트는 보여주고 빨간 하트는 숨기기
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  const count = document.getElementById("like-count").innerText;

  // 좋아요 갯수를 하나 감소시켜 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = parseInt(count) - 1;
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
      </div>
      `
    )
    .join("");
};

// 실습 6
// instagram 이미지를 누르면 사이트를 새로고침
const logoImg = document.querySelector(".logo");
logoImg.addEventListener("click", () => {
  location.reload();
});

// 실습 7
// 아이콘(header, article)들에 hover하면 투명도가 생김
const headerIcons = document.querySelectorAll(".header-icon");
const articleIcons = document.querySelectorAll(".article-icon");

headerIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.opacity = "0.5";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.opacity = "1";
  });
});
articleIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.opacity = "0.5";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.opacity = "1";
  });
});

// 실습 8
// 좋아요 하트 버튼을 누르면 오른쪽에서 왼쪽으로 알림창 popup
//const blackHeart = document.getElementById("black-heart");
const likePopup = document.getElementById("like-popup");

blackHeart.addEventListener("click", () => {
  // 팝업 보여주기
  likePopup.classList.add("show");

  // 일정 시간 뒤에 다시 숨김
  setTimeout(() => {
    likePopup.classList.remove("show");
  }, 2000); // 2초 후 숨김
});

// 실습 9
// story modal에서 이미지 외에 나머지 공간 클릭시에만 해제
storyModal.addEventListener(
  // PUT YOUR CODE HERE

  "click",
  (event) => {
    if (event.target == storyModal) {
      storyModal.style.display = "none";
    }
  }
);

// 실습 10
// 이모티콘 누르면 '최고 인기 이모티콘' 모달 띄우고 이모티콘 선택시 댓글창에 입력
const smileButton = document.querySelector(".smile");
const emojiModal = document.getElementById("emoji-modal");
const emojiList = document.querySelectorAll(".emoji");
// const commentInput = document.querySelector(".comment");

// 1. 스마일 버튼 클릭 시 모달 토글
smileButton.addEventListener("click", (event) => {
  event.stopPropagation(); // 모달 바깥 클릭 이벤트 막기
  emojiModal.style.display =
    emojiModal.style.display === "block" ? "none" : "block";
});

// 2. 이모티콘 클릭 시 댓글창에 입력
emojiList.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    commentInput.value += emoji.textContent;
    emojiModal.style.display = "none";
    commentInput.focus();
  });
});

// 3. 모달 바깥 클릭 시 모달 닫기
document.addEventListener("click", (event) => {
  if (
    emojiModal.style.display === "block" &&
    !emojiModal.contains(event.target) &&
    event.target !== smileButton
  ) {
    emojiModal.style.display = "none";
  }
});
