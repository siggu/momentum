const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const comments = [{ comment: '안녕하세요.' }, { comment: '오늘 하루 좋은 일만 있길 바라요.' }, { comment: '오늘도 파이팅이에요.' }, { comment: '만나서 반가워요.' }];
const comment = comments[Math.floor(Math.random() * comments.length)];

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'usernmae';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `${comment.comment} ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
