import boto3
import sys
from flask import Flask, redirect, request, jsonify, url_for, render_template

app = Flask(__name__, static_url_path='')
dynamodb = boto3.resource('dynamodb', region_name='ap-northeast-2')
table = dynamodb.Table('Hongit-DB')

@app.route('/', methods=['GET', 'POST'])
def test():
    # 예약 보기
    if request.method == 'GET':
        # response = table.query (KeyConditionExpression=Key('key').eq(key))
        return 'get'
    # 예약 하기
    elif request.method == 'POST':
        table.put_item(
            Item={
                'No': '100'
            }
        )
        return 'post'
    # 예약 취소
    elif request.method == 'DELETE':
        return 'delete'



if __name__ == '__main__':
    if len(sys.argv) > 1:
        app.debug = True
        app.jinja_env.auto_reload = True
        app.config['TEMPLATES_AUTO_RELOAD'] = True
        app.run(host='0.0.0.0', port=4000)
    else:
        app.run(host='0.0.0.0')