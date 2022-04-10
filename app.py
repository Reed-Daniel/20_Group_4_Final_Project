from flask import Flask, render_template, request, jsonify
from Test_ML_App import lambda_handler

app = Flask(__name__)

#@app.route('/api/stuff/<param1>', methods=['GET'])
def stuff(param1):
    # /api/stuff/50&200&200&100&100&5
    if request.method == "GET":
        inputs = param1.split('&')

        #return lambda_handler(inputs)
        return jsonify({str(i):i for i in inputs})


@app.route('/')
def home():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
