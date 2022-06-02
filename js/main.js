document.querySelector('#btn_sugestion').addEventListener('click', async () => {
    let sugestion= document.querySelector('#sugestion_data')
    sugestionAnimationHidden(sugestion)
    sugestion.innerHTML= await getSugestion()
    sugestionAnimationShow(sugestion)
    setTimeout( ()=>{
        sugestionAnimation(sugestion)
    }, 210)
})

function sugestionAnimation(sugestion){
    sugestion.style.animation= "sugestionAnimation 5s linear infinite"
}

function sugestionAnimationShow(sugestion){
    sugestion.style.animation= "sugestionAnimationShow 200ms linear 0s 1 normal forwards"
}

function sugestionAnimationHidden(sugestion){
    sugestion.style.animation= "sugestionAnimationHidden 200ms linear 0s 1 normal forwards"
}

async function getSugestion(){
    let data
    await fetch('https://random-word-api.herokuapp.com/word')
    .then(response=> response.json())
    .then(word=> data= word[0])
    return data
}