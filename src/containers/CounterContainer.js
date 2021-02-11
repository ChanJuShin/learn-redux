import React from 'react';
import { connect } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

export default connect(
  (state) => ({ number: state.counter.number, diff: state.counter.number }),
  {
    increase,
    decrease,
    setDiff
  }
)(CounterContainer);
