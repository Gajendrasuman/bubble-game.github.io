const player = document.querySelector('.container .game-frame .top-bar .player-name h1')
const icon = document.querySelector('.container .game-frame .top-bar .player-char i')
const coins = document.querySelector('.container .game-frame .top-bar .coins span')
const bestScore = document.querySelector('.container .game-frame .score-bar .best-score span')
const timer = document.querySelector('.container .game-frame .bottom-bar .timer span')
const char = document.querySelector('.container .game-frame .bottom-bar .letter span')
const modeAll = document.querySelectorAll('.container .game-frame .settings .game-mode h3')
const allIcons = document.querySelectorAll('.container .game-frame .settings .change-profile-icon ul li')
const settings_player = document.querySelector('.container .game-frame .settings .change-profile-name input')
const profileBackground = document.querySelector('.container .game-frame .settings .change-profile-background input')
const profileColor = document.querySelector('.container .game-frame .settings .change-profile-color input')
const bubble = document.querySelector('.container .game-frame .settings .change-bubble-shape select')

let dt = localStorage
function loadData(){
    player.innerText = dt.player;
    settings_player.value = dt.player
    icon.setAttribute("class", dt.icon)
    icon.style.color = dt.color;
    icon.style.backgroundColor = dt.background
    coins.innerText = dt.coins
    modeAll.forEach(mode=>{
        mode.classList.remove('active')
    })
    if(dt.mode == "extreme"){
        modeAll[3].setAttribute('class','active')
        bestScore.innerText = dt.extreme_score
    }
    else if(dt.mode == "hard"){
        modeAll[2].setAttribute('class','active')
        bestScore.innerText = dt.hard_score
    }
    else if(dt.mode == "medium"){
        modeAll[1].setAttribute('class','active')
        bestScore.innerText = dt.medium_score
    }
    else{
        modeAll[0].setAttribute('class','active')
        bestScore.innerText = dt.easy_score
    }
    timer.innerText = dt.timer
    allIcons.forEach(icons=>{
        icons.classList.remove('active')
        if(icons.firstChild.getAttribute('class') == dt.icon){
            icons.setAttribute('class', 'active')
        }
    })
    profileBackground.value = dt.background
    profileColor.value = dt.color
    bubble.value = dt.bubble
}

function writeData(){
    dt.setItem("player", "Player0")
    dt.setItem("icon", "bx bx-bot")
    dt.setItem("bubble", "circle")
    dt.setItem("coins", 100)
    dt.setItem("extreme_score", 0)
    dt.setItem("hard_score", 0)
    dt.setItem("medium_score", 0)
    dt.setItem("easy_score", 0)
    dt.setItem("timer", 120)
    dt.setItem("mode", "easy")
    dt.setItem("background", "#000000")
    dt.setItem("color", "#ffffff")
    loadData()
}


if(dt.length != 0){
    loadData()
}
else{
   writeData()
}

function iconSelect(n){
    allIcons.forEach(icons=>{
        icons.classList.remove('active')
    })
    n.setAttribute('class', 'active')
}

function modeSelect(n){
    modeAll.forEach(mode=>{
        mode.classList.remove('active')
    })
    n.setAttribute('class', 'active')
}

function cancel(){
    document.querySelector('.settings').setAttribute('style', 'opacity: 0;')
    setTimeout(() => {
        document.querySelector('.settings').setAttribute('style', 'z-index: -1;')
    }, 350);
    loadData()
}



function settings(){
    document.querySelector('.settings').setAttribute('style', 'z-index: 99; opacity: 1;')
}

function save(){
    dt.setItem("player", settings_player.value)
    allIcons.forEach( icon => {
        if(icon.classList.contains('active')){
            dt.setItem("icon", icon.firstChild.getAttribute('class'))
        }
    })
    modeAll.forEach(mode =>{
        if(mode.classList.contains('active')){
            dt.setItem("mode", mode.innerText.toLowerCase())
        }
    })
    dt.setItem("bubble", bubble.value)
    dt.setItem("background", profileBackground.value)
    dt.setItem("color", profileColor.value)
    icon.setAttribute("class", dt.icon)
    icon.style.color = dt.color;
    icon.style.backgroundColor = dt.background
    player.innerText = dt.player;
}
                
                // function target(item){
                    
                    // }
                    
                    // function mode_easy(){
                        
                        // }
                        
                        // function Play(){
                            
                            // }
                            
                            
                            // function playState(state){
//     if(state.innerText == "Play"){
//         Play()
//     }
//     else if(state.innerText == "Pause"){
//         Pause()
//     }
//     else{
//         Resume()
//     }

// }
// setinterval(()=>{mode_easy()}, 1000)