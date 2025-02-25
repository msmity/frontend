addEventListener("DOMContentLoaded", async function() {
    //grab search params from the url after the question mark
    const urlparam = new URLSearchParams(this.window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

    const response = await fetch("http://localhost:3000/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
    <h2>Artist - ${song.artist} </h2>
    <h2>Popularity - ${song.popularity} </h2>
    <h2>Release Date - ${song.releaseDate} </h2>
    <h2>Genre - ${song.genre} </h2>
    `
    document.querySelector("div").innerHTML = html
})