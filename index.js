let choices= document.querySelectorAll(".choices")
let msgcon= document.querySelector(".msg-con")
let user1= document.querySelector(".user")
let comp1= document.querySelector(".comp")
let msg= document.querySelector(".msg")
let msg_user= document.querySelector(".msg-user")
let msg_com= document.querySelector(".msg-com")
// let choices= document.getAttribute(".choices")

user1=0;
comp1=0;

const comp =()=>{

    const arr=["rock" ,"paper" ,"scissor"]
   let comp_turn= Math.floor(Math.random() * 3);
   return arr[comp_turn];
}

const show_winner=(winner,user,computer)=>{
    if(winner){
        user1++;
        msg_user.innerHTML=user1;
        console.log(" you are the winner")
        msgcon.innerHTML=`you win ${user } beats ${computer}`;
        msgcon.style.backgroundColor = "green";
        
    }
    else{
        comp1++;
        msg_com.innerHTML=comp1;
        console.log("you lose");
         msgcon.innerHTML=`you lose ${computer } beats ${user}`;
         msgcon.style.backgroundColor = "red";
    }
}


const playgame =(user,computer)=>{
    
    if (user == computer){
        console.log("draw");
         msgcon.innerHTML="draw"
         msgcon.style.backgroundColor = "black";
        
    }
  else{
    let winner=true;
     if( user =="rock"){
        winner=computer=="paper"?false:true;
   }
   else if( user =="paper"){
       winner=computer=="scissor"?false:true;
  }
  else if( user =="scissor"){
   winner=computer=="rock"?false:true;
}

show_winner(winner,user,computer);
  }
    



}

choices.forEach((choice)=>
    choice.addEventListener("click",()=>{
       let user= choice.getAttribute("id");
       console.log("the user clicked",user);

      let computer= comp();
      console.log("computer clicked",computer);


      playgame(user,computer);
       
    })
)