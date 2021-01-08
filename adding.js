function send()
{
    let name = document.getElementById("name").value;
    let flavor = document.getElementById("flavor").value;
     
    window.open(`mailto:${name}?subject=subject&body=${flavor}`);

}