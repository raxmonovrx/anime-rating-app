const anime = document.querySelector(".animelar");
const byName = document.querySelector(".byName");
const byYear = document.querySelector(".byYear");
const byRating = document.querySelector(".byRating");
const byTop = document.querySelector(".byTop");

function randomizeArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

const animelar = [
    { name: "One Piece", yil: 1998, reyting: 10, top: 1 },
    { name: "Naruto", yil: 1999, reyting: 9, top: 2 },
    { name: "Bleach", yil: 2005, reyting: 9, top: 3 },
    {
        name: "Fullmetal Alchemist: Brotherhood",
        yil: 2009,
        reyting: 10,
        top: 4,
    },
    { name: "Steins Gate", yil: 2011, reyting: 9, top: 5 },
    { name: "Qora Klever", yil: 2016, reyting: 9, top: 6 },
    { name: "Titanlar Hujumi", yil: 2010, reyting: 7, top: 7 },
    { name: "Tokyo Guli", yil: 2018, reyting: 7, top: 8 },
    { name: "Shingeki no Kyojin", yil: 2013, reyting: 10, top: 9 },
    { name: "Hunter x Hunter", yil: 2011, reyting: 9, top: 10 },
    { name: "Jujutsu Kaisen", yil: 2020, reyting: 9, top: 11 },
    { name: "My Hero Academia", yil: 2016, reyting: 8, top: 12 },
    { name: "Demon Slayer", yil: 2019, reyting: 9, top: 13 },
    { name: "Mob Psycho 100", yil: 2016, reyting: 8, top: 14 },
    { name: "JoJo's Bizarre Adventure", yil: 2012, reyting: 9, top: 15 },
    { name: "Cowboy Bebop", yil: 1998, reyting: 9, top: 16 },
    { name: "Neon Genesis Evangelion", yil: 1995, reyting: 8, top: 17 },
    { name: "Death Note", yil: 2006, reyting: 10, top: 18 },
    { name: "Code Geass", yil: 2006, reyting: 9, top: 19 },
    { name: "One Punch Man", yil: 2015, reyting: 8, top: 20 },
    { name: "Re:Zero", yil: 2016, reyting: 7, top: 21 },
    { name: "Black Lagoon", yil: 2006, reyting: 8, top: 22 },
    { name: "Dr. Stone", yil: 2019, reyting: 8, top: 23 },
    {
        name: "Attack on Titan: The Final Season",
        yil: 2020,
        reyting: 9,
        top: 24,
    },
    { name: "Vinland Saga", yil: 2019, reyting: 9, top: 25 },
    { name: "Fate/Zero", yil: 2011, reyting: 9, top: 26 },
    { name: "Psycho-Pass", yil: 2012, reyting: 8, top: 27 },
    { name: "Overlord", yil: 2015, reyting: 8, top: 28 },
    { name: "No Game No Life", yil: 2014, reyting: 7, top: 29 },
    { name: "The Rising of the Shield Hero", yil: 2019, reyting: 7, top: 30 },
    { name: "Toradora!", yil: 2008, reyting: 8, top: 31 },
    { name: "Bakuman", yil: 2010, reyting: 8, top: 32 },
    { name: "Gintama", yil: 2006, reyting: 9, top: 33 },
    { name: "Angel Beats!", yil: 2010, reyting: 8, top: 34 },
    { name: "Clannad: After Story", yil: 2008, reyting: 9, top: 35 },
    { name: "The Promised Neverland", yil: 2019, reyting: 8, top: 36 },
    { name: "Fairy Tail", yil: 2009, reyting: 8, top: 37 },
    { name: "Parasyte: The Maxim", yil: 2014, reyting: 8, top: 38 },
    { name: "Kaguya-sama: Love is War", yil: 2019, reyting: 9, top: 39 },
    { name: "Erased", yil: 2016, reyting: 8, top: 40 },
    { name: "The Quintessential Quintuplets", yil: 2019, reyting: 7, top: 41 },
    { name: "Yuri on Ice", yil: 2016, reyting: 7, top: 42 },
    { name: "Your Lie in April", yil: 2014, reyting: 9, top: 43 },
    { name: "The Seven Deadly Sins", yil: 2014, reyting: 7, top: 44 },
    { name: "Beastars", yil: 2019, reyting: 7, top: 45 },
    { name: "Hellsing", yil: 2001, reyting: 8, top: 46 },
    { name: "Akame ga Kill!", yil: 2014, reyting: 7, top: 47 },
    {
        name: "The Melancholy of Haruhi Suzumiya",
        yil: 2006,
        reyting: 8,
        top: 48,
    },
    { name: "High School DxD", yil: 2012, reyting: 7, top: 49 },
    { name: "Goblin Slayer", yil: 2018, reyting: 7, top: 50 },
    { name: "Great Teacher Onizuka", yil: 1999, reyting: 9, top: 51 },
    { name: "Samurai Champloo", yil: 2004, reyting: 8, top: 52 },
    { name: "Boku no Hero Academia", yil: 2016, reyting: 8, top: 53 },
    { name: "Zankyou no Terror", yil: 2014, reyting: 7, top: 54 },
    { name: "Violet Evergarden", yil: 2018, reyting: 8, top: 55 },
    { name: "Assassination Classroom", yil: 2015, reyting: 8, top: 56 },
    { name: "K-On!", yil: 2009, reyting: 7, top: 57 },
    { name: "Hyouka", yil: 2012, reyting: 8, top: 58 },
    { name: "Noragami", yil: 2014, reyting: 8, top: 59 },
    { name: "Durarara!!", yil: 2010, reyting: 8, top: 60 },
    { name: "Inuyasha", yil: 2000, reyting: 8, top: 61 },
    { name: "Rurouni Kenshin", yil: 1996, reyting: 9, top: 62 },
    { name: "Yu Yu Hakusho", yil: 1992, reyting: 8, top: 63 },
    { name: "Shokugeki no Soma", yil: 2015, reyting: 7, top: 64 },
    { name: "Akira", yil: 1988, reyting: 9, top: 65 },
    {
        name: "Neon Genesis Evangelion: The End of Evangelion",
        yil: 1997,
        reyting: 9,
        top: 66,
    },
    { name: "FLCL", yil: 2000, reyting: 8, top: 67 },
    { name: "Tengen Toppa Gurren Lagann", yil: 2007, reyting: 9, top: 68 },
    { name: "Fruits Basket", yil: 2019, reyting: 9, top: 69 },
    { name: "Made in Abyss", yil: 2017, reyting: 8, top: 70 },
    { name: "Dorohedoro", yil: 2020, reyting: 7, top: 71 },
    { name: "Beck: Mongolian Chop Squad", yil: 2004, reyting: 8, top: 72 },
    { name: "Kuroko no Basket", yil: 2012, reyting: 8, top: 73 },
    { name: "Spirited Away", yil: 2001, reyting: 10, top: 74 },
    { name: "Princess Mononoke", yil: 1997, reyting: 9, top: 75 },
    { name: "Sword Art Online", yil: 2012, reyting: 7, top: 76 },
    { name: "Viktoria: Tayoq va Qilich", yil: 2024, reyting: 4, top: 77 },
    { name: "Solo Leveling", yil: 2024, reyting: 6, top: 78 },
    {
        name: "Davolash sehridan foydalanishni notog'ri usuli",
        yil: 2024,
        reyting: 5,
        top: 79,
    },
    { name: "Drifters", yil: 2016, reyting: 7, top: 80 },
    { name: "Seraph of the End", yil: 2015, reyting: 7, top: 81 },
    { name: "Golden Time", yil: 2013, reyting: 7, top: 82 },
    { name: "Guilty Crown", yil: 2011, reyting: 7, top: 83 },
    { name: "Kabaneri of the Iron Fortress", yil: 2016, reyting: 7, top: 84 },
    {
        name: "Anohana: The Flower We Saw That Day",
        yil: 2011,
        reyting: 8,
        top: 85,
    },
    { name: "Highschool of the Dead", yil: 2010, reyting: 7, top: 86 },
    { name: "Elfen Lied", yil: 2004, reyting: 7, top: 87 },
    { name: "Paranoia Agent", yil: 2004, reyting: 8, top: 88 },
    { name: "Berserk", yil: 1997, reyting: 9, top: 89 },
    { name: "Trigun", yil: 1998, reyting: 9, top: 90 },
    { name: "The Devil is a Part-Timer!", yil: 2013, reyting: 7, top: 91 },
    { name: "Steins;Gate 0", yil: 2018, reyting: 8, top: 92 },
    { name: "Shiki", yil: 2010, reyting: 7, top: 93 },
    { name: "The Garden of Words", yil: 2013, reyting: 8, top: 94 },
    { name: "Your Name", yil: 2016, reyting: 9, top: 95 },
    { name: "Weathering with You", yil: 2019, reyting: 8, top: 96 },
    { name: "The Wind Rises", yil: 2013, reyting: 8, top: 97 },
    { name: "Howl's Moving Castle", yil: 2004, reyting: 9, top: 98 },
    { name: "Castle in the Sky", yil: 1986, reyting: 8, top: 99 },
    {
        name: "Nausicaä of the Valley of the Wind",
        yil: 1984,
        reyting: 9,
        top: 100,
    },
];

