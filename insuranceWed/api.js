let sendButton = document.querySelector("button");
console.log(sendButton); // 確認是否成功取得 button

function send(event) {
  event.preventDefault(); // 防止表單默認提交行為

  let name = document.querySelector("#nameValue").value;
  let email = document.querySelector("#emailValue").value;
  let demand = document.querySelector("#demandValue").value;

  fetch(
    "https://script.google.com/macros/s/AKfycbzNg4n7KsnEWv__5GgEhfUJQtHH3bdY9SIDFBYDu_8OAK_YpaHSgSvyXlQvgKcZBBLT/exec",
    {
      method: "POST",
      mode: "no-cors", // **關閉 CORS**
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        demand: demand,
      }),
    }
  )
    .then((response) => response.text()) // 轉換成純文字
    .then((data) => {
      console.log("伺服器回應：", data); // 可以在 Console 看 API 回應
      if (data === "成功") {
        alert("成功");
      }
    })
    .catch((error) => console.error("錯誤：", error));
}

sendButton.addEventListener("click", send);
