const container = document.querySelector("#container")

function loading_cards(e) {
    fetch("./json/images.json").then((response)=> response.json())
    .then(data_res =>{
        data_res.map((img) => {
            console.log(img.urls)
            const card = document.createElement("div")
            card.classList.add("card")
            card.style.backgroundImage = `${img.urls}`

            container.appendChild(card)
        })
    })
}

loading_cards()