const randomizedAnimelar = randomizeArray(animelar);

anime.innerHTML = randomizedAnimelar
    .map((item) => {
        return `
        <div class="anime">
                    <h4 class="name">
                        <span class="text">Name:</span> ${item.name}
                    </h4>
                    <div class="infoContainer">
                        <h4 class="year">
                            <span class="text">year:</span> ${item.yil}
                        </h4>
                        <h4 class="rating">
                            <span class="text">rating:</span> ${item.reyting}
                        </h4>
                         <h4 class="top">
                            <span class="text">top:</span> ${item.top}
                        </h4>
                        <button id="like">🤍</button>
                    </div>
                </div>
     `;
    })
    .join("");

// BY NAME
byName.addEventListener("click", () => {
    byName.classList.add("active");
    byYear.classList.remove("active");
    byRating.classList.remove("active");
    byTop.classList.remove("active");

    const namelar = animelar.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    anime.innerHTML = namelar
        .map((item) => {
            return `
            <div class="anime">
                        <h4 class="name">
                            <span class="text">Name:</span> ${item.name}
                        </h4>
                        <div class="infoContainer">
                            <h4 class="year">
                                <span class="text">year:</span> ${item.yil}
                            </h4>
                            <h4 class="rating">
                                <span class="text">rating:</span> ${item.reyting}
                            </h4>
                            <h4 class="top">
                            <span class="text">top:</span> ${item.top}
                            </h4>
                            <button id="like">🤍</button>
                        </div>
                    </div>
         `;
        })
        .join("");
});

