/*
  Wortkreuz word lists
  --------------------
  To add a unit, copy one block below, give it a new id, a title, and its words.

  de = the German answer, written correctly WITH umlauts and ß (ä ö ü ß)
       Nouns include their article: "das Haus", "der Vater", "die Mutter".
  en = the English clue shown in the puzzle

  The grid uses the exact spelling, so "grün" must be typed with the Ü and "weiß" with the ß.
  Umlaut and ß keys are on screen.
  Phrases and articles are fine: write "das Haus" with its space here, and the grid runs it
  together as DASHAUS. The clue automatically tells the player it is 2 words.
  Keep each entry under about 15 letters so the grid stays phone-friendly.
  Aim for 10 to 14 entries per unit.
  Units unlock in the order listed here, so to reorder, just move a block up or down.
  Keep each id unique and never change an id after progress has started, or progress for that unit is lost.

  19 units, starting with the basics and building up to everyday phrases.
*/
window.UNITS = [
  {
    id: "u1",
    title: "Greetings and Polite Phrases",
    words: [
      { de: "hallo", en: "Hello" },
      { de: "guten Morgen", en: "Good morning" },
      { de: "guten Tag", en: "Good day" },
      { de: "guten Abend", en: "Good evening" },
      { de: "gute Nacht", en: "Good night" },
      { de: "auf Wiedersehen", en: "Goodbye" },
      { de: "tschüss", en: "Bye" },
      { de: "danke", en: "Thank you" },
      { de: "bitte", en: "Please or you’re welcome" },
      { de: "entschuldigung", en: "Excuse me or sorry" },
      { de: "ja", en: "Yes" },
      { de: "nein", en: "No" }
    ]
  },
  {
    id: "u2",
    title: "Numbers 0 to 20",
    words: [
      { de: "null", en: "Zero" },
      { de: "eins", en: "One" },
      { de: "zwei", en: "Two" },
      { de: "drei", en: "Three" },
      { de: "vier", en: "Four" },
      { de: "fünf", en: "Five" },
      { de: "sechs", en: "Six" },
      { de: "sieben", en: "Seven" },
      { de: "acht", en: "Eight" },
      { de: "neun", en: "Nine" },
      { de: "zehn", en: "Ten" },
      { de: "zwanzig", en: "Twenty" }
    ]
  },
  {
    id: "u3",
    title: "Colors and Days of the Week",
    words: [
      { de: "rot", en: "Red" },
      { de: "blau", en: "Blue" },
      { de: "grün", en: "Green" },
      { de: "gelb", en: "Yellow" },
      { de: "schwarz", en: "Black" },
      { de: "weiß", en: "White" },
      { de: "der Montag", en: "Monday" },
      { de: "der Dienstag", en: "Tuesday" },
      { de: "der Mittwoch", en: "Wednesday" },
      { de: "der Donnerstag", en: "Thursday" },
      { de: "der Freitag", en: "Friday" },
      { de: "der Samstag", en: "Saturday" }
    ]
  },
  {
    id: "u4",
    title: "Family and People",
    words: [
      { de: "der Vater", en: "Father" },
      { de: "die Mutter", en: "Mother" },
      { de: "der Bruder", en: "Brother" },
      { de: "die Schwester", en: "Sister" },
      { de: "der Sohn", en: "Son" },
      { de: "die Tochter", en: "Daughter" },
      { de: "das Kind", en: "Child" },
      { de: "der Großvater", en: "Grandfather" },
      { de: "die Großmutter", en: "Grandmother" },
      { de: "der Freund", en: "Friend (male)" },
      { de: "die Freundin", en: "Friend (female)" },
      { de: "die Familie", en: "Family" }
    ]
  },
  {
    id: "u5",
    title: "Food and Drink",
    words: [
      { de: "das Brot", en: "Bread" },
      { de: "der Käse", en: "Cheese" },
      { de: "das Wasser", en: "Water" },
      { de: "die Milch", en: "Milk" },
      { de: "der Apfel", en: "Apple" },
      { de: "das Fleisch", en: "Meat" },
      { de: "der Kaffee", en: "Coffee" },
      { de: "das Ei", en: "Egg" },
      { de: "der Fisch", en: "Fish" },
      { de: "die Suppe", en: "Soup" },
      { de: "der Kuchen", en: "Cake" },
      { de: "das Bier", en: "Beer" }
    ]
  },
  {
    id: "u6",
    title: "The Home and Rooms",
    words: [
      { de: "das Haus", en: "House" },
      { de: "die Wohnung", en: "Apartment" },
      { de: "die Küche", en: "Kitchen" },
      { de: "das Zimmer", en: "Room" },
      { de: "das Bad", en: "Bathroom" },
      { de: "der Garten", en: "Garden" },
      { de: "die Tür", en: "Door" },
      { de: "das Fenster", en: "Window" },
      { de: "der Tisch", en: "Table" },
      { de: "der Stuhl", en: "Chair" },
      { de: "das Bett", en: "Bed" },
      { de: "das Dach", en: "Roof" }
    ]
  },
  {
    id: "u7",
    title: "Animals and Nature",
    words: [
      { de: "der Hund", en: "Dog" },
      { de: "die Katze", en: "Cat" },
      { de: "das Pferd", en: "Horse" },
      { de: "der Vogel", en: "Bird" },
      { de: "die Kuh", en: "Cow" },
      { de: "die Maus", en: "Mouse" },
      { de: "der Baum", en: "Tree" },
      { de: "die Blume", en: "Flower" },
      { de: "der Wald", en: "Forest" },
      { de: "der Berg", en: "Mountain" },
      { de: "der Fluss", en: "River" },
      { de: "die Sonne", en: "Sun" }
    ]
  },
  {
    id: "u8",
    title: "The Body and Clothing",
    words: [
      { de: "der Kopf", en: "Head" },
      { de: "die Hand", en: "Hand" },
      { de: "der Fuß", en: "Foot" },
      { de: "das Auge", en: "Eye" },
      { de: "die Nase", en: "Nose" },
      { de: "der Mund", en: "Mouth" },
      { de: "das Hemd", en: "Shirt" },
      { de: "die Hose", en: "Pants" },
      { de: "der Schuh", en: "Shoe" },
      { de: "der Mantel", en: "Coat" },
      { de: "der Hut", en: "Hat" },
      { de: "das Kleid", en: "Dress" }
    ]
  },
  {
    id: "u9",
    title: "Time, Months and Weather",
    words: [
      { de: "die Zeit", en: "Time" },
      { de: "die Stunde", en: "Hour" },
      { de: "die Woche", en: "Week" },
      { de: "der Monat", en: "Month" },
      { de: "das Jahr", en: "Year" },
      { de: "heute", en: "Today" },
      { de: "morgen", en: "Tomorrow" },
      { de: "gestern", en: "Yesterday" },
      { de: "der Regen", en: "Rain" },
      { de: "der Schnee", en: "Snow" },
      { de: "der Wind", en: "Wind" },
      { de: "das Wetter", en: "Weather" }
    ]
  },
  {
    id: "u10",
    title: "Common Verbs",
    words: [
      { de: "sein", en: "To be" },
      { de: "haben", en: "To have" },
      { de: "gehen", en: "To go" },
      { de: "kommen", en: "To come" },
      { de: "machen", en: "To make or do" },
      { de: "essen", en: "To eat" },
      { de: "trinken", en: "To drink" },
      { de: "sehen", en: "To see" },
      { de: "sprechen", en: "To speak" },
      { de: "lesen", en: "To read" },
      { de: "schreiben", en: "To write" },
      { de: "wohnen", en: "To live" }
    ]
  },
  {
    id: "u11",
    title: "The City and Directions",
    words: [
      { de: "die Stadt", en: "City" },
      { de: "die Straße", en: "Street" },
      { de: "der Markt", en: "Market" },
      { de: "die Schule", en: "School" },
      { de: "die Kirche", en: "Church" },
      { de: "die Brücke", en: "Bridge" },
      { de: "links", en: "Left" },
      { de: "rechts", en: "Right" },
      { de: "geradeaus", en: "Straight ahead" },
      { de: "nah", en: "Near" },
      { de: "weit", en: "Far" },
      { de: "wo", en: "Where" }
    ]
  },
  {
    id: "u12",
    title: "Travel and Transportation",
    words: [
      { de: "das Auto", en: "Car" },
      { de: "der Zug", en: "Train" },
      { de: "der Bus", en: "Bus" },
      { de: "das Flugzeug", en: "Airplane" },
      { de: "das Fahrrad", en: "Bicycle" },
      { de: "der Bahnhof", en: "Train station" },
      { de: "der Flughafen", en: "Airport" },
      { de: "die Reise", en: "Trip" },
      { de: "das Hotel", en: "Hotel" },
      { de: "der Koffer", en: "Suitcase" },
      { de: "die Karte", en: "Map or ticket" },
      { de: "der Urlaub", en: "Vacation" }
    ]
  },
  {
    id: "u13",
    title: "Shopping and Money",
    words: [
      { de: "das Geld", en: "Money" },
      { de: "der Preis", en: "Price" },
      { de: "das Geschäft", en: "Shop" },
      { de: "kaufen", en: "To buy" },
      { de: "bezahlen", en: "To pay" },
      { de: "teuer", en: "Expensive" },
      { de: "billig", en: "Cheap" },
      { de: "die Rechnung", en: "Bill" },
      { de: "die Tasche", en: "Bag" },
      { de: "das Geschenk", en: "Gift" },
      { de: "offen", en: "Open" },
      { de: "geschlossen", en: "Closed" }
    ]
  },
  {
    id: "u14",
    title: "School and Work",
    words: [
      { de: "die Arbeit", en: "Work" },
      { de: "das Büro", en: "Office" },
      { de: "der Lehrer", en: "Teacher (male)" },
      { de: "die Lehrerin", en: "Teacher (female)" },
      { de: "der Schüler", en: "Student (male)" },
      { de: "das Buch", en: "Book" },
      { de: "der Stift", en: "Pen" },
      { de: "die Aufgabe", en: "Task or assignment" },
      { de: "die Prüfung", en: "Exam" },
      { de: "der Computer", en: "Computer" },
      { de: "lernen", en: "To learn" },
      { de: "arbeiten", en: "To work" }
    ]
  },
  {
    id: "u15",
    title: "Adjectives and Opposites",
    words: [
      { de: "groß", en: "Big" },
      { de: "klein", en: "Small" },
      { de: "neu", en: "New" },
      { de: "alt", en: "Old" },
      { de: "gut", en: "Good" },
      { de: "schlecht", en: "Bad" },
      { de: "schön", en: "Beautiful" },
      { de: "heiß", en: "Hot" },
      { de: "kalt", en: "Cold" },
      { de: "schnell", en: "Fast" },
      { de: "langsam", en: "Slow" },
      { de: "jung", en: "Young" }
    ]
  },
  {
    id: "u16",
    title: "Question Words and Connectors",
    words: [
      { de: "wer", en: "Who" },
      { de: "was", en: "What" },
      { de: "wann", en: "When" },
      { de: "warum", en: "Why" },
      { de: "wie", en: "How" },
      { de: "woher", en: "Where from" },
      { de: "und", en: "And" },
      { de: "oder", en: "Or" },
      { de: "aber", en: "But" },
      { de: "mit", en: "With" },
      { de: "ohne", en: "Without" },
      { de: "wohin", en: "Where to" }
    ]
  },
  {
    id: "u17",
    title: "Everyday Phrases",
    words: [
      { de: "wie geht es dir", en: "How are you?" },
      { de: "mir geht es gut", en: "I am doing well" },
      { de: "ich heiße", en: "My name is" },
      { de: "ich verstehe", en: "I understand" },
      { de: "ich weiß nicht", en: "I don’t know" },
      { de: "wie bitte", en: "Pardon?" },
      { de: "noch einmal", en: "Once more" },
      { de: "viel Glück", en: "Good luck" },
      { de: "gute Reise", en: "Have a good trip" },
      { de: "alles Gute", en: "All the best" },
      { de: "bis später", en: "See you later" },
      { de: "bis morgen", en: "See you tomorrow" }
    ]
  },
  {
    id: "u18",
    title: "More Verbs",
    words: [
      { de: "spielen", en: "To play" },
      { de: "singen", en: "To sing" },
      { de: "laufen", en: "To run or walk" },
      { de: "fahren", en: "To drive or ride" },
      { de: "geben", en: "To give" },
      { de: "nehmen", en: "To take" },
      { de: "helfen", en: "To help" },
      { de: "finden", en: "To find" },
      { de: "kochen", en: "To cook" },
      { de: "tanzen", en: "To dance" },
      { de: "schlafen", en: "To sleep" },
      { de: "warten", en: "To wait" }
    ]
  },
  {
    id: "u19",
    title: "Hobbies and Free Time",
    words: [
      { de: "die Musik", en: "Music" },
      { de: "das Lied", en: "Song" },
      { de: "das Spiel", en: "Game" },
      { de: "der Film", en: "Movie" },
      { de: "der Sport", en: "Sports" },
      { de: "der Ball", en: "Ball" },
      { de: "das Radio", en: "Radio" },
      { de: "das Foto", en: "Photo" },
      { de: "das Fest", en: "Festival or party" },
      { de: "die Party", en: "Party" },
      { de: "das Konzert", en: "Concert" },
      { de: "der Spaß", en: "Fun" }
    ]
  }
];
