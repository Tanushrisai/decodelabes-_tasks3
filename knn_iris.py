import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

def main():
    print("=" * 60)
    print("         KNN Classifier on Iris Dataset")
    print("=" * 60)
    
    # 1. Data Preparation: Load the Iris Benchmark dataset (150 samples, 3 classes)
    print("\n[1] Loading Iris Dataset...")
    iris = load_iris()
    X = iris.data
    y = iris.target
    feature_names = iris.feature_names
    target_names = iris.target_names
    
    print(f"    - Total samples: {X.shape[0]}")
    # Show class distribution
    unique, counts = np.unique(y, return_counts=True)
    for name, count in zip(target_names, counts):
        print(f"      * Class '{name}': {count} samples")
    
    # Normalize features using StandardScaler (Mean=0, Variance=1)
    print("\n[2] Normalizing features with StandardScaler...")
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    print("    - Standardization Complete (Mean ~ 0, Std ~ 1)")
    for i, col in enumerate(feature_names):
        print(f"      * {col:20} -> Mean: {X_scaled[:, i].mean():.4f}, Std: {X_scaled[:, i].std():.4f}")
        
    # 2. Data Split: Shuffle and split into training (80%) and testing (20%)
    print("\n[3] Splitting data into Train (80%) and Test (20%) sets...")
    X_train, X_test, y_train, y_test = train_test_split(
        X_scaled, y, test_size=0.20, random_state=42, stratify=y, shuffle=True
    )
    print(f"    - Training set size: {X_train.shape[0]} samples")
    print(f"    - Testing set size: {X_test.shape[0]} samples")
    
    # 3. Model Implementation (K=5)
    print("\n[4] Training KNN Model (K=5)...")
    knn_5 = KNeighborsClassifier(n_neighbors=5)
    knn_5.fit(X_train, y_train)
    y_pred_5 = knn_5.predict(X_test)
    
    # 4. Evaluation of K=5 Model
    acc_5 = accuracy_score(y_test, y_pred_5)
    print(f"    - Model Accuracy (K=5): {acc_5 * 100:.2f}%")
    
    print("\n    - Confusion Matrix (K=5):")
    cm_5 = confusion_matrix(y_test, y_pred_5)
    print(cm_5)
    
    print("\n    - Classification Report (K=5):")
    print(classification_report(y_test, y_pred_5, target_names=target_names))
    
    # 5. Optimal K (Elbow Method)
    print("\n[5] Finding Optimal K using the Elbow Method...")
    error_rates = []
    k_range = range(1, 21)
    
    for k in k_range:
        knn = KNeighborsClassifier(n_neighbors=k)
        knn.fit(X_train, y_train)
        pred_i = knn.predict(X_test)
        # Using classification error rate (fraction of incorrect predictions)
        error_rates.append(np.mean(pred_i != y_test))
        
    # Find K with minimal error rate
    optimal_k = k_range[np.argmin(error_rates)]
    print(f"    - Optimal K identified by minimum error rate: K = {optimal_k}")
    
    # Save the Elbow Method plot
    plot_filename = "knn_elbow_plot.png"
    plt.figure(figsize=(10, 6))
    plt.plot(k_range, error_rates, color='blue', linestyle='dashed', marker='o',
             markerfacecolor='red', markersize=8)
    plt.title('Error Rate vs. K Value (Elbow Method)')
    plt.xlabel('K Value')
    plt.ylabel('Error Rate (1 - Accuracy)')
    plt.xticks(k_range)
    plt.grid(True, linestyle='--', alpha=0.6)
    plt.savefig(plot_filename, dpi=300)
    plt.close()
    print(f"    - Saved Elbow Method plot to: {plot_filename}")

if __name__ == "__main__":
    main()
