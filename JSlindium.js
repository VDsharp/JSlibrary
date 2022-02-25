Object.defineProperty(Object.prototype, "show", {
    value: function () {
        this.classList.remove("d-none");
    },
    enumerable: false
});


Object.defineProperty(Object.prototype, "hide", {
    value: function () {
        this.classList.add("d-none");
    },
    enumerable: false
});

var noenterkey = function noEnterkey(event) {
   
    // Compatibilité IE / Firefox
    if (!event && window.event) {
        event = window.event;
    }

    if (event.which === 13 || event.keyCode === 13) {
        //code to execute here

        event.returnValue = false;
        event.cancelBubble = true;
        return false;
    }
    return true;
}


var cb_rfv = function checkboxRequieredValidator(cbs, validator) {
    
    let check = false;
    document.querySelectorAll(cbs).forEach(function (e) {
        check |= e.checked;
    })
    if (!check) {
        event.preventDefault();
        document.querySelector(validator).show();
    }
    else { document.querySelector(validator).hide();}
       
}

export { noenterkey, cb_rfv };
