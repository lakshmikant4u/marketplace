# housing_price_model.py

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import joblib

# Load dataset
df = pd.read_csv('data/HousePriceDataset.csv')

# Prepare the features (X) and target (y)
X = df.drop(['id', 'price'], axis=1)
y = df['price']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions and evaluate the model
y_pred = model.predict(X_test)

# Calculate performance metrics
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Save the model for later use
joblib.dump(model, 'model/housing_price_model.pkl')

# Save model performance
model_info = {
    'coefficients': model.coef_.tolist(),
    'intercept': model.intercept_,
    'mse': mse,
    'r2': r2
}

# Print model information
print(model_info)
