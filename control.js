let newTop;
let newLeft;
CallGoBtn = (btnclick, idName) => {

    if (btnclick === 'n') {
        // document.getElementById(idName).style.background = 'red';

        let notV = document.getElementById(idName).style.top;
        let nnnb = notV.split('px');
        newTop = nnnb[0] - 20;
        document.getElementById(idName).style.top = newTop + 'px';
        console.log('ttttttttt 1', newTop);
    }
    else if (btnclick === 's') {
        // document.getElementById(idName).style.background = 'pink';

        let notV = document.getElementById(idName).style.top;
        console.log('ssssssssssssssssss', notV)
        if (notV === "" || undefined || null) {
            notV = '0px'
            console.log('loadddddd 2', notV)
        }
        let nnnb = notV.split('px');
        newTop = parseInt(nnnb[0]) + 20;
        document.getElementById(idName).style.top = newTop + 'px';
        console.log('ttttttttt 1', newTop);
    }

    else if (btnclick === 'e') {
        // document.getElementById(idName).style.background = 'green';

        let notV = document.getElementById(idName).style.left;
        console.log('loadddddd 1', notV);
        if (notV === "" || undefined || null) {
            notV = '240px'
            console.log('loadddddd 2', notV)
        }
        let nnnb = notV.split('px');
        console.log('bbbbbbbbbb 3', nnnb[0])
        newLeft = parseInt(nnnb[0]) + 20;
        document.getElementById(idName).style.left = newLeft + 'px';
    }
    else if (btnclick === 'w') {
        // document.getElementById(idName).style.background = 'pink';

        let notV = document.getElementById(idName).style.left;
        console.log('wwwwwwww 1', notV);
        if (notV === "" || undefined || null) {
            notV = '240px'
            console.log('wwwwwwww 2', notV)
        }
        let nnnb = notV.split('px');
        console.log('wwwwwww 3', nnnb[0])
        newLeft = parseFloat(nnnb[0]) - 20;
        document.getElementById(idName).style.left = newLeft + 'px';
    };

    if (newTop >= 380 && newTop < 500) {
        if (newLeft >= 600) {

            console.log('winnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnner')
            console.log('top', newTop)
            console.log('left', newLeft)
            document.getElementById('notice').innerHTML = '<h1> Winner</h1>'
        }
        else {
            document.getElementById('notice').innerHTML = 'Closer'
            console.log('Chosssssssssssssssssser');
            console.log('left', newLeft)
        }
    };
}

