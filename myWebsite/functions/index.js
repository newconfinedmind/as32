const functions = require('firebase-functions');
const axios = require('axios');
const openAIKey = functions.config().openai.key;  // You need to set this in Firebase settings

exports.callOpenAI = functions.https.onCall(async (data, context) => {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: data.prompt,
        max_tokens: data.max_tokens,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAIKey}`
        }
    });

    return response.data;
});
