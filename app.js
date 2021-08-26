var count = 1;

function fill(control) {

    // if (count % 2 != 0) {
    //     if (count <= 9) {
    //         document.getElementById(control.id).innerHTML = 'X'
    //     } else {
    //         document.getElementById(control.id).innerHTML = 'O'
    //     }
    //     count++
    //     if (checkMini()) {
    //         alert('Winner')
    //         reset()
    //     }
    // } else {
    //     alert("Match Draw");
    //     reset()
    // }

    if (count <= 9) {
        if (count % 2 != 0) {
            document.getElementById(control.id).innerHTML = 'X'
        } else {
            document.getElementById(control.id).innerHTML = 'O'
        }

        count++
        if (checkMini()) {
            alert('Winner')
            reset()
        }
    } else {
        alert("Match Draw");
        reset()
    }


}

function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('div' + i).innerHTML = "";
        count = 1
    }
}

function checkMini() {
    if (getData('div1') != '' && getData('div2') != '' && getData('div3') != '' && getData('div1') == getData('div2') && getData('div2') == getData('div3')) {
        return true;
    }
}

function checkCondition1(div1,div2,div3){
    if (getData(div1) != '' && getData(div2) != '' && getData(div3) != '' && getData('div1') == getData('div2') && getData('div2') == getData('div3')) {
        return true;
    }
}

function getData(div) {
    return document.getElementById(div).innerHTML;
}