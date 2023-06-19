function App() {
    function doSomething(){
         window.confirm("You Clicked Me");
    }
    function doesSomething(){
         alert("Congrats")
    }
    function didSomething(value){
        alert(`you clicked me ${value}`);
    }
    function Something(e){
        e.preventDefault();
        console.log("FIle Saved");
        alert("Hired");
    }
    return <>
        <h1> Hello</h1>
        <div>
        <button style={{ marginLeft: '10px' }} onClick={doSomething}> Click Me</button>
        

        <button style={{ marginLeft: '10px' }} onDoubleClick={doesSomething}> SUbmit</button>

        <button style={{ marginLeft: '10px' }} onDoubleClick={ () => didSomething(1)}> SUbmit</button>
        </div>
        <br />

        <div>
        <form  style={{ marginLeft: '10px' }} onSubmit= {Something}>
            <input type="text" />
        </form>
        </div>
        
        </>

        
   
}
export default App;