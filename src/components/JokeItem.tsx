import React from 'react'
import { CardBottom } from './styled/Card'
import { CardTop } from './styled/Card'
import { CardWrapper, Setup, Delivery, Single } from './styled/Card'
import { Joke, FlagKeys } from '../common/types'

interface JokeItemProps {
    joke: Joke
}

const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {
    const flags = Object.keys(joke.flags)
        .filter(key => joke.flags[key as FlagKeys]).join(" , ")

    return (
        <CardWrapper>
            <CardTop>
                {joke.type === "single" ? (
                    <Single>{joke.joke}</Single>
                ) : (
                    <>
                        <Setup>{joke.setup}</Setup>
                        <Delivery>{joke.delivery}</Delivery>
                    </>
                )}
            </CardTop>
            <CardBottom>
                <p>{joke.category}</p>
                <p>{flags}</p>
            </CardBottom>
        </CardWrapper>
    )
}

export default JokeItem
