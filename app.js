// Iris KNN Dashboard Application Logic

// Raw Dataset
const dataset = {"data": [[5.1, 3.5, 1.4, 0.2], [4.9, 3.0, 1.4, 0.2], [4.7, 3.2, 1.3, 0.2], [4.6, 3.1, 1.5, 0.2], [5.0, 3.6, 1.4, 0.2], [5.4, 3.9, 1.7, 0.4], [4.6, 3.4, 1.4, 0.3], [5.0, 3.4, 1.5, 0.2], [4.4, 2.9, 1.4, 0.2], [4.9, 3.1, 1.5, 0.1], [5.4, 3.7, 1.5, 0.2], [4.8, 3.4, 1.6, 0.2], [4.8, 3.0, 1.4, 0.1], [4.3, 3.0, 1.1, 0.1], [5.8, 4.0, 1.2, 0.2], [5.7, 4.4, 1.5, 0.4], [5.4, 3.9, 1.3, 0.4], [5.1, 3.5, 1.4, 0.3], [5.7, 3.8, 1.7, 0.3], [5.1, 3.8, 1.5, 0.3], [5.4, 3.4, 1.7, 0.2], [5.1, 3.7, 1.5, 0.4], [4.6, 3.6, 1.0, 0.2], [5.1, 3.3, 1.7, 0.5], [4.8, 3.4, 1.9, 0.2], [5.0, 3.0, 1.6, 0.2], [5.0, 3.4, 1.6, 0.4], [5.2, 3.5, 1.5, 0.2], [5.2, 3.4, 1.4, 0.2], [4.7, 3.2, 1.6, 0.2], [4.8, 3.1, 1.6, 0.2], [5.4, 3.4, 1.5, 0.4], [5.2, 4.1, 1.5, 0.1], [5.5, 4.2, 1.4, 0.2], [4.9, 3.1, 1.5, 0.2], [5.0, 3.2, 1.2, 0.2], [5.5, 3.5, 1.3, 0.2], [4.9, 3.6, 1.4, 0.1], [4.4, 3.0, 1.3, 0.2], [5.1, 3.4, 1.5, 0.2], [5.0, 3.5, 1.3, 0.3], [4.5, 2.3, 1.3, 0.3], [4.4, 3.2, 1.3, 0.2], [5.0, 3.5, 1.6, 0.6], [5.1, 3.8, 1.9, 0.4], [4.8, 3.0, 1.4, 0.3], [5.1, 3.8, 1.6, 0.2], [4.6, 3.2, 1.4, 0.2], [5.3, 3.7, 1.5, 0.2], [5.0, 3.3, 1.4, 0.2], [7.0, 3.2, 4.7, 1.4], [6.4, 3.2, 4.5, 1.5], [6.9, 3.1, 4.9, 1.5], [5.5, 2.3, 4.0, 1.3], [6.5, 2.8, 4.6, 1.5], [5.7, 2.8, 4.5, 1.3], [6.3, 3.3, 4.7, 1.6], [4.9, 2.4, 3.3, 1.0], [6.6, 2.9, 4.6, 1.3], [5.2, 2.7, 3.9, 1.4], [5.0, 2.0, 3.5, 1.0], [5.9, 3.0, 4.2, 1.5], [6.0, 2.2, 4.0, 1.0], [6.1, 2.9, 4.7, 1.4], [5.6, 2.9, 3.6, 1.3], [6.7, 3.1, 4.4, 1.4], [5.6, 3.0, 4.5, 1.5], [5.8, 2.7, 4.1, 1.0], [6.2, 2.2, 4.5, 1.5], [5.6, 2.5, 3.9, 1.1], [5.9, 3.2, 4.8, 1.8], [6.1, 2.8, 4.0, 1.3], [6.3, 2.5, 4.9, 1.5], [6.1, 2.8, 4.7, 1.2], [6.4, 2.9, 4.3, 1.3], [6.6, 3.0, 4.4, 1.4], [6.8, 2.8, 4.8, 1.4], [6.7, 3.0, 5.0, 1.7], [6.0, 2.9, 4.5, 1.5], [5.7, 2.6, 3.5, 1.0], [5.5, 2.4, 3.8, 1.1], [5.5, 2.4, 3.7, 1.0], [5.8, 2.7, 3.9, 1.2], [6.0, 2.7, 5.1, 1.6], [5.4, 3.0, 4.5, 1.5], [6.0, 3.4, 4.5, 1.6], [6.7, 3.1, 4.7, 1.5], [6.3, 2.3, 4.4, 1.3], [5.6, 3.0, 4.1, 1.3], [5.5, 2.5, 4.0, 1.3], [5.5, 2.6, 4.4, 1.2], [6.1, 3.0, 4.6, 1.4], [5.8, 2.6, 4.0, 1.2], [5.0, 2.3, 3.3, 1.0], [5.6, 2.7, 4.2, 1.3], [5.7, 3.0, 4.2, 1.2], [5.7, 2.9, 4.2, 1.3], [6.2, 2.9, 4.3, 1.3], [5.1, 2.5, 3.0, 1.1], [5.7, 2.8, 4.1, 1.3], [6.3, 3.3, 6.0, 2.5], [5.8, 2.7, 5.1, 1.9], [7.1, 3.0, 5.9, 2.1], [6.3, 2.9, 5.6, 1.8], [6.5, 3.0, 5.8, 2.2], [7.6, 3.0, 6.6, 2.1], [4.9, 2.5, 4.5, 1.7], [7.3, 2.9, 6.3, 1.8], [6.7, 2.5, 5.8, 1.8], [7.2, 3.6, 6.1, 2.5], [6.5, 3.2, 5.1, 2.0], [6.4, 2.7, 5.3, 1.9], [6.8, 3.0, 5.5, 2.1], [5.7, 2.5, 5.0, 2.0], [5.8, 2.8, 5.1, 2.4], [6.4, 3.2, 5.3, 2.3], [6.5, 3.0, 5.5, 1.8], [7.7, 3.8, 6.7, 2.2], [7.7, 2.6, 6.9, 2.3], [6.0, 2.2, 5.0, 1.5], [6.9, 3.2, 5.7, 2.3], [5.6, 2.8, 4.9, 2.0], [7.7, 2.8, 6.7, 2.0], [6.3, 2.7, 4.9, 1.8], [6.7, 3.3, 5.7, 2.1], [7.2, 3.2, 6.0, 1.8], [6.2, 2.8, 4.8, 1.8], [6.1, 3.0, 4.9, 1.8], [6.4, 2.8, 5.6, 2.1], [7.2, 3.0, 5.8, 1.6], [7.4, 2.8, 6.1, 1.9], [7.9, 3.8, 6.4, 2.0], [6.4, 2.8, 5.6, 2.2], [6.3, 2.8, 5.1, 1.5], [6.1, 2.6, 5.6, 1.4], [7.7, 3.0, 6.1, 2.3], [6.3, 3.4, 5.6, 2.4], [6.4, 3.1, 5.5, 1.8], [6.0, 3.0, 4.8, 1.8], [6.9, 3.1, 5.4, 2.1], [6.7, 3.1, 5.6, 2.4], [6.9, 3.1, 5.1, 2.3], [5.8, 2.7, 5.1, 1.9], [6.8, 3.2, 5.9, 2.3], [6.7, 3.3, 5.7, 2.5], [6.7, 3.0, 5.2, 2.3], [6.3, 2.5, 5.0, 1.9], [6.5, 3.0, 5.2, 2.0], [6.2, 3.4, 5.4, 2.3], [5.9, 3.0, 5.1, 1.8]], "target": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]};

