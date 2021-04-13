import React, { useState } from 'react'
import { Row, Wrapper, Header, Image, Form, Search, Button } from './components/styled/index'
import Joker from './components/images/Joker.jpg'
import axios from 'axios'
import JokeItem from './components/JokeItem'
import { Joke } from './common/types'

const base_url = "https://v2.jokeapi.dev/joke/Any?amount=10";

const App = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState<Joke[]>([]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endPoint = `${base_url}?contains=${search}&amount=10`;
    const { data } = await axios.get(endPoint);
    
    if (data.error) {
      setError(true);
      setJokes([]);
    } else {
      setError(false);
      setJokes(data.jokes)
    }
    setSearch("");
  }

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Image src={Joker} alt="Joker" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search type="text" placeholder="Search..." value={search} onChange={handleChange} />
          <Button type="submit">Submit</Button>
        </Form>

        <div>
          {error && <p>Sorry, no jokes found</p>}
          {jokes.length > 0 && jokes.map(joke => (
            <JokeItem key={joke.id} joke={joke} />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default App
