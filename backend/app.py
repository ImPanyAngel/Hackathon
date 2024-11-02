import sqlite3
from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(app)
def get_db_connection():
    try:
        conn = sqlite3.connect(r'Sqlite3.db')
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.Error as error:
        print("Database connection error:", error)
        return None

@app.route('/getPosts', methods=['GET'])
def getPosts():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor()
        posts = [dict(row) for row in cursor.execute("SELECT * FROM posts")]
        return jsonify(posts)

    except sqlite3.Error as error:
        print("Database error:", error)
        return jsonify({"error": "Database query failed"}), 500

    finally:
        conn.close()

@app.route('/getCourse', methods=['GET'])
def getCourse():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor()
        posts = [dict(row) for row in cursor.execute("SELECT DISTINCT course FROM posts")]
        return jsonify(posts)

    except sqlite3.Error as error:
        print("Database error:", error)
        return jsonify({"error": "Database query failed"}), 500

    finally:
        conn.close()


@app.route('/getSkills', methods=['GET'])
def getSkills():
    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor()
        posts = [dict(row) for row in cursor.execute("SELECT DISTINCT skills FROM posts")]
        return jsonify(posts)

    except sqlite3.Error as error:
        print("Database error:", error)
        return jsonify({"error": "Database query failed"}), 500

    finally:
        conn.close()
