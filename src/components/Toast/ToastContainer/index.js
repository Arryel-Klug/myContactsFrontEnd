import { useState } from 'react';
import { Container } from './styles';

import ToastMessage from '../ToastMessage';

export default function ToastContainer() {
  const [messages] = useState([
    { id: Math.random(), type: 'default', text: 'Default Text' },
    { id: Math.random(), type: 'danger', text: 'Danger Text' },
    { id: Math.random(), type: 'success', text: 'Success Text' },
  ]);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}
    </Container>
  );
}
