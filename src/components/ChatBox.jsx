import React, { useState } from 'react';

const predefinedQuestions = [
  "How do I sell my license?",
  "Is the platform secure?",
  "How fast will I get paid?"
];

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const callAPI = async (message) => {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_KEY`, //I'm Not integrating any API key here because it may lead to expose API key in frontend so better to call in Backend 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }]
        })
      });

      const data = await response.json();
      return data?.choices?.[0]?.message?.content?.trim() || "Yes sure Here is the information";
    } catch {
      return "Sorry, I'm having trouble answering that right now.";
    }
  };

  const handleSend = async (msg) => {
    if (!msg) return;

    const newMessages = [...messages, { role: "user", content: msg }];
    setMessages(newMessages);
    setInput('');

    const reply = await callAPI(msg);
    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white/10 backdrop-blur-lg text-white rounded-xl p-4 shadow-xl z-50">
      <div className="text-white text-sm font-bold mb-2">SoftSell Assistant 🤖</div>

      <div className="h-40 overflow-y-auto text-sm space-y-2 mb-3">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? "text-right" : "text-left"}>
            <p className={m.role === 'user' ? "bg-purple-500/40 p-2 rounded-lg inline-block" : "bg-white/20 p-2 rounded-lg inline-block"}>
              {m.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-2 space-y-1">
        {predefinedQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(q)}
            className="text-xs bg-purple-600/30 hover:bg-purple-600/50 px-2 py-1 rounded-md mr-1"
          >
            {q}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          className="flex-1 px-2 py-1 bg-white/20 rounded-md text-white text-sm outline-none placeholder-white/50"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
        />
        <button
          className="text-xs bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
          onClick={() => handleSend(input)}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
