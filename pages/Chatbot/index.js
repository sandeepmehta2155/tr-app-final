import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#eec75c",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#eec75c",
  userFontColor: "#fff"
};

const ChatBotHelper = () => {
  const steps = [
     {
      id: "1",
      message: "Hi, What is your name?",
      trigger: "name"
    },
    {
      id: "name",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hi {previousValue}! please select your gender?",
      trigger: "4"
    },
    {
      id: "4",
      options: [
        { value: "male", label: "Male", trigger: "5" },
        { value: "female", label: "Female", trigger: "5" }
      ]
    },
    {
      id: "5",
      message: "How old are you?",
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return "value must be a number";
        } else if (value < 0) {
          return "value must be positive";
        } else if (value > 120) {
          return `${value}? Come on!`;
        }

        return true;
      },
    //   trigger: "age"
    end: true
    },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