// BY YEAR
byYear.addEventListener("click", () => {
    byYear.classList.add("active");
    byName.classList.remove("active");
    byRating.classList.remove("active");
    byTop.classList.remove("active");

    const namelar = animelar.sort((a, b) => {
        return b.yil - a.yil;
    });

    anime.innerHTML = namelar
        .map((item) => {
            return `
            <div class="anime">
                        <h4 class="name">
                            <span class="text">Name:</span> ${item.name}
                        </h4>
                        <div class="infoContainer">
                            <h4 class="year">
                                <span class="text">year:</span> ${item.yil}
                            </h4>
                            <h4 class="rating">
                                <span class="text">rating:</span> ${item.reyting}
                            </h4>
                            <h4 class="top">
                            <span class="text">top:</span> ${item.top}
                            </h4>
                            <button id="like">🤍</button>
                        </div>
                    </div>
         `;
        })
        .join("");
});

// BY RATING
byRating.addEventListener("click", () => {
    byRating.classList.add("active");
    byYear.classList.remove("active");
    byName.classList.remove("active");
    byTop.classList.remove("active");

    const namelar = animelar.sort((a, b) => {
        return b.reyting - a.reyting;
    });

    anime.innerHTML = namelar
        .map((item) => {
            return `
            <div class="anime">
                        <h4 class="name">
                            <span class="text">Name:</span> ${item.name}
                        </h4>
                        <div class="infoContainer">
                            <h4 class="year">
                                <span class="text">year:</span> ${item.yil}
                            </h4>
                            <h4 class="rating">
                                <span class="text">rating:</span> ${item.reyting}
                            </h4>
                            <h4 class="top">
                            <span class="text">top:</span> ${item.top}
                            </h4>
                            <button id="like">🤍</button>
                        </div>
                    </div>
         `;
        })
        .join("");
});

// BY TOP
byTop.addEventListener("click", () => {
    byTop.classList.add("active");
    byRating.classList.remove("active");
    byYear.classList.remove("active");
    byName.classList.remove("active");

    const namelar = animelar.sort((a, b) => {
        return a.top - b.top;
    });

    anime.innerHTML = namelar
        .map((item) => {
            return `
            <div class="anime">
                        <h4 class="name">
                            <span class="text">Name:</span> ${item.name}
                        </h4>
                        <div class="infoContainer">
                            <h4 class="year">
                                <span class="text">year:</span> ${item.yil}
                            </h4>
                            <h4 class="rating">
                                <span class="text">rating:</span> ${item.reyting}
                            </h4>
                            <h4 class="top">
                            <span class="text">top:</span> ${item.top}
                            </h4>
                            <button id="like">🤍</button>
                        </div>
                    </div>
         `;
        })
        .join("");
});

const like = document.querySelectorAll("#like");

like.forEach((item) => {
    item.addEventListener("click", () => {
        item.innerHTML = "❤️";
    });
});
