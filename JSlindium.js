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

function checkboxRequieredValidator(cbs, validator) {
    
    let check = false;
    document.querySelectorAll(cbs).forEach(function (e) {
        check |= e.checked;
    })
    if (!check) {
        event.preventDefault();
        validator.show();
    }
    else {validator.hide();}
       
}
