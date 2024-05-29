function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function printBye() {
    console.log("bye!");
}

function handleDblClick(){
    console.log("you double clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora repellendus quisquam provident illo aut aliquid commodi, dolor suscipit! Dolore omnis voluptatibus tempora accusantium hic nobis ullam? Veniam, culpa. Nisi! this parah is for event demothis parah is for event demothis parah is for event demo</p>
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div>
    );
}