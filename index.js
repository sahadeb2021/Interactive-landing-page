// const func = (e) => e.style.backgroundColor = "red";
// const card = document.getElementsByClassName("card");
// card[0].setAttribute("onMouseOver",func);
// card.map((e) => e.setAttribute("onMouseOver",func));

function cardMouseOver(x)
{
    x.style.boxShadow = "0 0 10px black";
    x.style.cursor = "pointer";
}
function cardMouseOut(x)
{
    x.style.boxShadow = "0 0 2px black";
}

const morePopularCertificateToggle = ()=>{
    const button = document.getElementsByClassName("popular-certificate")[0].lastElementChild;
    const row1 = document.getElementById("row1");
    if (row1.style.display == 'none')
    {
        row1.style.display = 'flex';
        button.innerHTML = "show less";
    }
    else{
        row1.style.display = 'none';
        button.innerHTML = "show more";
    }
}


const increaseCart = ()=>{
    let cartNumber = document.getElementsByClassName("navbar")[0].childNodes[3].lastElementChild.childNodes[1].childNodes[1];
    if(cartNumber.innerHTML == 0 )
        cartNumber.innerHTML = 1;
    else
        cartNumber.innerHTML = 1 + Number(cartNumber.innerHTML);
}




