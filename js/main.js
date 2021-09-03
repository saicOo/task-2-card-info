let body = document.querySelector('body');
let darkMode = document.querySelector('.fa-adjust');
let creatBtn = document.getElementById('btn-creat');
let cardBg = document.getElementById('card-bg');
let alertMassage = document.getElementById('alert-massage');
let taskBox = document.querySelector('ul.task-box');
let inputTask = document.getElementById('task-input');
let modal = document.getElementById('card-window');
let btnWindow = document.getElementById('btn-window');
let test = document.getElementById('test');
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
////////////////////   Dark mode   /////////////////
function dark (){
    if(cardBg.classList.contains('bbg-light')){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        cardBg.classList.add('bbg-dark');
        cardBg.classList.remove('bbg-light');
        modal.classList.add('bbg-dark');
        modal.classList.remove('bbg-light');
        // btnWindow.classList = "btn btn-info w-100";
        // cardBg.classList = "card-bg bg-light";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        // btnWindow.classList.toggle('');
        cardBg.classList.add('bbg-light');
        cardBg.classList.remove('bbg-dark');
        modal.classList.add('bbg-light');
        modal.classList.remove('bbg-dark');
        };
        
    };
    darkMode.addEventListener('click', (dark) );
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
let creatCard =  ()  => {
    let fristNameData = fristName.value;
    let lastNameData = lastName.value;
    let ageData = age.value;
    if(fristNameData.trim() == "" || lastNameData.trim() == "" || ageData.trim() == "" || fristNameData.length > 12 || lastNameData.length > 12 || ageData.length > 2){
        alertMassage.style.display = "block"; 
        window.alert('pleace creat data')
    }else{
        console.log(typeof(ageData[1]))
         taskBox.innerHTML +=
        `<li class="alert task alert-info">Your Name: ${fristNameData} ${lastNameData} Age: ${ageData} Gender: ${genderSelection()}<button class="btn btn-danger task-delete">Delete</button></li>`;
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
            <i class="fas fa-smile emojy-card"></i>
        </div>
    </div>`
        alertMassage.style.display = "none";
        fristName.value = "";
        lastName.value = "";
        age.value = "";
        
    };
        let closeCard = document.querySelectorAll('.fa-times-circle')
        let tasks = document.querySelectorAll('.task');
        let tasksDeletes = document.querySelectorAll('.task-delete');
        let cardsInfos = document.querySelectorAll('.card-info');
        let emojyCard = document.querySelectorAll('.emojy-card');
       
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].addEventListener('click', () =>{
                cardsInfos[i].classList.toggle('display-card');
            });
            tasksDeletes[i].onclick = () =>{
                cardsInfos[i].remove();
                tasks[i].remove()
            };
            closeCard[i].onclick = () => {
                cardsInfos[i].classList.toggle('display-card');
            }
             // ============ rotate card  ============
        cardsInfos[i].addEventListener('dblclick',() =>{
            cardsInfos[i].classList.toggle("rotate");
        });
        // =========================================
        // ====== emojy ======
        emojyCard[i].addEventListener('click', () =>{
            if(emojyCard[i].classList.contains('fa-smile')){
                emojyCard[i].classList = 'fas fa-laugh-wink emojy-card';
            }else{
                emojyCard[i].classList = 'fas fa-smile emojy-card';
            }
           });
           if(cardBg.classList.contains('bbg-dark')){
            console.log("SASSS")
         cardsInfos[i].style.boxShadow = '0 0 15px rgba(0, 25, 252, 0.801)'
        }else{
         cardsInfos[i].style.boxShadow = '0 0 15px rgba(252, 0, 0, 0.644)'
        }
        };
       
  
};



creatBtn.addEventListener('click',creatCard);

document.addEventListener('click', (e) =>{
    noTasksShow();
});

