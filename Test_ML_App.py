# import dependencies
import json
import boto3
import sklearn
import os
import pickle
from json import dumps
from sklearn.linear_model import LogisticRegression
from sqlalchemy import create_engine

results = {}

# ML part global load
# s3 = boto3.client('s3')
# s3_bucket = os.environ['random-forest-model']
# model_name = os.environ['rf_model']
# # temp_file_path = 'github link here???'
# temp_file_path = 'https://github.com/krmcclelland/20_Group_4_Final_Project/blob/7c9c8bdca41b54b3ec5e1a4ed509919a493f1452/Random_Forrest_Complete.ipynb'

# SQLAlchemy engine global load
engine = create_engine('postgresql://postgres:Rice!Team04@nba-visualization-project.ctxd45yjwfgs.us-east-2.rds.amazonaws.com/nba-db')
#Base = automap_base()
#Base.prepare(engine, reflect=True) 


# lambda function parses incoming event to make sure GET request and pass it onto other events.
#def lambda_handler(event, context)
 #   # run code here
  #  if event['EventType'] == 'lambdaML':
   #     lambdaML(event, context)
    #elif event['EventType'] == 'lambda_sql':
     #   lambda_sql['event, context']


def lambda_handler(params=list):
    # httpMethod = event['httpMethod']
    # if httpMethod != 'Get':
    #     if httpMethod == 'OPTIONS':
    #         return builtResponse(300)
    #     else:
    #         return builtResponse(400, 'ERROR: route only accepts GET requests!')
    # else:
    #     params = event['queryStringParameters']
        # if not params:
        #     return builtResponse(500, 'ERROR: query parameter required!')
        # else:
    results = {}
    # code that runs from params here
    ## This is the lambda for the ML model 

    # Download pickeled model from S3 and unpickle
    #s3.download_file(s3_bucket, model_name, temp_file_path)
    #@TODO: make sure path to pickle is correct
    temp_file_path="path_to_pickle.p"
    with open(temp_file_path, 'rb') as f:
        model = pickle.load(f)
    # Predict class
    #@TODO:make sure params are correct format
    prediction = model.predict([params]) [0]
    results = str(prediction)
    return results

    # return {
    #     builtResponse(200, dumps(results)
    #     )
    # }

# lambda for ML model from towardsdatascience 
#def lambdaML(event, context):   

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
    return 