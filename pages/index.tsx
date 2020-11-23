import React, { useEffect, useState } from "react"
import { GetServerSideProps } from "next"
import Joke from "../components/Joke"
import Container from "../components/Container"
import Unsplash, { toJson } from "unsplash-js"
require("dotenv").config()

const unsplash = new Unsplash({
  accessKey: process.env.ACCESS_KEY,
})

export default function jokes({ setup, punchline }) {
  const [readyForThePunch, setReadyForThePunch] = useState(false)
  const [photo, setPhoto] = useState()

  useEffect(() => {
    unsplash.photos
      .getRandomPhoto({ collection: "People" })
      .then(toJson)
      .then((json) => {
        console.log(json.urls)
        setPhoto(json.urls.regular)
      })

    setTimeout(() => {
      setReadyForThePunch(true)
    }, 3000)
  }, [])

  return (
    <Container
      style={{
        backgroundImage: `url(${photo}`,
      }}
    >
      <Joke setup>{setup}</Joke>
      <Joke punchline>{readyForThePunch ? punchline : ""}</Joke>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke")
  const { setup, punchline } = await res.json()

  return {
    props: { setup, punchline },
  }
}
