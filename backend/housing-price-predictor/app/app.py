# app.py

from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd

# Load the pre-trained model
model = joblib.load('model/housing_price_model.pkl')

# Create the FastAPI app
app = FastAPI()

# Pydantic model for the request body
class HousingFeatures(BaseModel):
    square_footage: float
    bedrooms: int
    bathrooms: float
    year_built: int
    lot_size: float
    distance_to_city_center: float
    school_rating: float

# API endpoint for prediction
@app.post('/predict')
def predict(features: HousingFeatures):
    data = pd.DataFrame([features.dict()])
    price_prediction = model.predict(data)
    return {"predicted_price": price_prediction[0]}

# API endpoint for model information
@app.get('/model-info')
def model_info():
    model_info = {
        'coefficients': model.coef_.tolist(),
        'intercept': model.intercept_,
        'mse': 'Not calculated in real-time, precomputed',
        'r2': 'Not calculated in real-time, precomputed'
    }
    return model_info

# Health check endpoint
@app.get('/health')
def health_check():
    return {"status": "ok"}
