
const TEAMS = {
    GOLDYNROAR : {id:1,color:'#6e1a1f',name:'goldynroar'},
    SERPENTISS : {id:2,color:'#0c3d37',name:'serpentiss'},
    TALONFALL : {id:3,color:'#371a6e',name:'talonfall'},
    BERENHEART : {id:4,color:'#9f3f1c',name:'berenheart'},
    CACKLESTAG : {id:5,color:'#1a456e',name:'cacklestag'}
}

let CURRENT_TEAM = null;
class Hat {

    static THOUGHTS = [
        {
            thought: "Feeling Brave, are you?",
            team: TEAMS.GOLDYNROAR
        },
        {
            thought : "You seem to be a chivalrous sort",
            team : TEAMS.GOLDYNROAR
        },
        {
            thought : "A bottomless well of ambition!",
            team : TEAMS.SERPENTISS
        },
        {
            thought : "Your pride might be your downfall",
            team : TEAMS.SERPENTISS
        },
        {
            thought : "There is much patience in you",
            team : TEAMS.BERENHEART
        },
        {
            thought : "Your sense of loyalty is strong",
            team : TEAMS.BERENHEART
        },
        {
            thought : "The past has no weight on your soul",
            team : TEAMS.CACKLESTAG
        },
        {
            thought : "The future awaits you",
            team : TEAMS.CACKLESTAG
        },
        {
            thought : "You are the careful sort",
            team : TEAMS.TALONFALL
        },
        {
            thought : "Quick witted? Or a Half Wit?",
            team : TEAMS.TALONFALL
        }
    ]



    intialize(scene = null, animation = "none", ANIM_TIME = 1){
        let hat = document.getElementById("hat-main");
        let hatBackground = document.getElementById("hat-bg");
        let hatEyeLeft = document.getElementById("hat-eye-left")
        let hatEyeRight = document.getElementById("hat-eye-right")
        let hatMouth = document.getElementById("hat-mouth")

        hat.style.display="block";
        hatBackground.style.animation=`${ANIM_TIME}s initialize-hat forwards`;
        hatEyeLeft.style.animation=`${ANIM_TIME}s  initialize-hat-eyes forwards 1s`;
        hatEyeRight.style.animation=`${ANIM_TIME}s  initialize-hat-eyes forwards 1s`;
        hatMouth.style.animation=`${ANIM_TIME}s  initialize-hat-mouth forwards 1.5s`;

        if(scene != null && animation !="none"){
            scene.style.animation = animation;
        }
    } 
    
    float(ANIM_TIME) {
        let hat = document.getElementById("hat-main");
        hat.style.animation= `hat-floating ${ANIM_TIME}s ease-in-out infinite`
    }

    stopThinking(){
        setTimeout(()=>this.displayBadgePage(CURRENT_TEAM.color,CURRENT_TEAM.name),2000);
    }

   
    think(ANIM_TIME){
        let thoughts = document.getElementById("thoughts");
        let randomThought = this.getRandomThought();
        thoughts.innerText = Hat.THOUGHTS[randomThought].thought;
        CURRENT_TEAM = Hat.THOUGHTS[randomThought].team;
        thoughts.style.animation = `type ${ANIM_TIME}s forwards`;
        setTimeout(()=> this.think(ANIM_TIME),ANIM_TIME*1000)
        
    }

     getRandomThought() {
        let min = 0;
        let max = Hat.THOUGHTS.length - 1;
        let index = Math.floor(Math.random() * (max - min + 1) + min); 
        return index;
      }
      

}
