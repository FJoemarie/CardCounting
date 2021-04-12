let deck = [1,2,3,4,5,6,7,8,9,10, "J", "Q","K", 'A'];
let count = 0;
let playerhand = [];

let submitcards = () =>{
    let newcard1 = document.querySelector('.card1').value;
    let newcard2 = document.querySelector('.card2').value;
    let newcard3 = document.querySelector('.card3').value;
    let newcard4 = document.querySelector('.card4').value;
    let newcard5 = document.querySelector('.card5').value;
    playerhand.push(newcard1, newcard2, newcard3, newcard4, newcard5)
    alert("Click 'Draw' to Count Card Score")
}
let countScore = (card) => {
    card === 1 || card === 2 ||card === 3 ||card === 4 ||card === 5 ||card === 6 ||card === '1' || card
    ? count++
    :(card === 7 ||card === 8 ||card === 9 ||card === '7'||card === '8' ||card === '9'
    ?count +=0
    :(card === 10 ||card === 'J' ||card === 'Q' ||card === 'K' ||card === 'A'
    ? count --
    :null));
    return count;
}

let showScore = () =>
{
    document.querySelector('.playercard').innerHTML = "Current Card/s: " + playerhand; 
}

let countingcards =() =>{
    countScore(playerhand[0]), countScore(playerhand[1]), countScore(playerhand[2]), countScore(playerhand[3], countScore(playerhand[4]));
    document.querySelector('.count').innerHTML = count + ((count>0) ? ' Bet' : ' Hold');
}

let resetIt = () =>
{
    count = 0;
    document.querySelector('.playercard').innerHTML = " ";
    document.querySelector('.count').innerHTML = " ";
    document.querySelector('.card1').innerHTML = " ";
    document.querySelector('.card2').innerHTML = " ";
    document.querySelector('.card3').innerHTML = " ";
    document.querySelector('.card4').innerHTML = " ";
    document.querySelector('.card5').innerHTML = " ";


}