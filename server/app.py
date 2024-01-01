from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello World'

# @app.route('/calculate_bhn', methods=['POST'])
# def calculate_bhn():
#     try:
#         data = request.get_json()
#         H2SO4 = float(data['field1'])
#         temperature = float(data['field2'])
#         humidity = float(data['field3'])
#         surfaceArea = float(data['field4'])

#         result = H2SO4 + temperature + humidity + surfaceArea

#         return jsonify({'result': result})
#     except Exception as e:
#         return jsonify({'error': str(e)}), 400
    

@app.route('/calculate_bhn', methods=['POST'])
def calculate_bhn():
    try:
        data = request.get_json()
        relevant_fields = {
            "h2so4": float(data.get('field1', 0.0)),
            "temp": float(data.get('field2', 0.0)),
            "rh": float(data.get('field3', 0.0)),
            "sfcArea": float(data.get('field4', 0.0)),
        }

        # Forward the relevant fields to another endpoint
        forward_url = 'http://apm.asrc.albany.edu:3000/nrcapi/bhn'
        response = requests.post(forward_url, json=relevant_fields)
        response_data = response.json()

        return jsonify(response_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

@app.route('/calculate_thn', methods=['POST'])
def calculate_thn():
    try:
        data = request.get_json()
        H2SO4 = float(data['field1'])
        temperature = float(data['field2'])
        humidity = float(data['field3'])
        surfaceArea = float(data['field4'])
        NH3 = float(data['field5'])

        result = H2SO4 + temperature + humidity * surfaceArea * NH3

        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

@app.route('/calculate_bimn', methods=['POST'])
def calculate_bimn():
    try:
        data = request.get_json()
        H2SO4 = float(data['field1'])
        temperature = float(data['field2'])
        humidity = float(data['field3'])
        ionizationRate = float(data['field4'])
        surfaceArea = float(data['field5'])

        result = H2SO4 * temperature * humidity * ionizationRate * surfaceArea

        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    

@app.route('/calculate_timn', methods=['POST'])
def calculate_timn():
    try:
        data = request.get_json()
        H2SO4 = float(data['field1'])
        temperature = float(data['field2'])
        humidity = float(data['field3'])
        ionizationRate = float(data['field4'])
        surfaceArea = float(data['field5'])
        NH3 = float(data['field6'])

        result = H2SO4 + temperature + humidity + ionizationRate + surfaceArea + NH3

        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5001)
