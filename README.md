# CONNECT FOUR.
###### This was a project for coding bootcamp [SPICED Academy](https://www.spiced-academy.com/).

<img src="/images/01_connect_four.png">

## 1. Description 📖

About the goal of this project:

In this game players take turns dropping their pieces into one of seven columns that have six rows of slots. The first player to get their pieces into four slots that are vertically, horizontally, or diagonally contiguous wins the game. It follows these basic rules:

1. The board has six rows and seven columns
2. Two players take turns selecting a column to drop their checker into
3. When a player wins, a message appears to announce the victory
4. After a player wins, it should be possible to reset the game and play again
5. The gameplay should involve at least one animation (for example, the checkers could fall into their slot rather than just appear instantaneously)

## 2. Challenges 🙇

Even though I've used [jQuery](https://jquery.com/) for developing this game - which made it a lot easier than writing pure JavaScript - I've encountered a few obstacles during the process. 

One was how to figure out if a player has four checkers in a row, be it vertically, horizontally, or diagonally. This was solved by iterating through an array which contains all 48 possible combinations for a board with six rows and seven columns:

```javascript
const coordinates = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [5, 10, 15, 20],
        [4, 9, 14, 19],
        [3, 8, 13, 18],
        [11, 16, 21, 26],
        [10, 15, 20, 25],
        [9, 14, 19, 24],
        [17, 22, 27, 32],
        [16, 21, 26, 31],
        [15, 20, 25, 30],
        [23, 28, 33, 38],
        [22, 27, 32, 37],
        [21, 26, 31, 36],
        [36, 31, 26, 21],
        [37, 32, 27, 22],
        [38, 33, 28, 23],
        [30, 25, 20, 15],
        [31, 26, 21, 16],
        [32, 27, 22, 17],
        [24, 19, 14, 9],
        [25, 20, 15, 10],
        [26, 21, 16, 11],
        [18, 13, 8, 3],
        [19, 14, 9, 4],
        [20, 15, 10, 5],
        [41, 34, 27, 20],
        [40, 33, 26, 19],
        [39, 32, 25, 18],
        [35, 28, 21, 14],
        [34, 27, 20, 13],
        [33, 26, 19, 12],
        [29, 22, 15, 8],
        [28, 21, 14, 7],
        [27, 20, 13, 6],
        [23, 16, 9, 2],
        [22, 15, 8, 1],
        [21, 14, 7, 0]
    ];
```

Another fun one was figuring out how to display the victory message, depending on the player. This was achieved by creating a function that switches players after every turn:

```javascript
function switchPlayers() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
            borderColor = '#fdc57b';
        } else {
            currentPlayer = 'player1';
            borderColor = '#007880';
        }
    }
```

Depending on the current (winning) player, another function shows the message with the correct color and "player name". To restart the game, both classes of players get removed and replaced by a white border, to indicate the start of a new game:

```javascript
$('.exit').on('click', function() {
        $('.victory-message').css({ opacity: '0', zIndex: '-1' });
        $('.slot').removeClass('player1');
        $('.slot').removeClass('player2');
        borderColor = 'white';
        return;
    });
```

<img src="/images/02_connect_four.png">


