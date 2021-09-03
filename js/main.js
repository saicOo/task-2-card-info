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
///////////////////   ToDo List   ///////////////////////////   
// ============= func change image =============
let cratImage ;
changeImage.forEach(img => {
    img.addEventListener('click', e => {
        console.log(e.target.src);
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
    console.log("hay")
    let fristNameData = fristName.value;
    let lastNameData = lastName.value;
    let ageData = age.value;
    if(fristNameData.trim() == "" || lastNameData.trim() == "" || ageData.trim() == ""){
        alertMassage.style.display = "block"; 
    }else{
         taskBox.innerHTML +=
        `<li class="alert task alert-info">Your Name: ${fristNameData} ${lastNameData} Age: ${ageData} Gender: ${genderSelection()}<button class="btn btn-danger task-delete">Delete</button></li>`;
        conCard.innerHTML += `<div class="card-info">
        <div class="front">
            <div class="head-card">
                <div class="image">
                    <img src="${cratImage}" alt="">
                </div>
            </div>
            <div class="body-card text-center">
                <h3 id="info-name" class="mb-4">${fristNameData} ${lastNameData}</h3>
                <p id="gender" class="mb-2">Gender ${genderSelection()}</p>
                <p id="info-age" class="mb-2">Age : ${ageData}</p>
                <i class="fas fa-times-circle"></i>
            </div>
        </div>
        <div class="back">
            <p>sadasd</p>
        </div>
    </div>`
        alertMassage.style.display = "none";
        fristName.value = "";
        lastName.value = "";
        age.value = "";
        console.log(conCard.childNodes);
        
    };
        let closeCard = document.querySelectorAll('.fa-times-circle')
        let tasks = document.querySelectorAll('.task');
        let tasksDeletes = document.querySelectorAll('.task-delete');
        let cardsInfos = document.querySelectorAll('.card-info');
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
        };
       
  
};



creatBtn.addEventListener('click',creatCard);

document.addEventListener('click', (e) =>{
    noTasksShow();
});

////////////////////   Dark mode   /////////////////
function dark (){
    if(body.style.backgroundColor === "white"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        btnWindow.classList = "btn btn-info w-100";
        cardBg.classList = "card-bg bg-light";
    }else{
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btnWindow.classList = "btn btn-primary w-100";
        cardBg.classList = "card-bg bg-secondary";
        };
    };