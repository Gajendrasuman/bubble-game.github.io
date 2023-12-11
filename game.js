let dt = localStorage
const player = document.querySelector('.container .game-frame .top-bar .player-name h1')
const icon = document.querySelector('.container .game-frame .top-bar .player-char i')
const coins = document.querySelector('.container .game-frame .top-bar .coins span')
const bestScore = document.querySelector('.container .game-frame .score-bar .best-score span')
const highScore = document.querySelector('.container .game-frame .score-bar .high-score span')
const currentScore = document.querySelector('.container .game-frame .score-bar .current-score span')
const timer = document.querySelector('.container .game-frame .bottom-bar .timer span')
const char = document.querySelector('.container .game-frame .bottom-bar .letter span')
const modeAll = document.querySelectorAll('.container .game-frame .settings .game-mode h3')
const allIcons = document.querySelectorAll('.container .game-frame .settings .change-profile-icon ul li')
const settings_player = document.querySelector('.container .game-frame .settings .change-profile-name input')
const profileBackground = document.querySelector('.container .game-frame .settings .change-profile-background input')
const profileColor = document.querySelector('.container .game-frame .settings .change-profile-color input')
const bubble = document.querySelector('.container .game-frame .settings .change-bubble-shape select')
const mainFrame = document.querySelector('.container .game-frame .main-frame')
const findChar = document.querySelector('.container .game-frame .bottom-bar .letter span')
let start;
// charList = [];
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
    dt.setItem("player", "SumanInfoTech")
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
    const bubbles = document.querySelectorAll('.container .game-frame .main-frame .'+dt.bubble)
        bubbles.forEach(bubble=>{
            bubble.style.animationPlayState = "paused" 
        })
        document.querySelector('.container .game-frame .score-bar .play-state h3').innerText = "Resume"
        clearInterval(start)
}
function restart(){
    charList = []
    document.querySelector('.container .game-frame .main-frame').innerHTML = ""
    clearInterval(start);
    currentScore.innerText = 0
    document.querySelector('.container .game-frame .score-bar .play-state h3').innerText = "Play"
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
    restart()
    cancel()
}

function target(n){
    ch = n.innerText
    if(ch == findChar.innerText){
        n.remove()
        if(dt.mode.toLowerCase() == "easy"){
            cScore = parseInt(currentScore.innerText)
            hScore = parseInt(highScore.innerText)
            cScore += 5
            currentScore.innerText = cScore

            if(cScore > hScore){
                highScore.innerText = cScore
                hScore = cScore

                if(hScore > parseInt(dt.easy_score)){
                    dt.setItem("easy_score", hScore)
                    bestScore.innerText = dt.easy_score
                }
            }
        }
        if(dt.mode.toLowerCase() == "medium"){
            cScore = parseInt(currentScore.innerText)
            hScore = parseInt(highScore.innerText)
            cScore += 5
            currentScore.innerText = cScore
            if(cScore > hScore){
                highScore.innerText = cScore
                hScore = cScore

                if(hScore > parseInt(dt.medium_score)){
                    dt.setItem("medium_score", hScore)
                    bestScore.innerText = dt.medium_score
                }
            }
        }
        if(dt.mode.toLowerCase() == "hard"){
            cScore = parseInt(currentScore.innerText)
            hScore = parseInt(highScore.innerText)
            cScore += 5
            currentScore.innerText = cScore
            if(cScore > hScore){
                highScore.innerText = cScore
                hScore = cScore

                if(hScore > parseInt(dt.hard_score)){
                    dt.setItem("hard_score", hScore)
                    bestScore.innerText = dt.hard_score
                }
            }
        }
        if(dt.mode.toLowerCase() == "extreme"){
            cScore = parseInt(currentScore.innerText)
            hScore = parseInt(highScore.innerText)
            cScore += 5
            currentScore.innerText = cScore
            if(cScore > hScore){
                highScore.innerText = cScore
                hScore = cScore

                if(hScore > parseInt(dt.extreme_score)){
                    dt.setItem("extreme_score", hScore)
                    bestScore.innerText = dt.extreme_score
                }
            }
        }
        
        createBubble()
        
    }
    else{
        n.style.backgroundColor = "#ff0000"
    }
}

