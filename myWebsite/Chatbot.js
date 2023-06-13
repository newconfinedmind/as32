import { useFirebaseApp } from 'reactfire';

function MyComponent() {
    const firebaseApp = useFirebaseApp();

    const callOpenAI = async () => {
        const callOpenAIFunction = firebaseApp.functions().httpsCallable('callOpenAI');
        const response = await callOpenAIFunction({
            prompt: 'Translate the following English text to French: "{text}"',
            max_tokens: 60,
        });

        console.log(response.data);
    };

    return <button onClick={callOpenAI}>Call OpenAI</button>;
}

export default MyComponent;
