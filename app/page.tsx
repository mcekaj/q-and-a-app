'use client';
import axios from 'axios';
import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Form from './components/Form';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_ROUTER_DEEPSEEK_API_KEY}`,
  };

  const askAI = async () => {
    if (!question) return;
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_OPEN_ROUTER_API_URL}/chat/completions`,
        {
          model: 'deepseek/deepseek-r1:free',
          messages: [
            {
              role: 'user',
              content: question,
            },
          ],
        },
        {
          headers,
        },
      );
      setAnswer(data?.choices?.[0]?.message?.content);
    } catch (error) {
      setAnswer((error as Error)?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center px-5">
      <Form onSubmit={askAI}>
        <Input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={loading}
        />
        <Button title="Ask AI" disabled={loading} />
      </Form>
      {question && <p className="mt-2">You: {question}</p>}
      <p className="mt-2 max-w-5xl text-blue-700">
        {loading
          ? 'Waiting for an answer...'
          : answer && `AI: ${answer}`}
      </p>
    </div>
  );
}