const classNames = ["Setosa", "Versicolor", "Virginica"];
const featureNames = ["Sepal Length (cm)", "Sepal Width (cm)", "Petal Length (cm)", "Petal Width (cm)"];

// Scaling parameters computed from training standardizer
const mean = [5.84333333, 3.05733333, 3.758, 1.19933333];
const std = [0.82530129, 0.43441097, 1.75852918, 0.75969263];

// Scale a single data point
function scaleFeatures(rawFeatures) {
    return rawFeatures.map((x, i) => (x - mean[i]) / std[i]);
}

// Calculate Euclidean distance between two scaled arrays
function euclideanDistance(arrA, arrB) {
    let sum = 0;
    for (let i = 0; i < arrA.length; i++) {
        sum += Math.pow(arrA[i] - arrB[i], 2);
    }
    return Math.sqrt(sum);
}

// Run KNN Classifier
function predictKNN(queryPoint, kVal) {
    const scaledQuery = scaleFeatures(queryPoint);
    const distances = [];

    // Calculate distance to all training samples
    for (let i = 0; i < dataset.data.length; i++) {
        const scaledSample = scaleFeatures(dataset.data[i]);
        const dist = euclideanDistance(scaledQuery, scaledSample);
        distances.push({
            index: i,
            distance: dist,
            label: dataset.target[i],
            rawData: dataset.data[i]
        });
    }

    // Sort by distance ascending
    distances.sort((a, b) => a.distance - b.distance);

    // Get top K
    const nearestNeighbors = distances.slice(0, kVal);

    // Vote count
    const votes = {};
    classNames.forEach(name => votes[name] = 0);
    
    nearestNeighbors.forEach(neighbor => {
        const name = classNames[neighbor.label];
        votes[name]++;
    });

    // Find the class with the maximum votes
    let maxVotes = -1;
    let predictedClass = "";
    classNames.forEach(name => {
        if (votes[name] > maxVotes) {
            maxVotes = votes[name];
            predictedClass = name;
        }
    });

    const confidence = (maxVotes / kVal) * 100;

    return {
        prediction: predictedClass,
        votes: votes,
        confidence: confidence,
        neighbors: nearestNeighbors
    };
}

