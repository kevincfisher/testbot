import { parse } from 'querystring';

exports.handler = async (event, context) => {
   const params = parse(event.body);
   
    return {
        statusCode: 200,
        body: 'Hello, World'
    };
};