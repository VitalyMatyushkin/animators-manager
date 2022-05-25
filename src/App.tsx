import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';
import React from 'react';
import { A } from '@/A';
import './App.css';
import logo from './logo.svg';

const addCount = createEvent();
const $Count = createStore<number>(0).on(addCount, (count) => count + 1);

function App() {
  const count = useStore($Count);

  return (
    <div className="text-center">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => addCount()}>
            count is:
            {' '}
            {count}
          </button>
        </p>
        <A />
        <p>
          Edit
          {' '}
          <code>App.tsx</code>
          {' '}
          {' '}
          and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
