// Immediately Invoked Funcation Expressioin (IIFE)

(function chai() {
    console.log("DB Connected");
})();

( () => {
    console.log("db connected two");
}
)();