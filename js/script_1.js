const container = document.querySelector("#container")

function loading_cards(e) {
    fetch("./json/images.json").then((response)=> response.json())
    .then(data_res =>{
        data_res.map((img) => {
            console.log(img.urls)
            const card = document.createElement("div")
            const bgimage = img.urls
            card.classList.add("card")
            card.style.backgroundImage = `url(${bgimage})`

            container.appendChild(card)
        })
    })
}

loading_cards()