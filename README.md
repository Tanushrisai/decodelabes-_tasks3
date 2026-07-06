# KNN Iris Classification Playground

An interactive machine learning dashboard demonstrating KNN (K-Nearest Neighbors) classification on the famous Iris Dataset. The project includes a client-side visualization application and a Python script for dataset training, validation, and optimal K estimation (Elbow Method).

## 🚀 Features

- **Interactive 2D Scatter Plot**: Visualize the Iris dataset using custom-selected dimensions (Sepal Length, Sepal Width, Petal Length, Petal Width).
- **Interactive Predictor**: Adjust Sepal & Petal parameters in real-time to watch the model predict the Iris class (Setosa, Versicolor, Virginica) and highlight nearby neighbor connections.
- **Vote Breakdown**: View the vote confidence and nearest neighbors contribution dynamically.
- **Model Performance Metrics**: Examine the model's performance using confusion matrices, classification reports, and accuracy diagnostics.
- **Elbow Method Curve**: Analyze the error rate across different K values to identify the optimal K parameter.

---

## 📂 Project Structure

- `index.html` - The frontend application dashboard layout.
- `style.css` - Custom modern glassmorphism/neon styling for the dashboard.
- `app.js` - Client-side interactive visualizer and KNN classifier logic.
- `knn_iris.py` - Python script for model evaluation, training, and Elbow Method plot generation.
- `knn_elbow_plot.png` - Generated Elbow Curve visualization output.

---

## 🛠️ Getting Started

### 1. Web Visualizer Dashboard
Simply open the `index.html` file in any modern web browser to interact with the KNN classification playground.

### 2. Running the Python Backend Script
Ensure you have the required Python libraries installed:
```bash
pip install numpy pandas scikit-learn matplotlib
```

Then, run the script:
```bash
python knn_iris.py
```
This will output the classification report, confusion matrix, and generate an updated `knn_elbow_plot.png` file.
