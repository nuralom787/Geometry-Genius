function CalculateTriangleAria() {
    // Get and Set Triangle Base!
    const triangleBaseInput = document.getElementById("triangle-base");
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // Get and Set Triangle Height!
    const triangleHightInput = document.getElementById("triangle-height");
    const triangleHightText = triangleHightInput.value;
    const height = parseFloat(triangleHightText);

    // Calculate Triangle Aria!
    const TriangleAria = 0.5 * base * height;

    // Display Triangle Aria!
    const triangleAria = document.getElementById("triangle-aria");
    triangleAria.innerText = TriangleAria;
}



function CalculateRectangleAria() {
    // Get and Set Rectangle Width!
    const rectangleWidthInput = document.getElementById("rectangle-width");
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);

    // Get and Set Rectangle Length!
    const rectangleLengthInput = document.getElementById("rectangle-length");
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    // Calculate Rectangle Aria!
    const RectangleAria = width * length;

    // Display Rectangle Aria!
    const rectangleAria = document.getElementById("rectangle-aria");
    rectangleAria.innerText = RectangleAria;
}



function CalculateParallelogramAria() {
    // Get and Set Parallelogram Base!
    const parallelogramBaseInput = document.getElementById("parallelogram-base");
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);

    // Get and Set Parallelogram Height!
    const parallelogramHightInput = document.getElementById("parallelogram-height");
    const parallelogramHightText = parallelogramHightInput.value;
    const height = parseFloat(parallelogramHightText);

    // Calculate Parallelogram Aria!
    const ParallelogramAria = base * height;

    // Display Parallelogram Aria!
    const parallelogramAria = document.getElementById("parallelogram-aria");
    parallelogramAria.innerText = ParallelogramAria;
}

