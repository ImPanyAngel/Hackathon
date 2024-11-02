import sqlite3
import faker
import random
file = "Sqlite3.db"

fake =  faker.Faker()
#database creation
try:
    conn = sqlite3.connect(file)
    print("Database sqlite3 created")
except:
    print("Database sqlite3 cannot be created")



#database connection
try :
    sqliteConnection = sqlite3.connect("Sqlite3.db")
    print("Database connection established")
    with sqliteConnection:
        try:
            cursor  = sqliteConnection.cursor()
            createStudentsDb = '''
    CREATE TABLE IF NOT EXISTS students (
      student_ID INTEGER PRIMARY KEY,
      email TEXT NOT NULL,
      phone_number INTEGER,
      student_course TEXT NOT NULL
      );
'''
            createPostsDb = '''
    CREATE TABLE IF NOT EXISTS posts (
      post_ID INTEGER PRIMARY KEY AUTOINCREMENT,
      student INTEGER,
      post_description TEXT,
      date_uploaded TIMESTAMP,
      course TEXT,
      skills TEXT,
      FOREIGN KEY(student) REFERENCES students(student_ID) 
      );'''

            cursor.execute(createPostsDb)
            cursor.execute(createStudentsDb)

            sqliteConnection.commit()


        except sqlite3.Error as error:
            print("False",error)
        
except sqlite3.Error as error:
    print("Database connection could not be errror",error)



try:
    conn = sqlite3.connect(file)
    cursor = conn.cursor()
    print("Database connection established")

    stem_courses = ["Computer Science", "Mathematics", "Physics", "Engineering", "Biology", "Chemistry", "Data Science", "Astronomy"]
    stem_skills = ["Python", "Data Analysis", "Machine Learning", "Calculus", "Physics Simulations", "Circuit Design", "Genetics", "Chemistry Lab", "Statistics"]

    # Insert dummy data into the students table
    students_data = []
    for i in range(1, 101):
        student_id = i
        email = f"{fake.user_name()}@student.le.ac.uk"
        phone_number = random.randint(1000000000, 9999999999)
        student_course = random.choice(stem_courses)
        students_data.append((student_id, email, phone_number, student_course))

    cursor.executemany("INSERT INTO students (student_ID, email, phone_number, student_course) VALUES (?, ?, ?, ?);", students_data)
    
    # Insert dummy data into the posts table
    posts_data = []
    for i in range(1, 101):
        student = random.randint(1, 100)
        post_description = fake.text(max_nb_chars=200)
        date_uploaded = fake.date_between(start_date="-2y", end_date="today")
        course = random.choice(stem_courses)
        skills = ', '.join(random.sample(stem_skills, 3))  # Choose 3 random STEM skills
        posts_data.append((student, post_description, date_uploaded, course, skills))

    cursor.executemany("INSERT INTO posts (student, post_description, date_uploaded, course, skills) VALUES (?, ?, ?, ?, ?);", posts_data)
    
    # Commit the transaction
    conn.commit()
    conn.close()
    print("Dummy STEM data inserted successfully")

except sqlite3.Error as error:
    print("Error while inserting data", error)
