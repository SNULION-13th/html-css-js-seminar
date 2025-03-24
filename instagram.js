// 실습1
var storyModal = document.querySelector(".story-modal");
var storyImage = document.querySelector("#story-image"); //과제용
var storyElements = document.querySelectorAll(".story-element");
var storyLogo = document.querySelector(".logo");
var opacityIcon = document.querySelectorAll(".logo, .search, .icon-list, .button-container img, .smile, .comment-button"); //과제용
var emoticonButton = document.querySelector(".smile");
var emoticonList = document.querySelector(".emoticon-list");
emoticonButton.addEventListener("click", function () {
    emoticonList.classList.toggle("show");
});
//과제용
opacityIcon.forEach(function (e) {
    e.addEventListener("mouseover", function () {
        e.style.opacity = "0.5";
    });
});
opacityIcon.forEach(function (e) {
    e.addEventListener("mouseout", function () {
        e.style.opacity = "1";
    });
});
storyLogo.addEventListener("click", function () {
    location.reload();
});
storyElements.forEach(function (e) {
    e.addEventListener("click", function () {
        if (storyModal instanceof HTMLElement) {
            storyModal.style.display = "block";
        }
        else {
            throw new Error("storyModal is not HTMLElement");
        }
    });
});
var emoticons = document.querySelectorAll(".emoticon");
emoticons.forEach(function (emoticon) {
    emoticon.addEventListener("click", function () {
        commentInput.value += emoticon.textContent;
    });
});
////////////////////////
if (storyModal instanceof HTMLElement) {
    storyModal.addEventListener("click", function () {
        storyModal.style.display = "none";
    });
}
if (storyImage instanceof HTMLElement) {
    storyImage.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}
// 실습 2
var profile_container = document.querySelector(".profile-container");
var profile_modal = document.getElementById("profile-modal");
profile_container.addEventListener("mouseover", function () {
    profile_modal.style.display = "block";
    profile_modal.style.position = "absolute";
});
profile_container.addEventListener("mouseout", function () {
    profile_modal.style.display = "none";
});
// 실습 3
var likeCount = document.getElementById("like-count");
var blackHeart = document.getElementById("black-heart");
var redHeart = document.getElementById("red-heart");
// 검정색 하트를 눌렀을 때
blackHeart.addEventListener("click", function () {
    redHeart.style.display = "inline";
    blackHeart.style.display = "none";
    var count = likeCount.innerText;
    likeCount.innerText = "".concat(parseInt(count) + 1);
    var alert = document.querySelector(".goodalert"); //과제용
    alert.classList.add("show"); //과제용
    setTimeout(function () {
        alert.classList.remove("show");
    }, 2000);
});
// 빨간색 하트를 눌렀을 때
redHeart.addEventListener("click", function () {
    blackHeart.style.display = "inline";
    redHeart.style.display = "none";
    var count = likeCount.innerText;
    likeCount.innerText = "".concat(parseInt(count) - 1);
});
// 실습 4
var commentsCreateForm = document.querySelector(".comments-create-form");
var commentContainer = document.querySelector(".written-comments-container");
var commentInput = document.querySelector(".comment");
// 댓글을 만드는 로직
var commentsList = [];
var commentId = 0;
commentsCreateForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var commentText = commentInput.value;
    if (!commentText)
        return;
    commentsList.push(commentText);
    commentId = commentsList.length;
    var commentNode = "\n    <div class=\"comment-wrapper\">\n      <span class=\"comment\">".concat(commentText, "</span>\n      <img\n        id=\"").concat(commentId, "\" \n        class=\"comment-delete-icon\" .26\n        onclick=\"deleteComment(").concat(commentId, ")\" \n        src=\"./images/close.png\" \n        alt=\"comment\" \n      />\n    </div>\n  ");
    commentContainer.innerHTML = commentContainer.innerHTML + commentNode;
    commentInput.value = "";
});
// 실습 5
var deleteComment = function (id) {
    // TODO1. commentsList 의 id번째 원소를 하나 삭제합니다.
    commentsList.splice(id - 1, 1);
    //정확한 흐름 상 이유는 모르겠으나, id 리스트의 맨 끝에 공백 원소 하나가 더 생기는 것 같음.
    // 그래서 id - 1로 수정하니 한 번에 삭제가 됨.
    // TODO2. 새로운 commentsList에 map 함수를 호출하여
    // 댓글 HTML 요소들로 이루어진 배열을 만듭니다.
    // join 함수를 이용해 배열 원소들을 하나의 스트링으로 만들어
    // commentContainer의 innerHTML에 저장합니다.
    commentContainer.innerHTML = commentsList
        .map(function (comment, index) { return "\n  <div class=\"comment-wrapper\">\n    <span class=\"comment\">".concat(comment, "</span>\n    <img id=\"").concat(index, "\" class=\"comment-delete-icon\" onclick=\"deleteComment(").concat(index, ")\" src=\"./images/close.png\" alt=\"comment\" />\n  </div>"); })
        .join("");
};
// 실습6
var footer = document.querySelector(".footer-message");
footer.innerText = "\u24B8 ".concat(new Date().getFullYear(), " INSTAGRAM FROM META");
