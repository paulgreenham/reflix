import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import MovieDetail from './components/MovieDetail'

class App extends Component {
  constructor () {
    super ()
    this.state = {
      currentUserId: "",
      users: [
        {id: "p1001", name: "Paul", budget: 20, rentedMovies: [], backgroundColor: "red"},
        {id: "c1002", name: "Char", budget: 20, rentedMovies: [], backgroundColor: "green"},
        {id: "s1003", name: "Sofia", budget: 10, rentedMovies: [], backgroundColor: "yellow"},
        {id: "n1004", name: "Naomi", budget: 10, rentedMovies: [], backgroundColor: "blue"},
      ],
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://scdn.nflximg.net/images/0230/3330230.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      rentalCost: 3
    }
  }

  setUser = id => {
    this.setState({
      currentUserId: id
    })
  }

  getUserIndex = () => this.state.users.findIndex(u => u.id === this.state.currentUserId)

  changeBudget = amount => {
    const userList = [...this.state.users]
    let currentUser = userList[this.getUserIndex()]
    currentUser.budget += amount
    this.setState({
      users: userList
    })
  }

  changeRentStatus = id => {
    const userList = [...this.state.users]
    const currentUser = userList[this.getUserIndex()]
    const movieList = [...this.state.movies]
    const movie = movieList.find(m => m.id === id)
    if (currentUser.budget < this.state.rentalCost && !movie.isRented) {
        return alert("Insufficient funds. Try returning currently rented movies first.")
    }
    else if (movie.isRented) {
        this.changeBudget(this.state.rentalCost)
        let mIndex = currentUser.rentedMovies.findIndex(m => m === id)
        currentUser.rentedMovies.splice(mIndex, 1)
    }
    else if (currentUser.budget >= this.state.rentalCost) {
        this.changeBudget( - this.state.rentalCost)
        currentUser.rentedMovies.push(id)
    }
    movie.isRented = !movie.isRented
    this.setState({
        movies: movieList,
        users: userList
    })
}

  render() {

    let currentUser = this.state.users[this.getUserIndex()]

    return (
      <Router>
        <div className="App">
          <div className="header">
            <div className="links">
              <Link to='/'>Home</Link>
              <Link to='/catalog'>Catalog</Link>
            </div>
            <div className="logo">REFLIX</div>
          </div>
            <Route exact path='/' render={() => <Landing users={this.state.users} setUser={this.setUser}/>} />
            <Route exact path='/catalog' render={() => <Catalog user={currentUser} movies={this.state.movies} changeRentStatus={this.changeRentStatus} />} />
            <Route exact path='/movies/:id' render={({ match }) => <MovieDetail match={match} movies={this.state.movies} />} />
        </div>
      </Router>
    )
  }
}

export default App
