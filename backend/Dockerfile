# Use Python base image
FROM python:3.9

# Inside container set work directory
WORKDIR /code

# Copy Requirements file and install it
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy full code
COPY . .

# Hugging Face Spaces uses port 7860
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]