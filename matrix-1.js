let sz = ["1","2","3","4","5","6","7","8","9"];
let db = document.getElementsByClassName("doboz");
let t1 = legyenVeletlenSorrend(sz);
let szamok = ["","","","","","","","","",];


function legyenVeletlenSorrend(tomb) 
{
    let ujTomb = [];
    let hossz = tomb.length;
    
    for (let i= 0; i< hossz;i++) 
    {
        let index = Math.floor(Math.random() * tomb.length);
        ujTomb.push(tomb[index])
        tomb.splice(index, 1)
    }
    return ujTomb;
}
function kiir()
{
    let tartalom = "";
    for(let i = 0; i < t1.length; i++)
    {
        tartalom += `
        <div class="doboz" onclick="szamhozzaad(this)" data-index = "${i}">
            <p>${szamok[i]}</p>
        </div>`
    }
    document.getElementById("contain").innerHTML = tartalom; 
}

function szamhozzaad(elem)
{
 let index = elem.dataset.index;

 console.log(index)
 
 szamotberak(index)

}

function szamotberak(index)
{
    szamok.splice(index, 1, t1.pop()) //t1-ből kiveszi az utolsó elemet, és az index helyére berakja 
    console.log(szamok)
}
kiir()

