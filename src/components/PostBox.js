import React from "react";
import { gql, useMutation } from "@apollo/client";
import Form from "@rjsf/core";

const POST_MESSAGE = gql`
  mutation MyMutation($body: String = "", $is_public: Boolean = false) {
    insert_messages_one(object: { body: $body, is_public: $is_public }) {
      body
    }
  }
`;

export const PostBox = () => {
  const [postMessage] = useMutation(POST_MESSAGE);
  const schema = {
    type: "object",
    properties: {
      message: {
        type: "string",
      },
      public: {
        type: "boolean",
      },
    },
  };
  const onSubmit = ({ formData }) => {
    postMessage({
      variables: { body: formData.message, is_public: formData.public },
    });
  };

  return (
    <div>
      <Form schema={schema} onSubmit={onSubmit} />
    </div>
  );
};
