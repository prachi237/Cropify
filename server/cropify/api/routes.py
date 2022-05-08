from flask import Blueprint, request, jsonify
from cropify.model.predict import predict

api = Blueprint("api", __name__)

@api.route('/api/predict', methods=['POST'])
def api_predict():
	data = request.get_json()
	ans = predict(season=data['season'], crop=data['crop'], district=data['district'], area=data['area'])
	return jsonify({
		'yield': ans
	})