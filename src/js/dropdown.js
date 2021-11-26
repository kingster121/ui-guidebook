import '../dropdown.css';

const dropdownBtn=document.getElementById('dropdown1');
dropdownBtn.addEventListener('click',show_hide);

function show_hide(){
    const click=document.getElementById('list-items');
    if(click.style.display==="none"){
        click.style.display="block";
    }
    else{
        click.style.display="none";
    }
}