function removeBubble(){
    document.querySelectorAll('.container .game-frame .main-frame .'+dt.bubble)
        .forEach(bubble =>{
            if(dt.mode.toLowerCase() == 'easy'){
                if(bubble.offsetTop < 0){
                    if(bubble.innerText == findChar.innerText){
                        bubble.remove()
        
                        createBubble()
                    }
                    bubble.remove()
                }
            }
            else if(dt.mode.toLowerCase() == 'medium'){
                if(bubble.offsetTop < -10){
                    if(bubble.innerText == findChar.innerText){
                        bubble.remove()
        
                        createBubble()
                    }
                    bubble.remove()
                }
            }
            else if(dt.mode.toLowerCase() == 'hard'){
                if(bubble.offsetTop < -20){
                    if(bubble.innerText == findChar.innerText){
                        bubble.remove()
        
                        createBubble()
                    }
                    bubble.remove()
                }
            }
            else if(dt.mode.toLowerCase() == 'extreme'){
                if(bubble.offsetTop < -30){
                    if(bubble.innerText == findChar.innerText){
                        bubble.remove()
        
                        createBubble()
                    }
                    bubble.remove()
                }
            }
    })
}

function generateChar(){
    const bubbles = document.querySelectorAll('.container .game-frame .main-frame .'+dt.bubble)
    easy = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    medium = easy + easy.toLowerCase()
    hard = medium + "0123456789"
    extreme = hard + "~!@#$%?_-&*"
    let chr = findChar.innerText
    if(dt.mode.toLowerCase() == "easy"){
        maxLength = easy.length
        i = 0;
        if(bubbles.length == 0){
            charIndex = Math.floor(Math.random() * maxLength)
            findChar.innerText = easy[charIndex]
            return easy[charIndex]
        }
        else if(bubbles.length < 10){
            z = 0
            while(i == 0){
                charIndex = Math.floor(Math.random() * maxLength)
                bubbles.forEach(bubble =>{
                    if(bubble.innerText == findChar.innerText){
                        z = 1
                    }
                })
                if(z == 0){
                    charIndex = Math.floor(Math.random() * bubbles.length)
                    findChar.innerText = bubbles[charIndex].innerText
                }
                if(easy[charIndex] != findChar.innerText){
                    return easy[charIndex]
                }
            }
        }
    }
    else if(dt.mode.toLowerCase() == "medium"){
        maxLength = medium.length
        i = 0;
        if(bubbles.length == 0){
            charIndex = Math.floor(Math.random() * maxLength)
            findChar.innerText = medium[charIndex]
            return medium[charIndex]
        }
        else if(bubbles.length < 10){
            z = 0
            while(i == 0){
                charIndex = Math.floor(Math.random() * maxLength)
                bubbles.forEach(bubble =>{
                    if(bubble.innerText == findChar.innerText){
                        z = 1
                    }
                })
                if(z == 0){
                    charIndex = Math.floor(Math.random() * bubbles.length)
                    findChar.innerText = bubbles[charIndex].innerText
                }
                if(medium[charIndex] != findChar.innerText){
                    return medium[charIndex]
                }
            }
        }
    }
    else if(dt.mode.toLowerCase() == "hard"){
        maxLength = hard.length
        i = 0;
        if(bubbles.length == 0){
            charIndex = Math.floor(Math.random() * maxLength)
            findChar.innerText = hard[charIndex]
            return hard[charIndex]
        }
        else if(bubbles.length < 10){
            z = 0
            while(i == 0){
                charIndex = Math.floor(Math.random() * maxLength)
                bubbles.forEach(bubble =>{
                    if(bubble.innerText == findChar.innerText){
                        z = 1
                    }
                })
                if(z == 0){
                    charIndex = Math.floor(Math.random() * bubbles.length)
                    findChar.innerText = bubbles[charIndex].innerText
                }
                if(hard[charIndex] != findChar.innerText){
                    return hard[charIndex]
                }
            }
        }
    }
    else if(dt.mode.toLowerCase() == "extreme"){
        maxLength = extreme.length
        i = 0;
        if(bubbles.length == 0){
            charIndex = Math.floor(Math.random() * maxLength)
            findChar.innerText = extreme[charIndex]
            return extreme[charIndex]
        }
        else if(bubbles.length < 10){
            z = 0
            while(i == 0){
                charIndex = Math.floor(Math.random() * maxLength)
                bubbles.forEach(bubble =>{
                    if(bubble.innerText == findChar.innerText){
                        z = 1
                    }
                })
                if(z == 0){
                    charIndex = Math.floor(Math.random() * bubbles.length)
                    findChar.innerText = bubbles[charIndex].innerText
                }
                if(extreme[charIndex] != findChar.innerText){
                    return extreme[charIndex]
                }
            }
        }
    }
}

