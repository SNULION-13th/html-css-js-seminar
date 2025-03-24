// 1번 : 새로고침

const headerLogo = document.querySelector(".logo");

headerLogo.addEventListener("click", () => {
  location.reload();
});

headerLogo.addEventListener("mouseover", () => {
  headerLogo.style.cursor = "pointer";
  headerLogo.style.opacity = 0.5;
});

headerLogo.addEventListener("mouseout", () => {
  headerLogo.style.cursor = "default";
  headerLogo.style.opacity = 1;
});

// 2번 : 투명도

const headerIcon = document.querySelector(".icon-list");
const articleIcon = document.querySelectorAll(".feed-buttons"); // 이러면 배열 형태로 받아오는 느낌.

headerIcon.addEventListener("mouseover", () => {
  headerIcon.style.opacity = 0.5;
});

headerIcon.addEventListener("mouseout", () => {
  headerIcon.style.opacity = 1;
});

articleIcon.forEach((a) => {
  if (a.id !== "red-heart") {
    // 배열의 한 원소마다 해당 함수를 적용한다.
    a.addEventListener("mouseover", () => {
      a.style.opacity = 0.5;
    });
    a.addEventListener("mouseout", () => {
      a.style.opacity = 1;
    }); // 아마 이렇게 2개의 함수도 적용할 수 있지 않을까. 그래서 콜백 쓰는 느낌?
  }
});

// 3번 : 좋아요 알림창

const likeButton = document.getElementById("black-heart");
const notification = document.getElementById("notification");

likeButton.addEventListener("click", () => {
  notification.classList.add("show"); // notification에 'show'라는 클래스 추가.
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000); // 2초 지나면 show class 없어지도록.
});

// 4번 : 스토리 모달

const storyModal = document.querySelector(".story-modal"); // PUT YOUR CODE HERE...
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((storyElement) => {
  // PUT YOUR CODE HERE...
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

const storyImage = document.querySelector("#story-image");

storyModal.addEventListener(
  // PUT YOUR CODE HERE
  "click",
  (e) => {
    if (e.target.id !== "story-image") {
      storyModal.style.display = "none";
    }
  }
);

storyImage.addEventListener("mouseover", () => {
  storyImage.style.cursor = "default";
});

// 기능 5 : 이모티콘

const emoButton = document.querySelector(".smile");
const emoBox = document.querySelector(".emoticon");
const body = document.querySelector(".body");
const commentInput = document.querySelector(".comment");

emoButton.addEventListener("click", () => {
  emoBox.style.display = "block";
});

document.addEventListener(
  // PUT YOUR CODE HERE
  "click",
  (e) => {
    if (
      !e.target.classList.contains("emoticon") &&
      !e.target.classList.contains("smile") &&
      !e.target.classList.contains("emo")
    ) {
      emoBox.style.display = "none";
    }
  }
);

const emo = document.querySelectorAll(".emo");

emo.forEach((e) => {
  // 각 이모티콘마다 적용될 내용 적기. 누르면..
  e.addEventListener("click", () => {
    const emoji = e.getAttribute("data-emoji");
    commentInput.value += emoji;
    // 커서를 맨 끝으로 이동시켜 추가된 이모티콘 뒤에 커서가 위치하도록 설정
    commentInput.focus(); // 결국 지피티 도움 ..
  });
});

// 각 이모티콘에 올리면 마우스 커서 바뀌고 백그라운드 바뀌기
emo.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style["background-color"] = "grey";
    e.style.cursor = "pointer";
  });

  e.addEventListener("mouseout", () => {
    e.style["background-color"] = "";
  });
});

// 실습4
const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");

// 댓글의 내용을 저장할 자료구조
const commentsList = [];
let commentId = 0;

// form 태그 제출 시 이벤트 핸들링. event(e)를 인자로 받아 event 정보를 취득. 매우 중요
commentsCreateForm.addEventListener("submit", (e) => {
  // TODO1. form 태그가 클릭 되었을 때 페이지 이동을 막고 댓글 내용을 취득하기
  e.preventDefault();
  commentText = commentInput.value;
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
