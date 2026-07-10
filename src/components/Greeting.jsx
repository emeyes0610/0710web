
const Greeting = () => {
    const handleClick = () => {
        const text = document.getElementById("name").value;
        alert("Hello, "+text+"!");
    };
  return(
    <div>
        <input id="name"/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
};

export default Greeting;
