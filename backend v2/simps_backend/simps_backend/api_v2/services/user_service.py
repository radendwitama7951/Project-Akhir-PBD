from simps_backend.api_v2.models.user_model import User
from simps_backend.settings import SQLSCRIPTS_FOLDER

# @all()
def getAllUser():
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/getAllUser.sql')
    return User.objects.raw(sql.read())


# @get(id)
def getUserById(user_id):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/getUserById.sql')
    return User.objects.raw(sql.read(), [user_id])[0]

# @post(data)
def createUser(data):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/createUser.sql')
    return User.objects.raw( sql.read(), data )

# @delete(id)
def deleteUserById(user_id):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/deleteUserById.sql')
    return User.objects.raw(sql.read(), user_id)

# update(id, data)
def updateUserById(user_id, data):
    sql = open(SQLSCRIPTS_FOLDER+'/user_scripts/updateUserById.sql')
    return User.objects.raw(sql.read(), data, user_id)
