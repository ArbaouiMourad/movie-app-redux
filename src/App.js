import React,{Component}from 'react';
import NameFilter from './component/NameFilter' ;
import RatingFilter from './component/RatingFilter' ;
import MovieList from './component/MovieList';
import  ModalExample from './component/Addmodal';
import WithLoading from './component/WithLoading';
import {BrowserRouter,Route} from 'react-router-dom'
import MovieDescription from './component/MovieDescription'
import './App.css'



const ListWithLoading = WithLoading(MovieList)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      titleFilter: '',
      loading: false
    } }
    componentDidMount = () => {
      this.setState({ loading: true });
  
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    };

  render() {

  return (
    <BrowserRouter>
    <Route exact path="/newpage/:id" render={(props) => <MovieDescription id={props.match.params.id}/>} />
    <Route exact path="/" render={() => <div className="App">

    <header className="movie-app-header">
  
    <NameFilter  value={this.state.titleFilter}  onChange={(newtitleFilter) => {
                this.setState({
                  titleFilter: newtitleFilter
                })
              }}/>
              
     <RatingFilter />
    </header>
    <main className="movie-app-main">
  
      <ListWithLoading isLoading={this.state.loading}   />
    
    <div className="ME">
      <ModalExample  add={this.addnewMovie} />
      </div>
    </main>
    
      </div>} />

      </BrowserRouter>
  );
}
}
export default App;

