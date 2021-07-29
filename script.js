const application = document.getElementById('root');

fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
    .then((response) =>{
        if(response.status !== 200) {
            console.log(`there is a problem ${response.status}`)
        }
        else{
            return response.json()
        }
    })
    .then((data) => {
        console.log(data)
        console.log(data.results)
        const animeInfo = data.results
        animeInfo.forEach((movie) => {
            

            // create a container for all the information about the movie.
            const container = document.createElement('div');
            container.setAttribute('class', 'container');

            // create an h1 element as a title for the movie.
            const movieName = document.createElement('h1');
            movieName.setAttribute('class', 'name');
            movieName.textContent = movie.title;


            // create a p element to shoe the description of the movie.
            const movieDisc = document.createElement('p');
            movieDisc.setAttribute('class', 'description');
            movieDisc.textContent = movie.synopsis;

            // to create an image element.
            const movieImg = document.createElement('img');
            movieImg.setAttribute('class', 'image');
            const imgURL = movie.image_url
            movieImg.src = imgURL;

            // to make the added element appear in html we use append child.
            root.appendChild(container)
            container.appendChild(movieName)
            container.appendChild(movieDisc)
            container.appendChild(movieImg)
            
        });
    });