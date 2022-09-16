fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    let html = "";
    postsArr.forEach((el) => {
      html += `
        <h3>${el.title}</h3>
        <p>${el.body}</p>
        <hr />
      `;
      document.querySelector("#blog-list").innerHTML = html;
    });
  });

document.querySelector("#new-post").addEventListener("submit", (e) => {
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
      // console.log(data);
      document.querySelector("#blog-list").innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      <hr />
      ${document.querySelector("#blog-list").innerHTML}
      `;
    });
});

/**
 * Challenge: Send this off to the server!
 *
 * 1. BaseURL: https://apis.scrimba.com/jsonplaceholder/
 * 2. Endpoint: /posts
 * 3. method: ???
 * 4. Request body: ??? (Remember to turn it into JSON)
 * 5. Headers: ??? (Check the JSON Placeholder API docs or past casts for help)
 */
