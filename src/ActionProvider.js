class ActionProvider {
  //object of class Action provider
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  helloWorldHandler = () => {
    const message = this.createChatBotMessage(
      "hello, knock- knock, open the door !!"
    );
    this.setChatbotMessage(message);
  };

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}
export default ActionProvider;
