// TODO1. "story-modal" 클래스 요소 취득하기
// document 에서 "story-modal" 이라는 클래스를 가진 요소를 하나 취득하여
// storyModal 변수에 저장하세요. 
// getElementById? querySelector? querySelectorAll? 무엇을 사용할지 고민해보세요.

const storyModal = document.querySelector('.story-modal'); // PUT YOUR CODE HERE...
const storyElements = document.querySelectorAll('.story-element');

// TODO2. "story-element" 클래스 div가 클릭될 시 "story-modal" 클래스 요소 보여주기

// storyElements를 forEach로 순회하며 
// 각 storyElement DOM 에 eventListener를 추가하세요.
// eventType은 'click' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : 앞서 정의한 storyModal 의 style.display 속성을 "block"으로 바꿈.

storyElements.forEach(storyElement => {
  // PUT YOUR CODE HERE...
  storyElement.addEventListener("click", function () {
    storyModal.style.display = "block";
  });
})

// TODO3. 
// 앞서 정의한 storyModal 에 eventListener를 추가하세요.
// eventType은 'click' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : 앞서 정의한 storyModal의 style.display 속성을 "none"으로 바꿈.
storyModal.addEventListener("click", function () {
  // PUT YOUR CODE HERE
 
  storyModal.style.display = "none"
}
)

//실습2 
// TODO1. "profile-container" 클래스 요소 취득하기
const profile_container = document.querySelector(".profile-container")// PUT YOUR CODE HERE...

// TODO2. "profile-modal" id를 가진 요소 취득하기
const profile_modal = document.querySelector("#profile-modal") // PUT YOUR CODE HERE...

// TODO3. profile_container에 eventListener를 추가하세요.
// eventType은 'mouseover' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능1 : profile_modal 의 style.display 속성을 "block"으로 바꿈.
// eventHandler 기능2 : profile_modal 의 style.position 속성을 "absolute"으로 바꿈.
profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
}
);


// TODO4. profile_container에 또 다른 eventListener를 추가하세요.
// eventType은 'mouseout' 이며, eventHandler의 기능은 다음과 같습니다.
// eventHandler 기능 : profile_modal 의 style.display 속성을 "none"으로 바꿈.
profile_container.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
}
);


// 실습 3
const likeCount = document.getElementById('like-count');
const blackHeart = document.getElementById('black-heart');
const redHeart = document.getElementById('red-heart');

// TODO1. 검정색 하트를 눌렀을 때 
blackHeart.addEventListener('click', () => {

  // 빨간 하트를 보여주고 검정 하트는 숨기기
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  const count = likeCount.innerText;
  // 좋아요 갯수를 하나 늘려서 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = `${parseInt(count) + 1}`;

})

// TODO2. 빨간색 하트를 눌렀을 때
redHeart.addEventListener('click', () => {

  // 검정 하트는 보여주고 빨간 하트는 숨기기
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  // likeCount 요소의 내부 텍스트를 취득하세요
  //const count = // PUT YOUR CODE HERE...
  const count = likeCount.innerText;
  // 좋아요 갯수를 하나 감소시켜 likeCount 요소의 내부 텍스트로 저장하세요.
  likeCount.innerText = `${parseInt(count) - 1}`;

})

//실습4
const commentsCreateForm = document.querySelector('.comments-create-form');
const commentContainer = document.querySelector('.written-comments-container');
const commentInput = document.querySelector('.comment');

// 댓글의 내용을 저장할 자료구조
const commentsList = [];
let commentId = 0;

// form 태그 제출 시 이벤트 핸들링. event(e)를 인자로 받아 event 정보를 취득. 매우 중요
commentsCreateForm.addEventListener('submit', (e) => {

  // TODO1. form 태그가 클릭 되었을 때 페이지 이동을 막고 댓글 내용을 취득하기
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);



  // TODO2. 댓글 내용이 표시될 HTML노드를 만들어주기
  // 이렇게 string 형식으로 HTML요소를 만들어서 HTML파일에 삽입할 수 있어요!
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



  // TODO3. "written-comments-container"에 댓글 HTML노드를 추가해주기
  // 채팅창 값은 비워주기
  commentContainer.innerHTML = commentContainer.innerHTML + commentNode;
  commentInput.value = "";

})

// 실습 5

const deleteComment = (id) => {

  // TODO1. commentsList 의 id번째 원소를 하나 삭제합니다. 
  // 우리가 각 comment의 id 를 commentsList 에서의 순서로 설정했기에 가능합니다. 
  commentsList.splice(id, 1);


  // TODO2. 새로운 commentsList에 map 함수를 호출하여 
  // 댓글 HTML 노드들로 이루어진 배열을 만듭니다. 
  // join 함수를 이용해 배열 원소들을 하나의 스트링으로 만들어 
  // commentContainer의 innerHTML에 저장합니다. 

  commentContainer.innerHTML = commentsList.map((comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`).join('');

}


// HW1 header에 있는 'instagram'을 누르면 사이트가 새로고침 되도록 해주세요.
const instagramLogo = document.querySelector(".logo")

instagramLogo.addEventListener("click", () => {
  location.reload();
});


//HW2 html에 있는 아이콘(header, article)들에 hover하면 불투명도가 생기게 해주세요.

//HW3 좋아요 하트 버튼을 누르면 오른쪽에서 왼쪽으로 알림창 뜨게하기
const heartButton = document.querySelector("#black-heart")
const likeNotification = document.querySelector("#like-notification");

heartButton.addEventListener("click", () => {
  likeNotification.style.position = 'fixed';
  likeNotification.style.top = '100px';
  likeNotification.style.right = '-300px'; // 화면 밖 시작
  likeNotification.style.transition = 'right 0.4s ease';
  likeNotification.style.display = 'block';
  setTimeout(() => {
    likeNotification.style.right = '20px';
  }, 10);

  // 2초 뒤 다시 나가게
  setTimeout(() => {
    likeNotification.style.right = '-300px';
  }, 2000);

  // 2.4초 후 display: none
  setTimeout(() => {
    likeNotification.style.display = 'none';
  }, 2400);

})

//HW4 스토리 모달 사진 자체는 눌러도 변화없고, 나머지 공간 눌러야 해제시키게하기
const storyModalImage= document.querySelector("#story-image")
storyModalImage.addEventListener("click", function (event) {
  event.stopPropagation(); 
});
//HW5 이모티콘 누르면 '최고인기이모티콘’ 모달 띄우고 이모티콘 선택시 댓글에 적히게 하기
const Smile=document.querySelector(".smile")
const emoticonModal=document.querySelector(".emoticon-modal")
const emoticonModalEmoticons=document.querySelectorAll(".emoticon-modal-emoticons > p")
Smile.addEventListener("click",()=>{
  emoticonModal.style.opacity = "1";
  emoticonModal.style.display="block";
})
emoticonModal.addEventListener("mouseleave",()=>{
  emoticonModal.style.opacity = "0";
  emoticonModal.style.transition="opacity 0.5s ease";
  setTimeout(() => {
    emoticonModal.style.display = "none";
  }, 500);
})

emoticonModalEmoticons.forEach(item=>{
  item.addEventListener("click",()=>{
    commentInput.value +=item.textContent
  });
})