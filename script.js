let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}
function getuserInfo() {}


function showAlbums(userId) {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        let albumHtml = data.length ? data.map(album => `
          <div class="card p-2 m-2">
            <h5>${album.title}</h5>
          </div>
        `).join('') : `<p>No albums found.</p>`;
        document.getElementById("albums-container").innerHTML = `
          <h3>Albums:</h3>
          <div id="albums">${albumHtml}</div>
        `;
      })
      .catch(err => console.log("Error loading albums:", err));
}


function showPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("posts").innerHTML = data
          .map(post => `
            <div class="card p-2 m-2">
              <h5>${post.title}</h5>
              <p>${post.body}</p>
            </div>
          `)
          .join('');
      })
      .catch(err => console.log("Error loading posts:", err));
  }
  function showHome() {
    let name = document.getElementById("user");
    let selectedName = name.options[name.selectedIndex].text;
    let userId = name.value;
  
    let str = `
      <div class='d-flex flex-column min-vh-100'>
        <header class='bg-primary text-white text-center p-3'>
          <div class='d-flex justify-content-between'>
            <div>Welcome to My Social Media</div>
            <div>${selectedName}</div>
          </div>
        </header>
        <div class='d-flex flex-grow-1'>
          <div class='p-3 bg-light' style="width: 200px;">
            <p class='text-primary' style="cursor:pointer;" onclick="showPosts(${userId})">Home</p>
            <p class='text-primary' style="cursor:pointer;" onclick="showAlbums(${userId})">Albums</p>
            <p class='text-primary'>Profile</p>
            <p class='text-danger' style="cursor: pointer;" onclick='showLogin()'>Logout</p>
          </div>
          <div class='p-3 flex-grow-1'>
            <h3>${selectedName}'s Posts:</h3>
            <div id="posts"></div>
            <div id="albums-container" class="mt-4"></div>  <!-- Albums section added but initially empty -->
          </div>
        </div>
        <footer class='bg-dark text-light text-center p-1 mt-auto'>
          <p>&copy; 2025. All rights reserved.</p>
        </footer>
      </div>
    `;

    root.innerHTML = str;
    showPosts(userId);  // Only show posts initially, NOT albums
}

function displayUsers(data) {
  let str = `
  <div class='d-flex justify-content-center p-5'>
  <div class='p-5'>
  <h2>My Social Media</h2>
  <p>This is the caption of the website.</p>
  </div>
  <div class='p-5'>
  <select class='form-control m-3' id="user">
  <option value='0'>--Select User--</option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select><p><button class='form-control m-3 btn btn-primary' onclick='showHome()'>Log In</button></p></div></div>`;
  root.innerHTML = str;
}
