let hello=document.querySelector('.input').addEventListener("input",function(e){
    let lbs=e.target.value;

    document.querySelector('.grams').style.display='block';
    document.querySelector('.ounce').style.display='block';
    document.querySelector('.pounds').style.display='block';

    document.querySelector('.grams-output').innerHTML=lbs*1000;
    document.querySelector('.pounds-output').innerHTML=lbs*3;
    document.querySelector('.ounces-output').innerHTML=lbs*35.275;



    

});

