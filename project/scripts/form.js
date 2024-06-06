const placesToVisit = [
    {
        name: "La Sagrada Familia",
        address: "Eixample, Barcelona",
        description: "The Sagrada Família is a one-of-a-kind temple, for its origins, foundation and purpose. Fruit of the work of genius architect Antoni Gaudí, the project was promoted by the people for the people.",
        imgUlr: "images/sagrada-familia.webp"
    },
    {
        name: "Park Güell",
        address: "Gracia, Barcelona",
        description: "The park is one of the largest green spaces in Barcelona, with more than 17 hectares, next to the Sierra de Collserola. The park is located in the district of Gracia, between the neighborhoods of La Salud, Vallcarca-Penitents and El Coll, and borders on Carmelo.",
        imgUlr: "images/park-guell.webp"
    },
    {
        name: "Camp Nou",
        address: "Distrito de Les Corts, Barcelona",
        description: "Camp Nou is a football stadium known to be the home of FC Barcelona since 1957. It has a seating capacity of nearly 100,000 people and is considered as the largest stadium in Spain. The stadium offers museum and stadium tours.",
        imgUlr: "images/camp-nou.webp"
    },
    {
        name: "Casa Batlló",
        address: "Pg. de Gracia 43, Barcelona",
        description: "Casa Batlló is a building in the center of Barcelona, Spain. It was designed by Antoni Gaudí, and is considered one of his masterpieces. A remodel of a previously built house, it was redesigned in 1904 by Gaudí and has been refurbished several times.",
        imgUlr: "images/batlo.webp"
    },
    {
        name: "Arco del triunfo",
        address: "Paseo de Lluís Companys, Barcelona",
        description: "The Arco del Triunfo (the Triumphal Arch), as can be discerned from its name, is an imposing symbol of the city, built to honor the economic, artistic and scientific progress of mankind.",
        imgUlr: "images/arco-triunfo.webp"
    },
    {
        name: "Castillo Monjuic",
        address: " Ctra. de Montjuïc, 66",
        description: "Monjuic Castle is an old military fortress, with roots dating back from 1640, built on top of Montjuïc hill in Barcelona, Catalonia, Spain. It currently serves as a Barcelona municipal facility",
        imgUlr: "images/monjuic-castle.webp"
    }
]
const placeSelection = document.getElementById("placeName");

placesToVisit.forEach(place => {
    let option = document.createElement("option");
    option.value = place.name;
    option.textContent = place.name;
    placeSelection.appendChild(option);
});

function upsertNewReview(newReview) {
    const reviewList = JSON.parse(localStorage.getItem("reviewList")) || [];
    const existingReview = reviewList.find(review => review.name === newReview.name)
    if (existingReview) {
        existingReview.notes = newReview.notes;
    } else {
        reviewList.push(newReview);
    }
    localStorage.setItem("reviewList", JSON.stringify(reviewList));
}

document.getElementById("reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const reviewName = document.getElementById("placeName").value;
    const reviewNotes = document.getElementById("notes").value;

    const review = { name: reviewName, notes: reviewNotes };
    upsertNewReview(review);

    event.target.submit();
})


