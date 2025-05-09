let Api = "https://hasanabsar.github.io/random-image-API/index.json"

async function getApi(url) {

    let responsive = await fetch(url)
    let data = await responsive.json()

    console.log(data)


    let img = ""

    data.forEach(element => {

        img += `
        
            <article class="custom-card" tabindex="0" aria-labelledby="card1-title" aria-describedby="card1-desc">
            <img src="${element.image_url}" alt="User Profile Image" />
            <div class="card-body">
            <div class="card-id">${element.image_id}</div>
            <div class="card-category">${element.image_category}</div>
            <h3 id="card1-title" class="card-title">Profile Overview</h3>
            <p id="card1-desc" class="card-description">${element.image_description}</p>
            <a href="${element.image_url}" target="_blank"><button class="btn btn-primary" type="button" aria-label="View Profile Details">View Profile</button></a>
            </div>
            </article>
        
        `

        document.getElementById("apiFetch").innerHTML = img
    });

}

getApi(Api)