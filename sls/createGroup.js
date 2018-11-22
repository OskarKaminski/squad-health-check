const AWS = require('aws-sdk')
const uuid = require('uuid/v4')
var dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'})

module.exports.main = async (event) => {
    const groupId = uuid()
    const userId = event.input.identity.sub
    const updateUserParams = {
        TableName: 'User-xv76fxqx4vanda4j3ceyxfwlxy',
        Key: {id: userId},
        UpdateExpression: 'SET groups = list_append(groups, :g)',
        ExpressionAttributeValues: {
            ':g' : [groupId]
        },
        ReturnValues: 'ALL_OLD'
    };
    const userData = await dynamodb.update(updateUserParams).promise()

    const createGroupsParams = {
        TableName: 'SQUAD-Group',
        Item: {
            id: groupId,
            description : event.input.description,
            createdAt : event.input.createdAt,
            updatedAt : event.input.updatedAt,
            users : {
                items: [userData.Attributes]
            }
        },
        ReturnValues: 'ALL_OLD'
    };
    const groupData = await dynamodb.put(createGroupsParams).promise()
    return {
        id: groupId,
        description: event.input.description,
        users: groupData.users
    }
};
