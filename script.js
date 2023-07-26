document.addEventListener("DOMContentLoaded", function () {
    // create the main container
    let body = document.querySelector("body");
    body.className = "bg-dark ";
    // create appendTo for Elements function
    const createEappend = (element, idName, className, appendTo) => {
        const e = document.createElement(element);
        e.className = className;
        appendTo.appendChild(e);
        e.setAttribute('id', idName);
        return e;
    };
    // create appendTo for text function
    const createTappend = (text, appendTo) => {
        const t = document.createTextNode(text);
        appendTo.appendChild(t);
        return t
    };
    // elements being created and are stable 
    let divContainer = createEappend("div", "contain", "container my-3", body);
    let row1 = createEappend("div", "row1", "row justify-content-center", divContainer);
    let btn = createEappend("div", "createSquare", "col col-6 col-sm-5 col-md-4 col-lg-4 btn bg-primary", row1);
    let btnText = createTappend("Click Here for new square", btn);
    let row2 = createEappend('div', "row2", 'row col-12 justify-content-center', divContainer);
    let squareId = 0;
    //create button click function that creates a square and its functions
    btn.addEventListener('click', function () {
        //  proof of working click
        console.log('button clicked');
        // square and all its att's and functions
        squareId += 1;
        let square = createEappend('div', squareId, 'col col-sm-2 border border-warning text-center text-white rounded-3 m-1', row2);
        let squareH1 = createEappend('h1', 'text', 'h1', square);
        squareH1.style.visibility = 'hidden';
        let squareText = createTappend(squareId, squareH1);
        // mouse over event
        square.addEventListener('mouseover', function () { squareH1.style.visibility = 'visible' });
        // mouse out event
        square.addEventListener('mouseout', function () { squareH1.style.visibility = 'hidden' });
        // creates click on created square
        square.addEventListener('click', function () {
            square.style.backgroundColor = randomColor();
            // proof of working click
            console.log('square clicked');
        });
        // creates dblclick on created square
        square.addEventListener('dblclick', function () {
            let squareId = parseInt(square.id);
            let nextSquare = square.nextElementSibling;
            let preSquare = square.previousElementSibling;
            // create actions on dblclick
            if (squareId % 2 == 0) {
                if (nextSquare === null) {
                    alert('Next Square not avalible');
                } else {
                    row2.removeChild(nextSquare);
                }
            } else {
                if (preSquare === null) {
                    alert('Previous Square not avalible');
                } else {
                    row2.removeChild(preSquare);
                };
            }
        });
        // proof of working dblclick
        console.log(squareId);
        console.log('next square is ');
        console.log(nextSquare);
        console.log('next square Id is ');
        console.log(nextSquare.id);
        console.log('previous square is ');
        console.log(preSquare);
        console.log('previous square Id is ');
        console.log(preSquare.id);
    });
    // create random color function and get set color list
    const colors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa', '#343a40'];
    function randomColor() {
        let selectedColor = colors[Math.floor(Math.random() * colors.length)];
        return selectedColor;
    };
});