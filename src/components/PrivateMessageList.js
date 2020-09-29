import React from "react";
import { gql, useSubscription } from "@apollo/client";

const PUBLIC_MESSAGES_LIST = gql`
  subscription PrivateSubscription {
    messages(where: { is_public: { _eq: false } }) {
      id
      body
    }
  }
`;

export const PrivateMessagesList = () => {
  const { data, loading, error } = useSubscription(PUBLIC_MESSAGES_LIST);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error.message}`;
  const listItems = data.messages.map(msg => <li key={msg.id}>{msg.body}</li>);

  return (
    <div>
      <h2>Messages Privés</h2>
      <ol>{listItems}</ol>
    </div>
  );
};
