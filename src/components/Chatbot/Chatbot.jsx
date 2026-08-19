import { useState } from "react";
import "./Chatbot.css";

function Chatbot({ role = "patient" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm HealthMonitor Assistant. How can I help you today?",
    },
  ]);

  const suggestions = {
    patient: [
      "Show my health summary",
      "What are my upcoming appointments?",
      "Help me with my medicines",
    ],

    doctor: [
      "Show today's appointments",
      "Show patient alerts",
      "Help me review my schedule",
    ],

    caregiver: [
      "Show today's care tasks",
      "Show medication reminders",
      "Show patient alerts",
    ],
  };

  const currentSuggestions =
    suggestions[role] || suggestions.patient;

  const handleSend = (text = message) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage) return;

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        sender: "user",
        text: trimmedMessage,
      },
      {
        sender: "bot",
        text: "I'm currently in preview mode. Once the AI backend is connected, I'll be able to provide more useful assistance.",
      },
    ]);

    setMessage("");
  };

  const handleSuggestion = (suggestion) => {
    handleSend(suggestion);
  };

  return (
    <>
      {/* Chatbot Button */}

      <button
        type="button"
        className={`chatbot-floating-button ${
          isOpen ? "open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open HealthMonitor Assistant"
      >
        <span className="chatbot-icon">
          ✦
        </span>
      </button>


      {/* Chatbot Window */}

      {isOpen && (
        <section className="chatbot-window">

          {/* Header */}

          <header className="chatbot-header">

            <div className="chatbot-header-info">

              <div className="chatbot-avatar">
                ✦
              </div>

              <div>
                <strong>
                  HealthMonitor Assistant
                </strong>

                <span>
                  Healthcare assistant
                </span>
              </div>

            </div>


            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>

          </header>


          {/* Messages */}

          <div className="chatbot-messages">

            {messages.map((chatMessage, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  chatMessage.sender
                }`}
              >
                {chatMessage.text}
              </div>
            ))}


            {/* Suggestions */}

            {messages.length === 1 && (
              <div className="chatbot-suggestions">

                <span>
                  Quick actions
                </span>

                {currentSuggestions.map(
                  (suggestion, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() =>
                        handleSuggestion(suggestion)
                      }
                    >
                      {suggestion}
                    </button>
                  )
                )}

              </div>
            )}

          </div>


          {/* Input */}

          <div className="chatbot-input-area">

            <input
              type="text"
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask something..."
              aria-label="Chat message"
            />

            <button
              type="button"
              onClick={() => handleSend()}
              aria-label="Send message"
            >
              ↑
            </button>

          </div>


          {/* Disclaimer */}

          <div className="chatbot-disclaimer">
            HealthMonitor Assistant is not a substitute for
            professional medical advice.
          </div>

        </section>
      )}
    </>
  );
}

export default Chatbot;