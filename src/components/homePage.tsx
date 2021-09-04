import React, {Component} from "react";

interface homePageProps {
  title?: String;
  subtitle?: String;
}

interface homePageState {
  great: boolean;
}

export default class homePage extends Component<homePageProps, homePageState> {
  state = {
    great: false,
  };
  render() {
    return (
      <div>
        <h1>Here is my first typescript project.</h1>
      </div>
    );
  }
}
