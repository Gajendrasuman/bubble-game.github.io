file = "./config.json"
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

fetch(file).then(
    response =>{
        if(response.ok){
            return response.json()
        }
    }
    ).then(
        data => {
            for(i = 0; i < data.length; i++){
            if(data[i].id == "123151531"){
                let dt = data[i].data
                player.innerText = dt.player;
                settings_player.value = dt.player
                icon.setAttribute("class", dt.icon)
                icon.style.color = dt.color;
                icon.style.backgroundColor = dt.background
                coins.innerText = dt.coins
                if(dt.mode == "extreme"){
                    modeAll[3].setAttribute('class','active')
                    bestScore.innerText = dt.extreme_best_score
                }
                else if(dt.mode == "hard"){
                    modeAll[2].setAttribute('class','active')
                    bestScore.innerText = dt.hard_best_score
                }
                else if(dt.mode == "medium"){
                    modeAll[1].setAttribute('class','active')
                    bestScore.innerText = dt.medium_best_score
                }
                else{
                    modeAll[0].setAttribute('class','active')
                    bestScore.innerText = dt.easy_best_score
                }
                timer.innerText = dt.timer
                allIcons.forEach( icon => {
                    if(icon.firstChild.getAttribute('class') == dt.icon){
                        icon.setAttribute('class', 'active')
                    }
                })
                profileBackground.value = dt.background
                profileColor.value = dt.color
            }
        }
    }
)

function cancel(){
    document.querySelector('.settings').setAttribute('style', 'opacity: 0;')
    setTimeout(() => {
        document.querySelector('.settings').setAttribute('style', 'z-index: -1;')
    }, 350);
}



function settings(){
    document.querySelector('.settings').setAttribute('style', 'z-index: 99; opacity: 1;')
}

function save(){
    const bestScore = document.querySelector('.container .game-frame .score-bar .best-score span')
    const modeAll = document.querySelectorAll('.container .game-frame .settings .game-mode h3')
    const allIcons = document.querySelectorAll('.container .game-frame .settings .change-profile-icon ul li')
    const settings_player = document.querySelector('.container .game-frame .settings .change-profile-name input')
    const profileBackground = document.querySelector('.container .game-frame .settings .change-profile-background input')
    const profileColor = document.querySelector('.container .game-frame .settings .change-profile-color input')

    fetch(file).then(
        response =>{
            if(response.ok){
                return response.json()
            }
        }
    ).then(
        data =>{
            for(i = 0; i < data.length; i++){
                if(data[i].id == "123151531"){
                    let dt = data[i].data
                    dt.player = settings_player.value
                    dt.background = profileBackground.value
                    dt.color = profileColor.value
                    // icon.setAttribute("class", dt.icon)
                    // if(dt.mode == "extreme"){
                    //     modeAll[3].setAttribute('class','active')
                    //     bestScore.innerText = dt.extreme_best_score
                    // }
                    // else if(dt.mode == "hard"){
                    //     modeAll[2].setAttribute('class','active')
                    //     bestScore.innerText = dt.hard_best_score
                    // }
                    // else if(dt.mode == "medium"){
                    //     modeAll[1].setAttribute('class','active')
                    //     bestScore.innerText = dt.medium_best_score
                    // }
                    // else{
                    //     modeAll[0].setAttribute('class','active')
                    //     bestScore.innerText = dt.easy_best_score
                    // }
                    // timer.innerText = dt.timer
                    // allIcons.forEach( icon => {
                        //     if(icon.firstChild.getAttribute('class') == dt.icon){
                            //         icon.setAttribute('class', 'active')
                            //     }
                            // })
                        }
                    }
                    fetch(file,{
                        method: "PUT",
                        body: JSON.stringify(data)
                    })
        }
    )

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