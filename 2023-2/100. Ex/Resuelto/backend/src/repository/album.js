let arr = [{
    id: 1,
    titulo: "Thriller",
    año: 1982,
    precio: 10.99,
    pais: "Estados Unidos",
    autor: "Michael Jackson",
    canciones: ["Wanna Be Startin' Somethin'", "Baby Be Mine", "The Girl Is Mine", "Thriller", "Beat It", "Billie Jean", "Human Nature", "P.Y.T. (Pretty Young Thing)", "The Lady in My Life"],
    cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png"
},
{
    id: 2,
    titulo: "The Dark Side of the Moon",
    año: 1973,
    precio: 12.99,
    pais: "Reino Unido",
    autor: "Pink Floyd",
    canciones: ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Colour You Like", "Brain Damage", "Eclipse"],
    cover: "https://upload.wikimedia.org/wikipedia/commons/c/c7/The_Dark_Side_of_the_Moon_Cover.svg"
},
{
    id: 3,
    titulo: "Back in Black",
    año: 1980,
    precio: 9.99,
    pais: "Australia",
    autor: "AC/DC",
    canciones: ["Hells Bells", "Shoot to Thrill", "What Do You Do for Money Honey", "Given the Dog a Bone", "Let Me Put My Love into You", "Back in Black", "You Shook Me All Night Long", "Have a Drink on Me", "Shake a Leg", "Rock and Roll Ain't Noise Pollution"],
    cover: "https://upload.wikimedia.org/wikipedia/commons/3/3e/ACDC_Back_in_Black_cover.svg"
},
{
    id: 4,
    titulo: "The Bodyguard",
    año: 1992,
    precio: 8.99,
    pais: "Estados Unidos",
    autor: "Varios artistas",
    canciones: ["I Will Always Love You", "I Have Nothing", "I'm Every Woman", "Run to You", "Queen of the Night", "Jesus Loves Me", "Even If My Heart Would Break", "Someday (I'm Coming Back)", "It's Gonna Be a Lovely Day", "What's So Funny 'Bout Peace, Love and Understanding"],
    cover: "https://upload.wikimedia.org/wikipedia/en/0/03/Whitney_Houston_-_The_Bodyguard.png"
},
{
    id: 5,
    titulo: "Appetite for Destruction",
    año: 1987,
    precio: 11.99,
    pais: "Estados Unidos",
    autor: "Guns N' Roses",
    canciones: ["Welcome to the Jungle", "It's So Easy", "Nightrain", "Out ta Get Me", "Mr. Brownstone", "Paradise City", "My Michelle", "Think About You", "Sweet Child o' Mine", "You're Crazy", "Anything Goes", "Rocket Queen"],
    cover: "https://upload.wikimedia.org/wikipedia/en/8/8b/Appetitefordestruction.jpg"
},
{
    id: 6,
    titulo: "Led Zeppelin IV",
    año: 1971,
    precio: 13.99,
    pais: "Reino Unido",
    autor: "Led Zeppelin",
    canciones: ["Black Dog", "Rock and Roll", "The Battle of Evermore", "Stairway to Heaven", "Misty Mountain Hop", "Four Sticks", "Going to California", "When the Levee Breaks"],
    cover: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg"
},
{
    id: 7,
    titulo: "Nevermind",
    año: 1991,
    precio: 10.99,
    pais: "Estados Unidos",
    autor: "Nirvana",
    canciones: ["Smells Like Teen Spirit", "In Bloom", "Come as You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"],
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg"
},
{
    id: 8,
    titulo: "The Wall",
    año: 1979,
    precio: 14.99,
    pais: "Reino Unido",
    autor: "Pink Floyd",
    canciones: ["In the Flesh?", "The Thin Ice", "Another Brick in the Wall (Part I)", "The Happiest Days of Our Lives", "Another Brick in the Wall (Part II)", "Mother", "Goodbye Blue Sky", "Empty Spaces", "Young Lust", "One of My Turns", "Don't Leave Me Now", "Another Brick in the Wall (Part III)", "Goodbye Cruel World", "Hey You", "Is There Anybody Out There?", "Nobody Home", "Vera", "Bring the Boys Back Home", "Comfortably Numb", "The Show Must Go On", "In the Flesh", "Run Like Hell", "Waiting for the Worms", "Stop", "The Trial", "Outside the Wall"],
    cover: "https://upload.wikimedia.org/wikipedia/en/1/13/PinkFloydWallCoverOriginalNoText.jpg"
},
{
    id: 9,
    titulo: "Rumours",
    año: 1977,
    precio: 9.99,
    pais: "Estados Unidos",
    autor: "Fleetwood Mac",
    canciones: ["Second Hand News", "Dreams", "Never Going Back Again", "Don't Stop", "Go Your Own Way", "Songbird", "The Chain", "You Make Loving Fun", "I Don't Want to Know", "Oh Daddy", "Gold Dust Woman"],
    cover: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG"
},
{
    id: 10,
    titulo: "Purple Rain",
    año: 1984,
    precio: 12.99,
    pais: "Estados Unidos",
    autor: "Prince",
    canciones: ["Let's Go Crazy", "Take Me with U", "The Beautiful Ones", "Computer Blue", "Darling Nikki", "When Doves Cry", "I Would Die 4 U", "Baby I'm a Star", "Purple Rain"],
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg"
}]

const findAll = () => {
    return arr;
}

const create = (object) => {
    arr.push(object)
    return object;
}

const findOne = (id) => {
    const result = arr.find(x => x.id == id);
    return result;
}

const update = (object) => {
    const index = arr
        .findIndex(item => item.id === object.id);

    if (index > -1) {
        arr[index] = object;
        return object;
    } else {
        return null;
    }
    
}

const remove = (id) => {
    const index = arr.findIndex(item => item.id == id);

    if (index > -1) {
        arr.splice(index,1);
        return true;
    } else  
        return false;

}

const repository = { findAll, create, findOne, update,remove }

export default repository;