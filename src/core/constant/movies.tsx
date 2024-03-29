import React from "react"
import StarIcon from "../icons/star"

type Movie = {
  adult: boolean
  backdrop_path: React.ReactNode
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const nowPlayingMovies: Movie[] = [
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 1,
    original_language: "en",
    original_title: "TOP GUN: Maverick",
    overview:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
    popularity: 0,
    poster_path: "/images/Topgun.png",
    release_date: "Tuesday, 24 May 2022",
    title: "TOP GUN: Maverick",
    video: false,
    vote_average: 8.2,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 2,
    original_language: "en",
    original_title: "Spiderman: into the spider verse",
    overview:
      "Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson Kingpin Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.",
    popularity: 0,
    poster_path: "/images/spiderman.png",
    release_date: "Thursday, 6 December 2018",
    title: "Spiderman: into the spider verse",
    video: false,
    vote_average: 8.4,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 3,
    original_language: "en",
    original_title: "Black Panther: Wakanda Forever",
    overview:
      "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    popularity: 0,
    poster_path: "/images/blackpanther.png",
    release_date: " Wednesday, 9 November 2022",
    title: "Black Panther: Wakanda Forever",
    video: false,
    vote_average: 7.2,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 4,
    original_language: "en",
    original_title: "Batman V Superman",
    overview:
      "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
    popularity: 0,
    poster_path: "/images/batman.png",
    release_date: "Wednesday, 23 March 2016",
    title: "Batman V Superman",
    video: false,
    vote_average: 6.0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 5,
    original_language: "en",
    original_title: "Wonder Woman",
    overview:
      "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    popularity: 0,
    poster_path: "/images/wonderwoman.jpeg",
    release_date: "Tuesday, 30 May 2017",
    title: "Wonder Woman",
    video: false,
    vote_average: 7.2,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 6,
    original_language: "en",
    original_title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    popularity: 0,
    poster_path: "/images/aquaman.jpeg",
    release_date: "Wednesday, 20 December 2023",
    title: "Aquaman and the Lost Kingdom",
    video: false,
    vote_average: 6.5,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 7,
    original_language: "en",
    original_title: "One Piece",
    overview:
      "An alternate version of Earth, and one that is currently in the midst of the 'Golden Age of Pirates'. Ruthless cut-throat pirates rule the seas, and only the strongest have the chance to lay claim to the mythical treasure known as 'One Piece' that was left behind by the greatest pirate of them all Gold Roger. Years after the death of Gold Roger, a young boy by the name of Monkey D. Luffy has dreams of raising his own crew, finding One Piece, and declaring himself as Pirate King. After eating a devil fruit that grants Luffy the power to make his body like rubber, it gives him enormous strength and agility. When Luffy finally comes of age, he sets sail from Foosha Village in East Blue and sets upon his grand adventure to become the next Pirate King.",
    popularity: 0,
    poster_path: "/images/onepiece.jpeg",
    release_date: "Thursday, 31 August 2023",
    title: "One Piece",
    video: false,
    vote_average: 8.4,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 8,
    original_language: "en",
    original_title: "Trolls Band Together",
    overview:
      "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    popularity: 0,
    poster_path: "/images/trolls.jpeg",
    release_date: "Thursday, 12 October 2023",
    title: "Trolls Band Together",
    video: false,
    vote_average: 7.2,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 9,
    original_language: "en",
    original_title: "Elemental",
    overview:
      "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    popularity: 0,
    poster_path: "/images/elemental.jpeg",
    release_date: "Wednesday, 14 June 2023",
    title: "Elemental",
    video: false,
    vote_average: 7.7,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 10,
    original_language: "en",
    original_title: "Chicken Run: Dawn of the Nugget",
    overview:
      "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
    popularity: 0,
    poster_path: "/images/chicken.jpeg",
    release_date: "Friday, 8 December 2023",
    title: "Chicken Run: Dawn of the Nugget",
    video: false,
    vote_average: 7.3,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 11,
    original_language: "en",
    original_title: "Silent Night",
    overview:
      "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
    popularity: 0,
    poster_path: "/images/silent.jpeg",
    release_date: "Thursday, 30 November 2023",
    title: "Silent Night",
    video: false,
    vote_average: 5.8,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 12,
    original_language: "ja",
    original_title: "Godzilla Minus One",
    overview:
      "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
    popularity: 0,
    poster_path: "/images/godzilla.jpeg",
    release_date: "Friday, 3 November 2023",
    title: "Godzilla Minus One",
    video: false,
    vote_average: 8.0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 13,
    original_language: "en",
    original_title: "Migration",
    overview:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    popularity: 0,
    poster_path: "/images/migration.jpeg",
    release_date: "Wednesday, 6 December 2023",
    title: "Migration",
    video: false,
    vote_average: 7.1,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 14,
    original_language: "en",
    original_title: "Wish",
    overview:
      "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    popularity: 0,
    poster_path: "/images/wish.jpeg",
    release_date: "Monday, 13 November 2023",
    title: "Wish",
    video: false,
    vote_average: 6.5,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 15,
    original_language: "en",
    original_title: "PAW Patrol : The Mighty Movie",
    overview:
      "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
    popularity: 0,
    poster_path: "/images/paw.jpeg",
    release_date: "Thursday, 21 September 2023",
    title: "PAW Patrol : The Mighty Movie",
    video: false,
    vote_average: 6.9,
    vote_count: 0,
  },
]

