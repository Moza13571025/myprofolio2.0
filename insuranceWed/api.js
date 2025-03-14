document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("找不到表單 #contactForm");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 防止表單真正提交

    let name = document.querySelector("#nameValue").value;
    let email = document.querySelector("#emailValue").value;
    let demand = document.querySelector("#demandValue").value;

    console.log("表單已提交，開始發送請求...");

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
        console.log("伺服器回應：", data);

        // 使用 Bootstrap 5 Modal 取代 alert()
        let thankYouModal = new bootstrap.Modal(
          document.getElementById("thankYouModal")
        );
        thankYouModal.show();

        // 清空表單
        form.reset();
      })
      .catch((error) => {
        console.error("錯誤：", error);
        alert("發送失敗，請稍後再試！");
      });
  });
});
