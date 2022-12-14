let postsArr = [];

function renderPosts() {
  let html = "";
  postsArr.forEach((el) => {
    html += `
      <h3>${el.title}</h3>
      <p>${el.body}</p>
      <hr />
    `;
    document.querySelector("#blog-list").innerHTML = html;
  });
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArr = data.slice(0, 5);
    renderPosts();
  });

const form = document.querySelector("#new-post");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleValue = document.querySelector("#post-title").value;
  const bodyValue = document.querySelector("#post-body").value;
  const postObj = { title: titleValue, body: bodyValue };
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(postObj),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      postsArr.unshift(data);
      postsArr = postsArr.slice(0, 5);
      renderPosts();
    });
  form.reset();
});

fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Granada")
  .then((res) => res.json())
  .then((data) =>
    console.log(data.name, ": ", (data.main.temp - 273.15).toFixed())
  );
