function addUser()
{
    player_1=document.getElementById("player_1_nameInput").value;
    player_2=document.getElementById("player_2_nameInput").value;
    localStorage.setItem("player_1" , player_1);
    localStorage.setItem("player_2" , player_2);
    window.location="game_page.html";
}