function debounce(methods,context) {
    clearTimeout(methods.timeID)
    methods.timeID = setTimeout(function () {
        methods()
    },100)
}
function jk() {
    console.log(1)
}