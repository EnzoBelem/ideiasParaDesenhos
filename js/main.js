document.querySelector('#btn_sugestion').addEventListener('click', async () => {
    document.querySelector('#sugestion_data').innerHTML= await getSugestion()
})

async function getSugestion(){
    let data

    await fetch('https://random-word-api.herokuapp.com/word')
    .then(response=> response.json())
    .then(word=> data= word[0])
    
    return data
}