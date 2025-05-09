import React, { useState } from 'react';
import ChatIcon from './ChatIcon';
import ChatBox from './ChatBox';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatIcon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <ChatBox />}
    </>
  );
};

export default ChatWidget;
