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
      <>
        <h1>Here is my first typescript project.</h1>
        <p>{this.props.title}</p>
        {this.props.subtitle && <p>{this.props.subtitle}</p>}
        <h2
          onClick={() =>
            this.setState({
              great: !this.state.great,
            })
          }
        >
          {this.state.great.toString()}
        </h2>
      </>
    );
  }
}
