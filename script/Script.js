
/*
document.querySelector('body').onclick = function () {
    alert('Ouch! Stop poking me!');
}*/
//點擊切換img
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/test.jpg') {
        myImage.setAttribute('src', 'img/city.png');
    } else {
        myImage.setAttribute('src', 'img/test.jpg');
    }
}

//welcome massage
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {/*
    let myName = prompt('please enter your name.');
    
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool,' + myName;
    */
    let myName = prompt('please enter your name.');
    if (myName === null) {
        myName = localStorage.getItem('name');;
        myHeading.innerHTML = 'Mozilla is cool,' + myName;
    } else if (myName === '') {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool,' + myName;
    }

}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedname = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozila is cool,' + storedname;
}
myButton.onclick = function () {
    setUserName();
}




