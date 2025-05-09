import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatIcon = ({ onClick }) => (
  <div
    className="fixed bottom-6 right-6 bg-[#A78BFA] p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform z-50"
    onClick={onClick}
  >
    <MessageCircle size={24} color="white" />
  </div>
);

export default ChatIcon;
