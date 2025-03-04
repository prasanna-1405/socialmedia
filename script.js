let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
  }

  function showHome() {
    let name=document.getElementById("user");
    let selectedName = name.options[name.selectedIndex].text;
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
          <p>Home</p>
          <p>Album</p>
          <p class='text-danger' style="cursor: pointer;" onclick='showLogin()'>Logout</p>
        </div>F
        <div class='p-3 flex-grow-1'>Content </div>
      </div>
      <footer class='bg-dark text-light text-center p-1 mt-auto'>
        <p>&copy; 2025. All rights reserved.</p>
      </footer>
      </div>
    `;
    root.innerHTML = str;
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
  <option value='0'>--Select User--</option>`
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select><p><button class='form-control m-3 btn btn-primary' onclick='showHome()'>Log In</button></p></div></div>`
  root.innerHTML = str
}