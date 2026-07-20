
const memorySection = document.getElementById("memorySection");
const nextMemoryBtn = document.getElementById("nextMemoryBtn");
const btn = document.getElementById("startBtn");
console.log("Button:", btn);
const hero = document.querySelector(".hero");
const birthday = document.getElementById("birthdayScene");
const letterSection = document.getElementById("letterSection");

btn.addEventListener("click", () => {
  if(navigator.vibrate){
    navigator.vibrate(30);
}
    hero.style.display = "none";
    birthday.classList.remove("hidden");

    window.scrollTo({
        top: birthday.offsetTop,
        behavior: "smooth"
    });

    setTimeout(() => {
        letterSection.classList.remove("hidden");

        window.scrollTo({
            top: letterSection.offsetTop,
            behavior: "smooth"
        });

        typeLetter();
    }, 2500);
});

const letter = `Dear Nia, ❤️

Happy Birthday! 🎉

I don't really know if this thing I made is good or bad... but I wanted to make it anyway. 😉🤡 If it's bad... just pretend it's artistic. 😭

I honestly don't know how everything happened so fast, but you literally became one of my favorite people. You're just so funny and idiotic (in the best way possible 😭) to hang out with, and that's what makes every moment with you so enjoyable.

Thank you for every hangout, every conversation, every laugh, and every memory we've made together. Literally everything. I really hope we get to hang out more, talk more, laugh more, and make even more memories together.

All those moments have become little treasures to me... (okay, does that sound cringe? 😭🤡 Maybe... but it's true.) Every joke you make, your random humor, the way you talk... everything is just so perfectly you. 😆 I seriously hope all of this continues forever.

I hope this year of your life brings you endless happiness, lots of good health (the thing I want the most for youuu 🤭😭), and countless reasons to smile. Even when life gets difficult, I hope you never lose that smile that somehow makes everyone around you feel happier too.

You deserve so much to be celebrated—not just today, but every single day—for being such a kind, caring, and wonderful person. I hope we always get more chances to talk, laugh, annoy each other, and hang out together.

And yes... this wasn't free. My payment is one full mandi. 🍗🍚 If you refuse... I'll consider this emotional damage. 😭🤡 I'll just smile and say, "As you wish..." while silently planning my revenge. 😌😂

I know this isn't perfect, but every little part of it was made with one wish—to make you smile today. And if it did... then mission accomplished. 🫡❤️

Happy Birthday once again, Nia. 🎂❤️
`;
let i = 0;
const text = document.getElementById("letterText");

function typeLetter() {
    if (i < letter.length) {
        text.innerHTML += letter
            .substring(i, i + 2)
            .replace(/\n/g, "<br>");

        i += 2;

        setTimeout(typeLetter, 20);
    }
}
nextMemoryBtn.addEventListener("click", () => {
  if(navigator.vibrate){
    navigator.vibrate(30);
}
switchSong(1);
    letterSection.classList.add("hidden");

    memorySection.classList.remove("hidden");

    window.scrollTo({
        top: memorySection.offsetTop,
        behavior: "smooth"
    });

});
const cards = document.querySelectorAll(".memory-card");
const nextPhotoBtn = document.getElementById("nextPhotoBtn");
const giftBtn = document.getElementById("giftBtn");

let currentCard = 0;

nextPhotoBtn.addEventListener("click", () => {

    cards[currentCard].classList.remove("active");

    currentCard++;

    if(currentCard < cards.length){

        cards[currentCard].classList.add("active");

    }else{

        nextPhotoBtn.style.display = "none";
        giftBtn.classList.remove("hidden");

    }

});
const giftSection = document.getElementById("giftSection");

giftBtn.addEventListener("click", () => {
  if(navigator.vibrate){
    navigator.vibrate(40);
}
switchSong(2);
    memorySection.classList.add("hidden");

    giftSection.classList.remove("hidden");

    setTimeout(() => {
        giftSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

});
const giftBox = document.getElementById("giftBox");
const finalMessage = document.getElementById("finalMessage");
const balloons = document.getElementById("balloons");
giftBox.addEventListener("click",()=>{
if(navigator.vibrate){
    navigator.vibrate([80,50,80]);
}
    giftBox.classList.add("shake");

    setTimeout(()=>{

        giftBox.classList.remove("shake");
        giftBox.classList.add("open");
        confetti({
    particleCount: 180,
    spread: 90,
    origin: { y: 0.6 }
});
for(let i=0;i<20;i++){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";
    star.style.left=Math.random()*100+"vw";
    star.style.bottom="-30px";
    star.style.fontSize=(18+Math.random()*18)+"px";
    star.style.pointerEvents="none";
    star.style.zIndex="99999";
    star.style.transition="3s ease-out";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.transform=
        `translateY(-120vh) rotate(${Math.random()*720}deg)`;

        star.style.opacity="0";

    },50);

    setTimeout(()=>star.remove(),3200);

}
balloons.classList.add("show");
        finalMessage.classList.remove("hidden");

        setTimeout(()=>{
            finalMessage.classList.add("show");
        },200);
setTimeout(()=>{

    document
        .getElementById("endingScreen")
        .classList
        .add("show");

},7000);
    },700);

});
document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 2800);

});

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

const songs=[
"assets/musics/Music1.mp3",
"assets/musics/music2.mp3",
"assets/musics/music3.mp3"
];
function switchSong(index){

    if(music.src===new URL(songs[index],location.href).href) return;

    music.volume=0.35;

    const fadeOut=setInterval(()=>{

        if(music.volume>0.05){

            music.volume-=0.05;

        }else{

            clearInterval(fadeOut);

            music.pause();
            music.src=songs[index];
            music.currentTime=0;
            music.play();

            music.volume=0;

            const fadeIn=setInterval(()=>{

                if(music.volume<0.35){

                    music.volume+=0.05;

                }else{

                    music.volume=0.35;
                    clearInterval(fadeIn);

                }

            },50);

        }

    },50);

}
let currentSong=0;

music.src=songs[currentSong];
music.volume = 0.35;

musicBtn.onclick=()=>{

if(music.paused){

music.play();
musicBtn.classList.add("playing");

}else{

music.pause();
musicBtn.classList.remove("playing");

}

};

music.onended=()=>{

currentSong++;

if(currentSong<songs.length){

music.src=songs[currentSong];

music.play();

}else{

musicBtn.classList.remove("playing");

}

};
const petals=document.getElementById("petals");
let petalCount = 0;

function createPetal(){
if(petalCount >= 4) return;
petalCount++;
    const petal=document.createElement("div");

    petal.className="petal";
    petal.innerHTML = "🌸";

    petal.style.left=Math.random()*100+"vw";
    petal.style.animationDuration=(5+Math.random()*4)+"s";
    petal.style.fontSize=(16+Math.random()*14)+"px";

    petals.appendChild(petal);

setTimeout(()=>{
    petal.remove();
    petalCount--;
},9000);

}

setInterval(createPetal,2200);