// Canvas Visualizer
const canvas = document.getElementById("scatterPlot");
const ctx = canvas.getContext("2d");

let xAxisIndex = 2; // Default Petal Length
let yAxisIndex = 3; // Default Petal Width

// Colors matching UI theme
const colors = {
    "Setosa": "rgba(168, 85, 247, 0.8)", // Purple
    "Versicolor": "rgba(6, 182, 212, 0.8)", // Cyan
    "Virginica": "rgba(244, 63, 94, 0.8)", // Rose
    background: "#1e1e24",
    grid: "#2a2a35",
    text: "#9ca3af",
    query: "#eab308", // Golden Yellow
    line: "rgba(234, 179, 8, 0.4)" // Golden connector line
};

// Auto resize canvas dynamically
function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = Math.max(350, rect.height);
}

// Map dataset range to Canvas view coordinates
function mapToCanvas(x, y, xMin, xMax, yMin, yMax) {
    const padding = 50;
    const plotWidth = canvas.width - padding * 2;
    const plotHeight = canvas.height - padding * 2;

    const canvasX = padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
    // Invert Y axis for canvas screen space coordinates
    const canvasY = canvas.height - padding - ((y - yMin) / (yMax - yMin)) * plotHeight;

    return { x: canvasX, y: canvasY };
}

