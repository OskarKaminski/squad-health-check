const AWS = require('aws-sdk')
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

module.exports.main = async (event) => {
    var params = {
        Item: {
            "id": {
                S: event.request.userAttributes.sub
            },
            "name": {
                S: event.userName
            },
            "email": {
                S: event.request.userAttributes.email
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "User-xv76fxqx4vanda4j3ceyxfwlxy"
    };
    const data = await dynamodb.putItem(params).promise()
    console.log({'data': data});
    return event
};