function createBubble(){
    removeBubble()
    const bubbles = document.querySelectorAll('.container .game-frame .main-frame .'+dt.bubble)
    if(bubbles.length < 10 && dt.mode.toLowerCase() == "easy"){
        if(dt.bubble == "flower"){
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.appendChild(document.createElement('div').setAttribute('class', 'top-left-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'top-right-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'bottom-left-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'bottom-right-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'char')).innerText = chr
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none;"
            }
        }
        else{
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.innerText = chr
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none;"
            }
        }
    }
    else if(bubbles.length < 15 && dt.mode.toLowerCase() == "medium"){
        if(dt.bubble == "flower"){
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.appendChild(document.createElement('div')).setAttribute('class', 'top-left-leaf')
            bub.appendChild(document.createElement('div')).setAttribute('class', 'top-right-leaf')
            bub.appendChild(document.createElement('div')).setAttribute('class', 'bottom-left-leaf')
            bub.appendChild(document.createElement('div')).setAttribute('class', 'bottom-right-leaf')
            flch = bub.appendChild(document.createElement('div')).setAttribute('class', 'char')
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            flch.innerText = chr
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none;"
            }
        }
        else{
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.innerText = chr
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none;"
            }
        }
    }
    else if(bubbles.length < 20 && dt.mode.toLowerCase() == "hard"){
        if(dt.bubble == "flower"){
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.appendChild(document.createElement('div').setAttribute('class', 'top-left-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'top-right-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'bottom-left-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'bottom-right-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'char')).innerText = chr
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none;"
            }
        }
        else{
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.innerText = chr
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none;"
            }
        }
    }
    else if(bubbles.length < 25 && dt.mode.toLowerCase() == "extreme"){
        if(dt.bubble == "flower"){
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.appendChild(document.createElement('div').setAttribute('class', 'top-left-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'top-right-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'bottom-left-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'bottom-right-leaf'))
            bub.appendChild(document.createElement('div').setAttribute('class', 'char')).innerText = chr
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none;"
            }
        }
        else{
            let chr = generateChar()
            posX = Math.floor(Math.random() * 100)
            bub = document.createElement('div')
            bub.innerText = chr
            bub.setAttribute('class', dt.bubble+" "+dt.mode.toLowerCase())
            bub.setAttribute('onclick', 'target(this)')
            mainFrame.appendChild(bub)
            if(posX > 90){
                bub.style = "left: calc("+posX+"% - "+bub.clientWidth / 2+"px; transition:none; animation-duration: 6s;"
            }
            else{
                bub.style = "left: "+posX+"%; transition:none; animation-duration: 6s;"
            }
        }
    }
}


function playState(n){
    if(n.innerText == "Play"){
        if(dt.mode.toLowerCase() == "easy"){
            start = setInterval(() => {
                createBubble()
            }, 1000);
        }
        else if(dt.mode.toLowerCase() == "medium"){
            start = setInterval(() => {
                createBubble()
            }, 900);
        }
        else if(dt.mode.toLowerCase() == "hard"){
            start = setInterval(() => {
                createBubble()
            }, 800);
        }
        else if(dt.mode.toLowerCase() == "extreme"){
            start = setInterval(() => {
                createBubble()
            }, 700);
        }
        n.innerText = "Pause"
    }
    else if(n.innerText == "Pause"){
        const bubbles = document.querySelectorAll('.container .game-frame .main-frame .'+dt.bubble)
        bubbles.forEach(bubble=>{
            bubble.style.animationPlayState = "paused" 
        })
        n.innerText = "Resume"
        clearInterval(start)
    }
    else if(n.innerText == "Resume"){
        const bubbles = document.querySelectorAll('.container .game-frame .main-frame .'+dt.bubble)
        bubbles.forEach(bubble=>{
            bubble.style.animationPlayState = "running"
        })
        if(dt.mode.toLowerCase() == "easy"){
            start = setInterval(() => {
                createBubble()
            }, 1000);
        }
        else if(dt.mode.toLowerCase() == "medium"){
            start = setInterval(() => {
                createBubble()
            }, 900);
        }
        else if(dt.mode.toLowerCase() == "hard"){
            start = setInterval(() => {
                createBubble()
            }, 800);
        }
        else if(dt.mode.toLowerCase() == "extreme"){
            start = setInterval(() => {
                createBubble()
            }, 700);
        }
        n.innerText = "Pause"
    }


}

if(dt.length != 0){
    loadData()
}
else{
   writeData()
}