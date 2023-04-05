'use strict'

const express = require('express');
const router = express.Router();

const books = [
  {
    id: "1",
    author: "Olga Tokarczuk",
    title: "Styr din plog över de dödas ben",
    pages: "258",
    borrowed: true,
    blurb: "Det är en vinternatt och snön faller tät. Janna Duszejkos hus är ett av få bebodda i den lilla byn i den polska landsbugden. Tidigare arbetade Jannina som lärare, number ängnar hon dagarna åt att att översätta William Blake, studera astrologi och se efter välbärgade Warsawabors sommarställen. Hon betraktas som en ensling, som föredrar rådjurens och vindsvinens sällskap framför människornas."
  },
  {
    id: "2",
    author: "Amal El-Mohtar, Max Gladstone,",
    title: "This Is How You Loose The Time War",
    pages: "198",
    borrowed: false,
    blurb: "Among the ashes of a dying world an agend of the Commendant finds a letter. It reads: Burn before reading."
  },
  {
    id: "3",
    author: "Erik Fichtelius",
    title: "Historiska Katter",
    pages: "182",
    borrowed: true,
    blurb: "Skulle en viss järnvägslinje i Japan funnits kvar om nte en katt blivit stationsmänstare? Skulle äldre dö ensamma om det inte vore för en märklig sjukhuskatt? Skulle Sverige drabats av galna ko-sjukan om inte katten Bits slickat av sig allt hår på svansen? Ja kanske det. Men helt säker kan man inte vara. Många gånger är det katten som bestämmer. Inte vi mäniskor. KAttens roll i historien är stor. Det visar vi här."
  },
  {
    id: "4",
    author: "Robin Hobb",
    title: "Assassins Apprintice",
    pages: "390",
    borrowed: false,
    blurb: "The kingdom of the Six Dutchies is on the brink of civil war when news breaks that the crown prince has fathered a bastard son and is shamed into abdication. The child's name is Fitz, and he is despised. Raised in the castle stables, only the company of the king's fool, the ragged children of the lower city and his unusual affunity with animals privede Fitz with any comfort. To be useful to the crow, Fitz is trained as an assasin; and to use the traditional magic of the Farseer family. But his tutor, allied to another political faction, is determined to discredit, even kill him. Fitz must survive: for he may be destined to save the kingdom."
  },
  {
    id: "5",
    author: "Robin Hobb",
    title: "Royal Assasin",
    pages: "646",
    borrowed: true,
    blurb: "Fitz has survived his first hazardous mission as king’s assassin, but is left little more than a cripple. Battered and bitter, he vows to abandon his oath to King Shrewd, remaining in the distant mountains. But love and events of terrible urgency draw him back to the court at Buckkeep, and into the deadly intrigues of the royal family. Renewing their vicious attacks on the coast, the Red-Ship Raiders leave burned-out villages and demented victims in their wake. The kingdom is also under assault from within, as treachery threatens the throne of the ailing king. In this time of great danger, the fate of the kingdom may rest in Fitz’s hands—and his role in its salvation may require the ultimate sacrifice.."
  },
  {
    id: "6",
    author: "Robin Hobb",
    title: "Assassins Quest",
    pages: "646",
    borrowed: false,
    blurb: "King Shrewd is dead at the hands of his son Regal. As is Fitz--or so his enemies and friends believe. But with the help of his allies and his beast magic, he emerges from the grave, deeply scarred in body and soul. The kingdom also teeters toward ruin: Regal has plundered and abandoned the capital, while the rightful heir, Prince Verity, is lost to his mad quest--perhaps to death. Only Verity's return--or the heir his princess carries--can save the Six Duchies. But Fitz will not wait. Driven by loss and bitter memories, he undertakes a quest: to kill Regal. The journey casts him into deep waters, as he discovers wild currents of magic within him--currents that will either drown him or make him something more than he was."
  },
]

router.get('/', function (req, res) {
  const bookRes = books.map(book => {
    return { id: book.id, title: book.title, borrowed: book.borrowed }
  })
  res.status(200).json(bookRes);
});

router.get("/:id", (req, res) => {
  const bookId = req.params.id;
  const foundBook = books.find(book => book.id == bookId)
  if (foundBook) {
    res.status(200).json(foundBook)
  } else {
    res.status(404).send("<h1>404 Not found</h1>")
  }
})


router.post("/", (req, res) => {

  let book = req.body;
  console.log("book", book);

  let newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    borrowed: false,
    blurb: "Lorem Ipsum, Dolor!"
  }
  console.log(newBook)
  books.push(newBook)
  res.status(200).json(books)
})

module.exports = router;
