 let turn ='x';
 let in_title=document.querySelector('.title')

 function game(id){
    let element=document.getElementById(id)
    if(turn === 'x' && element.innerHTML=='' )
    {
        element.innerHTML= 'x';
         turn='o';
         in_title.innerHTML='o'
    }
    else if(turn === 'o' && element.innerHTML=='')
    {
        element.innerHTML= 'o';
        turn='x'
        in_title.innerHTML='x'

    }
 winner();
 }  
 //
 let arr_game=[];
function process(n1,n2,n3){
    in_title.innerHTML= `${arr_game[n1]} winner`;

    document.getElementById('item'+n1).style.background='black';
       document.getElementById('item'+n2).style.background='black';
       document.getElementById('item'+n3).style.background='black';

       setInterval(()=>{in_title.innerHTML +='.'},1000);
       setTimeout(()=>{ location.reload() },4000);

}

 function winner(){
    for(let i=1; i<10; i++){
        arr_game[i] = document.getElementById('item'+i).innerHTML;
    }




    if(arr_game[1]== arr_game[2] && arr_game[2]==arr_game[3] && arr_game[1]!='')
    {
       process(1,2,3);
    }
    else if(arr_game[4]== arr_game[5] && arr_game[4]==arr_game[6] && arr_game[5]!='')
    {
        process(4,5,6);

    }
    else if(arr_game[7]== arr_game[8] && arr_game[8]==arr_game[9] && arr_game[9]!='')
    {
        process(7,8,9);

    }
    else if(arr_game[1]== arr_game[4] && arr_game[4]==arr_game[7] && arr_game[7]!='')
    {
        process(1,4,7);

    }
    else if(arr_game[2]== arr_game[5] && arr_game[5]==arr_game[8] && arr_game[8]!='')
    {
        process(2,5,8);

    }
    else if(arr_game[3]== arr_game[6] && arr_game[6]==arr_game[9] && arr_game[9]!='')
    {
        process(3,6,9);

    }
    else if(arr_game[1]== arr_game[5] && arr_game[5]==arr_game[9] && arr_game[9]!='')
    {
        process(1,5,9);

    }
    else if(arr_game[3]== arr_game[5] && arr_game[5]==arr_game[7] && arr_game[7]!='')
    {
        process(3,5,7);

    }



 }