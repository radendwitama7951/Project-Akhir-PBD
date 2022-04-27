from django.http.response import Http404
from django.db import connection
from simps_backend.api_v2.models.user_model import User
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @all()
def getAllUser():
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/getAllUser.sql')
    return User.objects.raw(sql.read())


# @get(id)
def getUserById(user_id):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/getUserById.sql')
    return User.objects.raw(sql.read(), [user_id])

# @post(data)
def createUser(data):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/createUser.sql')
    data = list(data.values())

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()


# @delete(id)
def deleteUserById(user_id):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/deleteUserById.sql')
    with connection.cursor() as cursor:
        cursor.execute(sql.read(), [user_id])
        cursor.fetchone()

# update(id, data)
def updateUserById(user_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/updateUserById.sql')
    data = list(data.values())
    data.append(user_id)

    with connection.cursor() as cursor:
        cursor.execute(sql.read(), data)
        cursor.fetchone()

