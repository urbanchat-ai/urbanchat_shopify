const script1 = document.createElement('script');
script1.innerHTML = `const urbanChatbotId = "dffb124f-3d75-4e33-a682-205137863f5d";`;


const script2 = document.createElement('script');
script2.src = 'https://urbanchat.ai/integration/chatbot-integration.js';

// Append the script elements to the document's head
document.head.appendChild(script1);
document.head.appendChild(script2);
