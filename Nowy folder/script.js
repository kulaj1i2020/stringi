btn1=document.querySelector("#btn1");
display=document.querySelector(".display");
p1=document.querySelector("#p1");
p2=document.querySelector("#p2");
p3=document.querySelector("#p3");
licznik=0;
licznik2=0;
licznik3=0;


s1=p1.innerText;
s2=p2.innerText;
s3=p3.innerText;

so1=s1.split(' ');
so2=s2.split(' ');
so3=s3.split(' ');

sz1=s1.split('.');
sz2=s2.split('.');
sz3=s3.split('.');



btn1.addEventListener("click", function(evt){
    evt.preventDefault();

   


for(let i=0;i<so1.length;i++)
{
 
    if(so1[i].includes("o"))
    {
        licznik=licznik+1;
    }
}


display.innerHTML += "Ilość wyrazów z o w pierwszym p: "+licznik + " Ilość zdań: "+ sz1.length + "<br>";






for(let i=0;i<so2.length;i++)
{
 
    if(so2[i].includes("o"))
    {
        licznik2=licznik2+1;
    }
}


display.innerHTML += "Ilość wyrazów z o w drugim p: "+licznik2 + " Ilość zdań: "+ sz2.length +"<br>";



for(let i=0;i<so3.length;i++)
{
 
    if(so3[i].includes("o"))
    {
        licznik3=licznik3+1;
    }
}


display.innerHTML += "Ilość wyrazów z o w trzecim p: "+licznik3 + " Ilość zdań: "+ sz3.length +"<br>" ;













})

