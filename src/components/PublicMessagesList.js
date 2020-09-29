import React from "react";
import { gql, useSubscription } from "@apollo/client";

const PUBLIC_MESSAGES_LIST = gql`
  subscription PublicSubscription {
    messages(where: { is_public: { _eq: true } }) {
      id
      body
    }
  }
`;

export const PublicMessagesList = () => {
  const { data, loading, error } = useSubscription(PUBLIC_MESSAGES_LIST);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error.message}`;
  const listItems = data.messages.map(msg => <li key={msg.id}>{msg.body}</li>);

  return (
    <div>
      <h2>Messages publiques</h2>
      <ol>{listItems}</ol>
    </div>
  );
};
