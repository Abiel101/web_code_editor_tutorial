//Retrieve Elements
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

//Setup Ace
let codeEditor = ace.edit("editorCode");
let defaultCode = "//Add Code Here" + "\r\n";

//Editor Object
let editorLib = {
    init(){
        //Configure Ace Settings

        //Theme
        codeEditor.setTheme("ace/theme/nord_dark"); //gruvbox_dark_hard, one_dark

        //Set Language
        codeEditor.session.setMode("ace/mode/javascript");

        //Set Options
        codeEditor.setOptions({
            // fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        //Set default Code
        codeEditor.setValue(defaultCode);
    }
}

//Events
executeCodeBtn.addEventListener('click', () => {
    // Get input from the code editor
    const userCode = codeEditor.getValue();

    //Run the User Code
    try {
        new Function(userCode)();
    } catch (err) {
        console.error(err);
    }
})

resetCodeBtn.addEventListener('click', () => {
    //Clear ace Editor
    codeEditor.setValue(defaultCode)
})

editorLib.init();