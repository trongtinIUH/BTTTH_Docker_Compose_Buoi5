from flask import Flask, request, jsonify
import redis

app = Flask(__name__)
r = redis.Redis(host='redis', port=6379, decode_responses=True)

@app.route('/vote', methods=['POST'])
def vote():
    data = request.json
    candidate = data.get('candidate')
    if candidate:
        r.incr(candidate)
        return jsonify({"message": "Vote recorded", "candidate": candidate}), 200
    return jsonify({"message": "Candidate not specified"}), 400

@app.route('/results', methods=['GET'])
def results():
    candidates = r.keys()
    results = {candidate: r.get(candidate) for candidate in candidates}
    return jsonify(results), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)