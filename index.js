
const ANIM_TIME = 2;
const FLOAT_ANIM_TIME = 3;
const THINKING_TIME = 4;
const BROOMS = 20;
const STARS = 100;
const STAR_ANIMATION_TIME = 20;
let hat = new Hat();
let scene = document.getElementsByTagName("html")[0];
hat.intialize(scene,"1s initialize-scene forwards",ANIM_TIME);


document.getElementById('sort-btn').addEventListener('click',()=>{
    document.getElementById('sort-btn').style.animation="0.2s disappear forwards";
    hat.float(FLOAT_ANIM_TIME);
    hat.think(THINKING_TIME);
})


function flyBrooms () {
    let background = document.getElementsByTagName("body")[0];
    for(let i=0;i<BROOMS;i++){
        let broom = document.createElement('i');
        broom.classList="fas fa-broom";
        broom.style.backgroundColor="#fff";
        background.appendChild(broom);
    }   
}

function starAnimate() {
    let background = document.getElementById("stars")
    for(let i=0;i<STARS;i++){
        let star = document.createElement('p');
        star.classList="star";
        star.style.top =(100*Math.random()) + "%";
        star.style.left = (100*Math.random()) + "%";
        star.style.animation= `${STAR_ANIMATION_TIME}s move-stars infinite`;
        background.appendChild(star);
    }   
}

starAnimate();