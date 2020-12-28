import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const starWarsChars = [
  {name: 'Дарт Вейдер', side: 'dark'},
  {name: 'Палпатин', side: 'dark'},
  {name: 'Люк Скайуокер', side: 'light'},
  {name: 'Обиван Кеноби', side: 'light'},
]

const App = ({list}) => {
  return (
    <ul>
      {
        list.map((item, i) => (
          <li
            key={item.name + i}
          >
            <strong>
              {item.name}
            </strong>
            {`- ${item.side}`}
          </li>
        ))
      }
    </ul>
  )
}

const withFilteredChars = Component => ({list, side}) => {
  const filteredList = list.filter(item => item.side === side)
  return <Component list={filteredList} />
}

const FilteredList = withFilteredChars(App)

ReactDOM.render(
  <React.StrictMode>
    <FilteredList
      list={starWarsChars}
      side="dark"
    />
  </React.StrictMode>,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
