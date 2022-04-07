# import dependencies
import json
import sklearn
import boto3
import os
import pickle
from boto3 import resource
from json import dumps
from sklearn.linear_model import LogisticRegression
# Dependencies for SQLAlchemy
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import psycopg2
from psycopg2 import sql
import pandas as pd

# ML part global load
s3 = boto3.client('s3')
s3_bucket = os.environ['s3_bucket']
model_name = os.environ['model_name']
# temp_file_path = 'github link here???'
temp_file_path = 'https://github.com/krmcclelland/20_Group_4_Final_Project/blob/acbb68ea80d5cbfd0875fc8867c99e7c57832259/Logistical_Regression.ipynb'

# SQLAlchemy engine global load
    engine = create_engine('postgresql://postgres:Rice!Team04@nba-visualization-project.ctxd45yjwfgs.us-east-2.rds.amazonaws.com/nba-db')
    Base = automap_base()
    Base.prepare(engine, reflect=True) 


# lambda function parses incoming event to make sure GET request and pass it onto other events.
def lambda_handler(event, context)
    # run code here
    if event['EventType'] == 'lambdaML':
        lambdaML(event, context)
    elif event['EventType'] == 'lambda_sql':
        lambda_sql['event, context']


def runLambda(event, context):
    httpMethod = event['httpMethod']
    if httpMethod != 'Get':
        if httpMethod == 'OPTIONS':
            return builtResponse(300)
        else:
            return builtResponse(400, 'ERROR: route only accepts GET requests!')
    else:
        params = event['queryStringParameters']
        if not params:
            return builtResponse(500, 'ERROR: query parameter required!')
        else:
            results = {}
            # code that runs from params here 
    return {
        builtResponse(200, dumps(results))
    }

# lambda for ML model
def lambdaML(event, context):
    body = event['body']
    input = json.loads(body) ['data']
    input = float(input)
    # Download pickeled model from S3 and unpickle
    s3.download_file(s3_bucket, model_name, temp_file_path)
    with open(temp_file_path, 'rb') as f:
        model = pickle.load(f)
    # Predict class
    prediction = model.predict([[input]]) [0]
    return {
        "statusCode": 200,
        "body": json.dumps({
            "prediction": str(prediction),
        })
    }    

# response function to allow get request in browser
def builtResponse(statusCode, responseBody=None):
    response = {
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,GET'
        },
        'statusCode': statusCode
    }
    if responseBody:
        response['body'] = responseBody
    return response    