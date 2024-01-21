# app.py

from flask import Flask, render_template, request, jsonify, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__, template_folder='templates', static_url_path='/static')

# Connect to MongoDB (modify the connection string as needed)
client = MongoClient('mongodb://localhost:27017/')
db = client['studentnum']
student_numbers_collection = db['student_numbers']

messages=[]

@app.route('/')
def home():
    return render_template('index.html')

# @app.route('/submit_student_number', methods=['POST'])
# def submit_student_number():
#     student_number = request.form.get('student_number')

#     exist_num = student_numbers_collection.find_one({'student_number': student_number}) 
#     if exist_num:
#         return redirect(url_for(submit_student_number)),"This Student Number already exists"
    
#     student_numbers_collection.insert_one({'student_number': student_number})
#     print('Received Student Number:', student_number)

#     return 'Student number submitted successfully'

# @app.route('/sign_up', methods=['GET'])
# def sign_up():
#     return render_template('sign_up.html')

@app.route('/submit_sign_up', methods=['POST'])
def submit_sign_up():
    student_number = request.form.get('student_number')
    # exist_num = student_numbers_collection.find_one({'student_number': student_number})
    # if exist_num:
    #     return render_template('index.html', status='This student number already exists')
    
    # # If student number is not repeated, redirect to success.html
    # student_numbers_collection.insert_one({'student_number': student_number})
    return redirect(url_for('success'))
    

@app.route('/success')
def success():
    return render_template('success.html', status="Going to the next page...")


@app.route('/chat',methods=['POST'])

def chat():
    message=request.form.get("usermsg")
    messages.append(message)
  
    print(messages)
    return render_template('chat.html',messages=messages)

# @app.route('/chat/messages',methods=['POST'])
# def chat():
#     message=request.form.get("usermsg")
#     messages.append(message)
#     return render_template(messages=messages)

if __name__ == '__main__':
    app.run(debug=True)
