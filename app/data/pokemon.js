//THIS IS THE 'FRIENDS' LIST!!!!/////

//_____      _                                ______    _                _   ______ _           _
//|  __ \    | |                              |  ____|  (_)              | | |  ____(_)         | |
//| |__) |__ | | _____ _ __ ___   ___  _ __   | |__ _ __ _  ___ _ __   __| | | |__   _ _ __   __| | ___ _ __
//|  ___/ _ \| |/ / _ \ '_ ` _ \ / _ \| '_ \  |  __| '__| |/ _ \ '_ \ / _` | |  __| | | '_ \ / _` |/ _ \ '__|
//| |  | (_) |   <  __/ | | | | | (_) | | | | | |  | |  | |  __/ | | | (_| | | |    | | | | | (_| |  __/ |
//|_|   \___/|_|\_\___|_| |_| |_|\___/|_| |_| |_|  |_|  |_|\___|_| |_|\__,_| |_|    |_|_| |_|\__,_|\___|_|
//


// https://bulbapedia.bulbagarden.net/wiki/Category:New_Pok%C3%A3mon

//keep alphabetized (personal note)

const pokemon = [
  {
    name: "Alcremie",
    photo:"https://cdn.bulbagarden.net/upload/4/4d/Alcremie.png", //insert image here
    scores: [2,2,4,5,2,5,2,3,2,2], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "Alcremie can produce whipped cream, which becomes richer the happier Alcremie is feeling. Desserts made using this cream are invariably delicious, so many pastry chefs strive to have an Alcremie as their partner."

  },


  {
    name: "Corviknight",
    photo:"https://cdn.bulbagarden.net/upload/thumb/2/2e/Corviknight.png/1200px-Corviknight.png", //insert image here
    scores: [3,2,4,5,2,3,3,2,1,3], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "Corviknight is a Flying/Steel type Pokémon introduced in Generation 8. It is known as the Raven Pokémon. Corviknight possess superb flying skills and high intelligence. It is said that Corviknight is the strongest Pokémon living in the skies of the Galar region."
  },

  {
    name: "Cramorant",
    photo:"https://cdn.bulbagarden.net/upload/9/91/Cramorant.png", //insert image here
    scores: [3,5,5,5,5,2,2,1,2,4], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "Cramorant is a Flying/Water type Pokémon introduced in Generation 8. It is known as the Gulp Pokémon."
  },

  {
    name: "Drednaw",
    photo:"https://cdn.bulbagarden.net/upload/thumb/4/4e/Drednaw.png/1200px-Drednaw.png", //insert image here
    scores: [2, 5, 4, 3, 1, 3, 2, 5, 3,1], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "Drednaw is known to be extremely vicious. Its fangs are strong and sharp enough to bite through rock and iron. Though Drednaw has an extremely heavy rock shell, its well-developed muscles allow it to move quickly."
  },

  {
    name: "Duraludon",
    photo:"https://cdn.bulbagarden.net/upload/thumb/2/28/Duraludon.png/1200px-Duraludon.png", //insert image here
    scores: [2, 5, 1, 2, 3, 4, 5, 3, 3,3], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "The metal composing its body is incredibly durable but also surprisingly light. It only weighs about 88 lbs. in total. Thanks to this, Duraludon can move quite quickly in spite of its appearance. Its body is weak to corrosion, however, and is known to rust easily."
  },

  {
    name: "Gossifleur",
    photo:"https://cdn.bulbagarden.net/upload/thumb/8/83/Gossifleur.png/1200px-Gossifleur.png", //insert image here
    scores: [2, 4, 2, 3, 3, 5, 5, 3, 1,3], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "Gossifleur prefers lands with clean water and air, and its pollen has a healing effect. It travels over long distances by getting blown along by the wind, controlling its direction by twisting its body and petals."
  },

  {
    name: "Sirfetch'd",
    photo:"https://cdn.bulbagarden.net/upload/thumb/0/0e/Sirfetch'd.png/1200px-Sirfetch'd.png", //insert image here
    scores: [3, 5, 2, 3, 5, 2, 4, 1, 3,5], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "The Farfetch’d of the Galar region can evolve into Sirfetch'd after experiencing many battles. They are calm and collected, and they make a point of always battling fairly. They are so noble in battle that they are often chosen as a motif for paintings."
  },

  {
    name: "Sobble",
    photo:"https://cdn.bulbagarden.net/upload/thumb/9/9b/816Sobble.png/1200px-816Sobble.png", //insert image here
    scores: [2, 3, 5, 2, 5, 3, 1, 4, 3,2], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "It is a somewhat timid Pokémon that shoots out attacks as it hides itself in the water. The Sword & Shield announcement trailer shows it camouflaging itself in a fountain, but runs off when Grookey approaches."
  },

  {
    name: "Wooloo",
    photo:"https://cdn.bulbagarden.net/upload/thumb/2/2f/Wooloo.png/1200px-Wooloo.png", //insert image here
    scores: [4, 2, 1, 2, 3, 5, 5, 3, 3,3], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "The white fur that covers their bodies grows throughout their lives, and it will fully grow back in three months even if the Wooloo has been completely shorn. Wooloo live as a herd and mimic the actions of their Trainer or herd leader. They dislike conflict, and if they need to escape from enemies, they will simply roll away."
  },

  {
    name: "Zamazenta",
    photo:"https://cdn.bulbagarden.net/upload/thumb/b/bd/Zamazenta.png/1200px-Zamazenta.png", //insert image here
    scores: [3, 3, 5, 3, 5, 1, 2, 2, 4,5], //hp, attack, defense, spec def, spec attack, speed, agility, evolution, kindness, happiness
    info: "Zamazenta's regal and majestic movements overwhelm any opponents that dare face it. Its body is covered in what seems to be a shield."
  },



];
// export the array
module.exports = pokemon;