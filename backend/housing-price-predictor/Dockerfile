# Use official Python image as the base image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 80 for the FastAPI app
EXPOSE 80

# Command to run the app
CMD ["uvicorn", "app.app:app", "--host", "0.0.0.0", "--port", "80"]
