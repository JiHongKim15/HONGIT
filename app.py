import boto3
from flask import Flask

dynamodb = boto3.resource('dynamodb', region_name='ap-northeast-2')

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Hongit-DB')
