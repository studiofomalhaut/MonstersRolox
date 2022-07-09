import React from 'react'
// import { Component } from 'react'
import { useState, useEffect } from 'react'
import CardList from './components/card-list/cardlist.component'
import SearchBox from './components/search-box/search-box.component'
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('Monster Rolox');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('')

  console.log('render')


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users)=> setMonsters(users)
    );
  }, [])


  useEffect(()=>{
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterMonsters(filteredMonsters);
    
    console.log('effect is firing')
  }, [monsters, searchField])



  const onSearchChange = (event) => {
       const searchFieldString = event.target.value.toLocaleLowerCase();
       setSearchField(searchFieldString);
  }

  const onStringChange = (event) =>{
      setStringField(event.target.value);
  }

  const onTitleChange = (event) =>{
    const setTitleString = event.target.value.toLocaleLowerCase();
       setTitle(setTitleString);
}

  return (
    <div className="App">
    <h1 className="app-title">{title}</h1>
    <SearchBox onChangeHandler={onSearchChange}
               placeholder={'search monsters...'}
               className={'monters-search-box'}
    />
    <br />
    <SearchBox onChangeHandler={onStringChange}
               placeholder={'search...'}
               className={'search-box'}
    />
    <br />
    <SearchBox onChangeHandler={onTitleChange}
               placeholder={'set title...'}
               className={'title-search-box'}
    />
    <CardList monsters={filteredMonsters}/>
  </div>
  )
}

// class App extends Component{

//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//      .then((response) => response.json())
//      .then((users)=> this.setState(() => {
//        return {monsters: users}
//      },
//      ()=> (console.log(this.state))
//      ))
//   }
// //  fetch('url).then( (r) => r.json()).then( (usr) => this.setState( () => { 
// //    return {arr: usr}
// //   }
// //   }))


//     onSearchChange = (event) =>{
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState( () => {
//           return { searchField };
//         })
//   }

//   render(){

//   const { monsters, searchField } = this.state;

//   const { onSearchChange } = this;

//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchField);
// })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange}
//                    placeholder={'search monsters...'}
//                    className={'monters-search-box'}
//         />
//         <CardList monsters={filteredMonsters}
//                   />
//       </div>
//     );
//   }
// }


export default App;
