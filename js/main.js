let body = document.querySelector('body');
let darkMode = document.querySelector('.fa-adjust');
let btnWindow = document.getElementById('btn-window')
let creatBtn = document.getElementById('btn-creat');
let cardBg = document.getElementById('card-bg');
let alertMassage = document.getElementById('alert-massage');
let taskBox = document.querySelector('ul.task-box');
let modal = document.getElementById('card-window');
// ======== var card info
let backface = document.querySelector('.card-info');
let conCard = document.querySelector('.container-card');
let nameCard = document.getElementById('info-name');
let age = document.getElementById('age');
let gender = document.getElementById('gender');
// =============================================
// ==== var input data =====
let fristName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let ageCard = document.getElementById('info-age');
let btnCreat = document.getElementById('btn-creat');
let changeImage = document.querySelectorAll('.card-content .image img');
// ================================================
let x = 0;
///////////////////   ToDo List   ///////////////////////////   
// ============= func change image =============
let cratImage ;
changeImage.forEach(img => {
    img.addEventListener('click', e => {
        cratImage = e.target.src;
    });
});
// ======= model display block & none ========
let showWindow = () =>{
    modal.classList.toggle('block');
};
btnWindow.addEventListener('click', showWindow);
// =========================================

// ======== massage no tasks alert ==========
let noTasksShow = () =>{
    if(taskBox.childElementCount > 0){
        alertMassage.style.display = "none";
    }else{
        alertMassage.style.display = "block";
    }
}
// =======================================
// ======= function genderSelection ======
function genderSelection() {
    var type = document.getElementsByName('type');
    if(type[0].checked){
        return document.innerText = "male"
       
    }else if(type[1].checked){
        return document.innerText = "fmale"
    }
}
// ==================
//////////// function Create alerts lists and the card info ////////////
let creatCard =  ()  => {
    let fristNameData = fristName.value;
    let lastNameData = lastName.value;
    let ageData = age.value;
    if(fristNameData.trim() == "" || lastNameData.trim() == "" || ageData.trim() == "" || fristNameData.length > 12 || lastNameData.length > 12 || ageData.length > 2){
        alertMassage.style.display = "block"; 
        window.alert('data error 🥺 Please enter correct data')
    }else{
        ++ x;
         taskBox.innerHTML +=
        `<li class="alert task alert-info">${x}- Task From ${fristNameData} Click Here<button class="btn btn-danger task-delete">Delete</button></li>`;
        conCard.innerHTML += `<div class="card-info">
        <div class="front">
            <div class="head-card">
                <div class="image">
                    <img src="${cratImage}" alt="image">
                </div>
            </div>
            <div class="body-card text-center">
                <h3 id="info-name" class="mb-3">${fristNameData} ${lastNameData}</h3>
                <p id="gender" class="mb-2">Gender : ${genderSelection()}</p>
                <p id="info-age" class="mb-2">Age : ${ageData}</p>
                <i class="fas fa-times-circle"></i>
            </div>
        </div>
        <div class="back">
            <h4>Hey ${fristNameData}!!!</h4>
            <p>Thankyou so much for joining our "community"</p>
            <i class="fas fa-smile emoji-card"></i>
        </div>
    </div>`
        alertMassage.style.display = "none";
        fristName.value = "";
        lastName.value = "";
        age.value = "";
        window.alert('Your card has been created 🥰');
        
    };
    // ========= Create an array of variables =========
        let closeCard = document.querySelectorAll('.fa-times-circle')
        let tasks = document.querySelectorAll('.task');
        let tasksDeletes = document.querySelectorAll('.task-delete');
        let cardsInfos = document.querySelectorAll('.card-info');
        let emojiCard = document.querySelectorAll('.emoji-card');
    //    ===============================================
    // ======== For Loop Create an array of cards =========
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener('click', () =>{
                cardsInfos[i].classList.toggle('display-card');
            });
            tasksDeletes[i].onclick = () =>{
                cardsInfos[i].remove();
                tasks[i].remove();
            };
            closeCard[i].onclick = () => {
                cardsInfos[i].classList.toggle('display-card');
            }
        // ============ rotate card  ============
        cardsInfos[i].addEventListener('dblclick',() =>{
            cardsInfos[i].classList.toggle("rotate");
        });
        // =========================================
        // ====== change emoji ======
        emojiCard[i].addEventListener('click', () =>{
            if(emojiCard[i].classList.contains('fa-smile')){
                emojiCard[i].classList = 'fas fa-laugh-wink emoji-card';
            }else{
                emojiCard[i].classList = 'fas fa-smile emoji-card';
            }
        });
        // =================================
        // ======== change color box Shadow in card =========
        if(cardBg.classList.contains('bbg-dark')){
        cardsInfos[i].style.boxShadow = '0 0 15px rgba(0, 25, 252, 0.801)'
        }else{
        cardsInfos[i].style.boxShadow = '0 0 15px rgba(252, 0, 0, 0.644)'
        }
        };
        // End For Loop ===============
};
creatBtn.addEventListener('click',creatCard);
document.addEventListener('click', (e) =>{
    noTasksShow();
});
// ==================================================
////////////////////   Dark mode   /////////////////
function dark (){
    if(cardBg.classList.contains('bbg-light')){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        cardBg.classList.add('bbg-dark');
        cardBg.classList.remove('bbg-light');
        modal.classList.add('bbg-dark');
        modal.classList.remove('bbg-light');
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        cardBg.classList.add('bbg-light');
        cardBg.classList.remove('bbg-dark');
        modal.classList.add('bbg-light');
        modal.classList.remove('bbg-dark');
        };
    };
    darkMode.addEventListener('click', (dark) );