import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddDepenseContextProvider from './store/AddDepenseContext';
import FilterYearProvider from './store/FilterYearProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FilterYearProvider>
<AddDepenseContextProvider>
    <App />
    </AddDepenseContextProvider>
    </FilterYearProvider>
);

