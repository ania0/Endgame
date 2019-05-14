const spoiler = document.querySelector('h1')
const button = document.querySelector('button')
const image= document.querySelector('img')

button.addEventListener("click", zmienText);

function zmienText(){
    console.log(spoiler)
}

spoiler.textContent = spoilery.spoiler[Math.floor(Math.random()*spoiler.length)]
imie.textContent=spoilery.imie[Math.floor(Math.random()*spoiler.length)]
  

image.classList.remove


const spoilery = [
    {
        img : "https://whatnext.pl/wp-content/uploads/2019/02/loki-thor-ragnorok-720x720.jpg",
        imie : "Loki",
        spoiler: "umrze",
    },
    {
        img: "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2018/11/avengers-wojna-bez-granic-thanos-1180x664.jpeg",
        imie: "Thanos",
        spoiler:"cię zabije",
    },
    {
        img: "https://images.immediate.co.uk/volatile/sites/3/2019/04/3523259-screenshot2019-04-16at1.34.36pm-a65cb81.png?quality=90&resize=620,413",
        imie: "Thor",
        spoiler: "zniszczy cały świat",
    },
    {
        img: "http://tiny.cc/xl6b6y",
        imie: "Iron Man",
        spoiler: "nie umrze",

    },
    {
        img: "https://vignette.wikia.nocookie.net/avengers/images/a/a8/Black_Widow.jpg/revision/latest?cb=20181209100851&path-prefix=de",
        imie: "Black Widow" ,  
        spoiler: "popełni samobójstwo",
    },
    {
        img: "https://cdn.vox-cdn.com/thumbor/3LI5EGLK1lbgApqkw06rr_x2h5U=/0x0:655x365/1200x800/filters:focal(249x23:353x127)/cdn.vox-cdn.com/uploads/chorus_image/image/55356661/spider_man_homecoming.0.jpg",
        imie: "Spider Man",
        spoiler: "zabije Thanosa",
    }
    

]
