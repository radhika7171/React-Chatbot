//configurable bot properties which can be changed
import React from "react";

import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
const config = {
  initialMessages: [createChatBotMessage(`Hello world Radhika`)],
  botName: "cool-bot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },

  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#FFC0CB",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#FFC0CB",
    },
  },

  // state: {
  //   countries: {
  //     asia: "Andaman and Nicobar",
  //     europe: "Italy",
  //   },
  // },
};

export default config;
