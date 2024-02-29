const AllUsers = document.querySelector('#all-users');
const userInfo = document.querySelector('#result');
const userPosts = document.querySelector('#posts');

//async logic
async function getAllUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

async function getAllPosts(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const data = await response.json();
    return data;
}

// event logic
document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    getAllUsers().then(function (values) {
        values.forEach((user) => printUsers(user));
        values.forEach((user) => printUsersInfo(user));

    });
}


function getUserPosts (id) {
    getAllPosts(id).then(function (values) {
        values.forEach((post) => printPosts(post));
      
    });
}


//basic logic

function printUsers({ id, name }) {
    const spanUser = document.createElement("span");
    spanUser.setAttribute('onclick', `infoShow(${id})`);
    spanUser.innerHTML = name;

    AllUsers.append(spanUser);
}

function infoShow(id) {

    const tables = document.querySelectorAll("table");
    tables.forEach(function (item) {
        item.style.display = "none";
    });
    tables[id - 1].style.display = "table";
    userPosts.innerHTML = "";
}


function printUsersInfo({ id, name, username, email, phone, address }) {
    const tableUser = document.createElement("table");
const city = address.city;
const street = address.street;

    tableUser.setAttribute('id', `${id}`);
    tableUser.innerHTML = `
    <tr><td>имя</td><td>${name}</td></tr>
    <tr><td>username</td><td>${username}</td></tr>
    <tr><td>email</td><td>${email}</td></tr>
    <tr><td>phone</td><td>${phone}</td></tr>
    <tr><td>adress</td><td>${city} ${street}</td></tr>
    <tr><td colspan="2"><span class="show-btn" onclick="getUserPosts(${id})"> показать посты этого автора</span></td></tr>
    `;
    userInfo.append(tableUser);
}


function printPosts({userId,title,body}) {
    const postSingle = document.createElement('div');
    postSingle.innerHTML = `
    <h4>${title}</h4>
    <p>${body}</p>
    <span>${userId}<span>
    `
    userPosts.append(postSingle);
}