// Render Scatter Plot
function drawScatterPlot(queryPoint, neighbors) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 50;
    
    // Extract min/max from dataset for selected axes
    const xValues = dataset.data.map(d => d[xAxisIndex]);
    const yValues = dataset.data.map(d => d[yAxisIndex]);

    const xMin = Math.min(...xValues) - 0.2;
    const xMax = Math.max(...xValues) + 0.2;
    const yMin = Math.min(...yValues) - 0.2;
    const yMax = Math.max(...yValues) + 0.2;

    // Draw Grid Lines & Labels
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    ctx.fillStyle = colors.text;
    ctx.font = "12px sans-serif";

    const xGridCount = 5;
    for (let i = 0; i <= xGridCount; i++) {
        const val = xMin + (i / xGridCount) * (xMax - xMin);
        const pt = mapToCanvas(val, yMin, xMin, xMax, yMin, yMax);
        ctx.beginPath();
        ctx.moveTo(pt.x, padding);
        ctx.lineTo(pt.x, canvas.height - padding);
        ctx.stroke();
        ctx.fillText(val.toFixed(1), pt.x - 10, canvas.height - padding + 20);
    }

    const yGridCount = 5;
    for (let i = 0; i <= yGridCount; i++) {
        const val = yMin + (i / yGridCount) * (yMax - yMin);
        const pt = mapToCanvas(xMin, val, xMin, xMax, yMin, yMax);
        ctx.beginPath();
        ctx.moveTo(padding, pt.y);
        ctx.lineTo(canvas.width - padding, pt.y);
        ctx.stroke();
        ctx.fillText(val.toFixed(1), padding - 35, pt.y + 4);
    }

    // Axes titles
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(featureNames[xAxisIndex], canvas.width / 2, canvas.height - 10);
    
    ctx.save();
    ctx.translate(15, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(featureNames[yAxisIndex], 0, 0);
    ctx.restore();

    // Map Query point to canvas coordinates
    const queryCanvas = mapToCanvas(queryPoint[xAxisIndex], queryPoint[yAxisIndex], xMin, xMax, yMin, yMax);

    // Draw Nearest Neighbors connector lines
    ctx.strokeStyle = colors.line;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    neighbors.forEach(neighbor => {
        const neighborPt = mapToCanvas(neighbor.rawData[xAxisIndex], neighbor.rawData[yAxisIndex], xMin, xMax, yMin, yMax);
        ctx.beginPath();
        ctx.moveTo(queryCanvas.x, queryCanvas.y);
        ctx.lineTo(neighborPt.x, neighborPt.y);
        ctx.stroke();
    });
    ctx.setLineDash([]); // Reset dashed

    // Draw Dataset Points
    for (let i = 0; i < dataset.data.length; i++) {
        const pt = mapToCanvas(dataset.data[i][xAxisIndex], dataset.data[i][yAxisIndex], xMin, xMax, yMin, yMax);
        const cls = classNames[dataset.target[i]];
        
        ctx.fillStyle = colors[cls];
        ctx.beginPath();
        // Check if this point is one of the K-nearest neighbors
        const isNeighbor = neighbors.some(n => n.index === i);
        if (isNeighbor) {
            ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1.5;
            ctx.stroke();
        } else {
            ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
        }
        ctx.fill();
    }

    // Draw query point
    ctx.fillStyle = colors.query;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(queryCanvas.x, queryCanvas.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

// Live update function
function updatePrediction() {
    const sl = parseFloat(document.getElementById("sepalLength").value);
    const sw = parseFloat(document.getElementById("sepalWidth").value);
    const pl = parseFloat(document.getElementById("petalLength").value);
    const pw = parseFloat(document.getElementById("petalWidth").value);
    const kVal = parseInt(document.getElementById("kSelect").value);

    // Update value displays
    document.getElementById("sepalLengthVal").textContent = sl.toFixed(1) + " cm";
    document.getElementById("sepalWidthVal").textContent = sw.toFixed(1) + " cm";
    document.getElementById("petalLengthVal").textContent = pl.toFixed(1) + " cm";
    document.getElementById("petalWidthVal").textContent = pw.toFixed(1) + " cm";

    const queryPoint = [sl, sw, pl, pw];
    const result = predictKNN(queryPoint, kVal);

    // Update Predict UI
    const predResultCard = document.getElementById("predictionResult");
    predResultCard.textContent = result.prediction;
    
    // Change prediction color class
    predResultCard.className = "prediction-text text-" + result.prediction.toLowerCase();
    
    document.getElementById("confidenceVal").textContent = result.confidence.toFixed(0) + "%";

    // Update vote breakdown
    let voteHTML = "";
    classNames.forEach(name => {
        const clsLower = name.toLowerCase();
        const voteCount = result.votes[name];
        const pct = (voteCount / kVal) * 100;
        voteHTML += `
            <div class="vote-bar-container">
                <div class="vote-bar-header">
                    <span>${name}</span>
                    <span>${voteCount} votes (${pct.toFixed(0)}%)</span>
                </div>
                <div class="vote-bar-track">
                    <div class="vote-bar-fill fill-${clsLower}" style="width: ${pct}%"></div>
                </div>
            </div>
        `;
    });
    document.getElementById("voteBreakdown").innerHTML = voteHTML;

    // Draw Scatter
    drawScatterPlot(queryPoint, result.neighbors);
}

// Attach Event Listeners
document.getElementById("sepalLength").addEventListener("input", updatePrediction);
document.getElementById("sepalWidth").addEventListener("input", updatePrediction);
document.getElementById("petalLength").addEventListener("input", updatePrediction);
document.getElementById("petalWidth").addEventListener("input", updatePrediction);
document.getElementById("kSelect").addEventListener("change", updatePrediction);

document.getElementById("xAxisSelect").addEventListener("change", (e) => {
    xAxisIndex = parseInt(e.target.value);
    updatePrediction();
});

document.getElementById("yAxisSelect").addEventListener("change", (e) => {
    yAxisIndex = parseInt(e.target.value);
    updatePrediction();
});

window.addEventListener("resize", () => {
    resizeCanvas();
    updatePrediction();
});

// Setup tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        const tabId = btn.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");

        if (tabId === "visualizerTab") {
            resizeCanvas();
            updatePrediction();
        }
    });
});

// Initialize
resizeCanvas();
updatePrediction();
