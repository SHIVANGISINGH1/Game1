player1 = {
    score: 0,
    btn : document.querySelector('#p1'),
    span : document.querySelector('.s1')
}
player2 = {
    score: 0,
    btn : document.querySelector('#p2'),
    span : document.querySelector('.s2')
}



const res = document.querySelector('#reset');
const select = document.querySelector('#sel');

function win(player,opponent)
{
    if (player.score < select.value && opponent.score < select.value)
    {
        player.score+=1;
        player.span.innerText = player.score;
        if (player.score == select.value)
        {
            player.span.classList.add('green');
            opponent.span.classList.add('red');
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }
    }
}


player1.btn.addEventListener('click',function() {
    win(player1,player2)})

player2.btn.addEventListener('click',function(){
win(player2,player1)})

res.addEventListener('click',resett)

select.addEventListener('change',function(){
    resett();
})

function resett(){
    player1.score = 0;
    player2.score = 0;
    player1.span.innerText = "0";
    player2.span.innerText = "0";
    player2.span.classList.remove('green','red');
    player1.span.classList.remove('red','green');
    player1.btn.disabled = false;
    player2.btn.disabled = false;
}