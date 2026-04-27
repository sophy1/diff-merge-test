function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
function CWE_482_665() { // UNUSED_EXPR
    this.foo + 42; // deepscan-disable-line UNUSED_EXPR
}

function CWE_482_665() { // UNUSED_EXPR
    this.foo + 42; // deepscan-disable-line UNUSED_EXPR
}


function CWE_480() { // BAD_BITWISE_OPERATOR
    var obj = null;
    if (obj & obj.prop) {
        console.log(obj.prop);
    }
}

function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
    var x = -1;
    if (x = -1) console.log('Error!', x);
}

function CWE_628() { // TOO_MANY_ARGS
    function add(x, y) {
        return x + y;
    }
    var sum = add(1, 2, 3);
    console.log(sum);
}

function CWE_670(x) { // STRAY_SEMICOLON
    while (++x <= 10) ;
    {
        sum += x;
    }
}

// function CWE_843() { // BAD_TYPE_COERCION
//     var backPosition;
//     return "backgroundPosition: " + backPosition + "px; ";
// }
