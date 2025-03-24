// 실습1

const storyModal = document.querySelector(".story-modal") as HTMLElement;
const storyImage = document.querySelector("#story-image") as HTMLElement; //과제용
const storyElements = document.querySelectorAll(
  ".story-element"
) as NodeListOf<HTMLElement>;

const storyLogo = document.querySelector(".logo") as HTMLElement;
const opacityIcon = document.querySelectorAll(
  ".logo, .search, .icon-list, .button-container img, .smile, .comment-button"
) as NodeListOf<HTMLElement>; //과제용

const emoticonButton = document.querySelector(".smile") as HTMLElement;
const emoticonList = document.querySelector(".emoticon-list") as HTMLElement;

emoticonButton.addEventListener("click", () => {
  emoticonList.classList.toggle("show");
});
//과제용
opacityIcon.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.opacity = "0.5";
  });
});
opacityIcon.forEach((e) => {
  e.addEventListener("mouseout", () => {
    e.style.opacity = "1";
  });
});

storyLogo.addEventListener("click", () => {
  location.reload();
});

storyElements.forEach((e) => {
  e.addEventListener("click", () => {
    if (storyModal instanceof HTMLElement) {
      storyModal.style.display = "block";
    } else {
      throw new Error("storyModal is not HTMLElement");
    }
  });
});

const emoticons = document.querySelectorAll(
  ".emoticon"
) as NodeListOf<HTMLElement>;

emoticons.forEach((emoticon) => {
  emoticon.addEventListener("click", () => {
    commentInput.value += emoticon.textContent;
  });
});

////////////////////////
if (storyModal instanceof HTMLElement) {
  storyModal.addEventListener("click", () => {
    storyModal.style.display = "none";
  });
}
if (storyImage instanceof HTMLElement) {
  storyImage.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

// 실습 2
const profile_container = document.querySelector(
  ".profile-container"
) as HTMLElement;
const profile_modal = document.getElementById("profile-modal") as HTMLElement;

profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_container.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

// 실습 3
const likeCount = document.getElementById("like-count") as HTMLElement;
const blackHeart = document.getElementById("black-heart") as HTMLElement;
const redHeart = document.getElementById("red-heart") as HTMLElement;

// 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count) + 1}`;

  const alert = document.querySelector(".goodalert") as HTMLElement; //과제용
  alert.classList.add("show"); //과제용

  setTimeout(() => {
    alert.classList.remove("show");
  }, 2000);
});
// 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = likeCount.innerText;
  likeCount.innerText = `${parseInt(count) - 1}`;
});

// 실습 4
const commentsCreateForm = document.querySelector(
  ".comments-create-form"
) as HTMLFormElement;
const commentContainer = document.querySelector(
  ".written-comments-container"
) as HTMLElement;
const commentInput = document.querySelector(".comment") as HTMLInputElement;

// 댓글을 만드는 로직
const commentsList: string[] = [];
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
        class="comment-delete-icon" .26
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
  commentsList.splice(id - 1, 1);
  //정확한 흐름 상 이유는 모르겠으나, id 리스트의 맨 끝에 공백 원소 하나가 더 생기는 것 같음.
  // 그래서 id - 1로 수정하니 한 번에 삭제가 됨.

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
const footer = document.querySelector(".footer-message") as HTMLElement;
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;
