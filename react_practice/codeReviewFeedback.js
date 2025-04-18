import React, { useState } from "react";

const FeedbackSystem = () => {
  const [cards, setCards] = useState([
    { id: 0, name: "Readability", upvotes: 0, downvotes: 0 },
    { id: 1, name: "Performance", upvotes: 0, downvotes: 0 },
    { id: 2, name: "Security", upvotes: 0, downvotes: 0 },
    { id: 3, name: "Documentation", upvotes: 0, downvotes: 0 },
    { id: 4, name: "Testing", upvotes: 0, downvotes: 0 },
  ]);

  // Arrow function accepts and ID
  const handleUpvote = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, upvotes: card.upvotes + 1 } : card
      )
    );
  };

  // Function to handle downvoting a specific card by id
  const handleDownvote = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, downvotes: card.downvotes + 1 } : card
      )
    );
  };

  // Render the card(s)
  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {cards.map((card) => (
          <div key={card.id} className="pa-10 w-300 card">
            <h2>{card.name}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${card.id}`}
                onClick={() => handleUpvote(card.id)}
              >
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${card.id}`}
                onClick={() => handleDownvote(card.id)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${card.id}`}>
              Upvotes: <strong>{card.upvotes}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${card.id}`}>
              Downvotes: <strong>{card.downvotes}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