export const favoriteMovies: Movie[] = [
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 1,
    original_language: "en",
    original_title: "Aquaman and the Lost Kingdom",
    overview:
      "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
    popularity: 0,
    poster_path: "/images/aquaman.jpeg",
    release_date: "Wednesday, 20 December 2023",
    title: "Aquaman and the Lost Kingdom",
    video: false,
    vote_average: 6.5,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 2,
    original_language: "en",
    original_title: "Silent Night",
    overview:
      "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
    popularity: 0,
    poster_path: "/images/silent.jpeg",
    release_date: " Thursday, 30 November 2023",
    title: "Silent Night",
    video: false,
    vote_average: 5.8,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 3,
    original_language: "en",
    original_title: "Trolls Band Together",
    overview:
      "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    popularity: 0,
    poster_path: "/images/trolls.jpeg",
    release_date: "Thursday, 12 October 2023",
    title: "Trolls Band Together",
    video: false,
    vote_average: 7.2,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 4,
    original_language: "ja",
    original_title: "Godzilla Minus One",
    overview:
      "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
    popularity: 0,
    poster_path: "/images/godzilla.jpeg",
    release_date: "Friday, 3 November 2023",
    title: "Godzilla Minus One",
    video: false,
    vote_average: 8.0,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 5,
    original_language: "en",
    original_title: "Migration",
    overview:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    popularity: 0,
    poster_path: "/images/migration.jpeg",
    release_date: "Wednesday, 6 December 2023",
    title: "Migration",
    video: false,
    vote_average: 7.2,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 14,
    original_language: "en",
    original_title: "Wish",
    overview:
      "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    popularity: 0,
    poster_path: "/images/wish.jpeg",
    release_date: "Monday, 13 November 2023",
    title: "Wish",
    video: false,
    vote_average: 6.5,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 7,
    original_language: "en",
    original_title: "Elemental",
    overview:
      "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    popularity: 0,
    poster_path: "/images/elemental.jpeg",
    release_date: " Monday, 13 November 2023",
    title: "Elemental",
    video: false,
    vote_average: 6.5,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 8,
    original_language: "en",
    original_title: "The Last Of Us Season 1",
    overview:
      "20 years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal heartbreaking journey as they both must traverse the U.S. and depend on each other for survival.",
    popularity: 0,
    poster_path: "/images/last2.png",
    release_date: "Sunday, 15 January 2023",
    title: "The Last Of Us Season 1",
    video: false,
    vote_average: 8.8,
    vote_count: 0,
  },
]
