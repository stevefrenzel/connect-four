(function() {
    'use strict';

    let currentPlayer = 'player1';
    let allSlots = $('.slot');
    let borderColor = 'white';

    // MOUSEOVER TO SELECT EMPTY SLOT

    $('.column')
        .on('mouseenter', function(e) {
            emptySlot(e);
        })
        .on('mouseleave', function(e) {
            emptyHole(e);
        });

    // CLICK TO ADD COLOR

    $('.column').on('click', function(e) {
        emptyHole(e);
        var slotsInColumn = $(e.currentTarget).find('.slot');
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass('player1') &&
                !slotsInColumn.eq(i).hasClass('player2')
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (i == -1) {
            return;
        }
        if (checkForVictory(slotsInColumn)) {
            return showVictoryMessage();
        } else if (checkForVictory($('.row' + i))) {
            return showVictoryMessage();
        } else if (diagonalCheck()) {
            diagonalCheck();
            showVictoryMessage();
        }
        switchPlayers();
        emptySlot(e);
    });

    // DIAGONAL CHECK

    function diagonalCheck() {
        for (let i = 0; i < coordinates.length; i++) {
            let str = '';
            for (let j = 0; j < coordinates[i].length; j++) {
                if (allSlots.eq(coordinates[i][j]).hasClass(currentPlayer)) {
                    str += 'v';
                } else {
                    str += 'l';
                }
            }
            if (str.indexOf('vvvv') > -1) {
                return true;
            }
        }
    }

    // CHECK FOR VICTORY

    function checkForVictory(slots) {
        let count = 0;
        for (let i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count >= 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    // SHOW VICTORY MESSAGE

    function showVictoryMessage() {
        if (currentPlayer == 'player1') {
            $('#victory-message-one').css({ opacity: '0.9', zIndex: '2' });
        } else {
            $('#victory-message-two').css({ opacity: '0.9', zIndex: '2' });
        }
    }

    // RESTART THE GAME

    $('.exit').on('click', function() {
        $('.victory-message').css({ opacity: '0', zIndex: '-1' });
        $('.slot').removeClass('player1');
        $('.slot').removeClass('player2');
        borderColor = 'white';
        return;
    });

    // SWITCHING PLAYERS

    function switchPlayers() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
            borderColor = '#fdc57b';
        } else {
            currentPlayer = 'player1';
            borderColor = '#007880';
        }
    }

    // CHECK FOR EMPTY SLOTS & HOLES

    function emptySlot(e) {
        let slotsInColumn = $(e.currentTarget).find('.slot');
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass('player1') &&
                !slotsInColumn.eq(i).hasClass('player2')
            ) {
                slotsInColumn
                    .eq(i)
                    .find('.hole')
                    .css({ border: '5px solid ' + borderColor });
                break;
            }
        }
    }

    function emptyHole(e) {
        $(e.currentTarget)
            .find('.hole')
            .css('border', '0');
    }

    // COORDINATES

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

})();