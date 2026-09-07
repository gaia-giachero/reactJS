import Container from "./components/Container"
import MovieCard from "./components/MovieCard"

import './App.css';

function App() {

  return (
    <>
      <Container>
        <MovieCard
          title='Joker'
          year='2019'
          poster='https://www.ilpost.it/wp-content/uploads/2019/12/locandine14.jpg' 
        />
        <MovieCard 
          title='The Great Gatsby' 
          year='2013' 
          poster='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQZ-tMNHLoWL5qIQzzgCEsBZv3nWi73uh5gKDEfoD_GDBnIOah5wIEZDs&s=10' 
        />
        <MovieCard 
          title='LA LA LAND' 
          year='2017' 
          poster='https://youmediafanpage.akamaized.net/gallery/5a467279e4b081ca064e0c2b_5a46727be4b081ca064e0db9_p854x570.jpg' 
        />
      </Container>
    </>
  )
}

export default App
