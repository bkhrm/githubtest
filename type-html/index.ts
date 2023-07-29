let 제목 = document.querySelector("#title");
if (제목 !== null) {
  제목.innerHTML = "반가워요";
}

if (제목?.innerHTML !== undefined) {
  제목.innerHTML = "반가워요";
}

let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  //내가 찾은 태그에 맞는 html태그를 입력해주어야함.
  링크.href = "https://kakao.com";
}

let 버튼 = document.querySelector("#button");
if (버튼 instanceof HTMLButtonElement) {
  버튼.innerHTML = "버튼이에염";
  버튼?.addEventListener("click", function () {
    console.log("안녕");
  });
}

let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

let 롱코 = document.querySelector(".naver");

롱코.forEach(a => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
