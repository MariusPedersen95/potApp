import React, { Component } from "react";
import { connect } from "react-redux";
import PotPage from "./PotPage";
import data from "./state/data.json";
import { fetchPots } from "./state/actions";
import "./App.css";

const mapStateToProps = state => {
  return {
    pots: state.pots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPot: () =>
      dispatch({
        type: "FETCH_POTS_SUCCESS",
        response: data
      })
  };
};

class App extends Component {
  state = {
    limit: 3
  };

  componentDidMount() {
    fetchPots();
  }

  componentWillUnmount() {}

  render() {
    const { pots } = this.props;
    const { limit } = this.state;
    return (
      <main className="App">
        <div>
          <h1 className="App-header">Norsk Tipping Pottoversikt</h1>
          <div className="center-block">
            <PotPage pots={pots} limit={limit} />
            <button
              className="Load-more"
              onClick={() => {
                let newLimit;
                limit === pots.length
                  ? (newLimit = 3)
                  : (newLimit = pots.length);
                this.setState({
                  limit: newLimit
                });
              }}
            >
              {`Vis ${limit !== pots.length ? "fler" : "færre"} produkter`}
            </button>
          </div>
        </div>
      </main>
    );
  }
}

App.defaultProps = {
  pots: []
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
