import React, { useEffect, useRef, useState } from 'react';
import { Bot, Send, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ChatMessage = {
  id: string;
  role: 'user' | 'bot';
  text: string;
};

const ChatbotWidget = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: `bot-${Date.now()}`,
      role: 'bot',
      text: t('chatbot.welcome'),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages((prev) => {
      if (
        prev.length === 1 &&
        prev[0].role === 'bot' &&
        prev[0].text !== t('chatbot.welcome')
      ) {
        return [{ ...prev[0], text: t('chatbot.welcome') }];
      }

      return prev;
    });
  }, [i18n.language, t]);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const getBotReply = (message: string) => {
    const normalized = message.toLowerCase();
    const keywordReplies = [
      {
        keywords: ['book', 'booking', 'consultation', 'appointment', 'fitting'],
        key: 'chatbot.responses.booking',
      },
      {
        keywords: ['price', 'cost', 'budget', 'rates', 'charges'],
        key: 'chatbot.responses.pricing',
      },
      {
        keywords: ['hours', 'timing', 'open', 'close', 'time'],
        key: 'chatbot.responses.hours',
      },
      {
        keywords: ['address', 'location', 'where', 'map', 'store'],
        key: 'chatbot.responses.location',
      },
      {
        keywords: ['whatsapp', 'phone', 'call', 'contact'],
        key: 'chatbot.responses.whatsapp',
      },
      {
        keywords: ['navratri', 'wedding', 'casual', 'blouse', 'lehenga', 'saree'],
        key: 'chatbot.responses.services',
      },
    ];

    const match = keywordReplies.find((reply) =>
      reply.keywords.some((keyword) => normalized.includes(keyword))
    );

    return t(match?.key ?? 'chatbot.responses.default');
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    const botMessage: ChatMessage = {
      id: `bot-${Date.now()}-reply`,
      role: 'bot',
      text: getBotReply(trimmed),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-28 right-4 z-50 w-80 max-w-[90vw] overflow-hidden rounded-xl border border-secondary/30 bg-white shadow-xl">
          <div className="flex items-start justify-between gap-3 bg-primary px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">{t('chatbot.title')}</p>
              <p className="text-xs text-white/80">{t('chatbot.subtitle')}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={t('chatbot.close')}
              className="rounded-full p-1 transition hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex h-64 flex-col gap-3 overflow-y-auto bg-white px-4 py-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-secondary/15 text-primary'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="border-t border-secondary/20 bg-white px-3 py-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={t('chatbot.placeholder')}
                aria-label={t('chatbot.placeholder')}
                className="h-10 flex-1 rounded-lg border border-secondary/30 px-3 text-sm text-primary outline-none transition focus:border-secondary"
              />
              <button
                type="button"
                onClick={handleSend}
                aria-label={t('chatbot.send')}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition hover:bg-secondary/90"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t('chatbot.open')}
        className="fixed bottom-20 right-4 z-50 group"
      >
        <div className="relative flex items-center">
          <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-secondary px-3 py-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100 md:block">
            {t('chatbot.cta')}
          </span>
          <div className="rounded-full bg-primary p-3 text-white shadow-lg transition-colors hover:bg-primary/90 md:p-4">
            <Bot className="h-5 w-5 md:h-6 md:w-6" />
          </div>
        </div>
      </button>
    </>
  );
};

export default ChatbotWidget;
