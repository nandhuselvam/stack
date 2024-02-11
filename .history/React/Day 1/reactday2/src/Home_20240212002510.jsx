import React from 'react'

function Home() {
   const list = [
    {
        Name: "Appa",
        DOB: "Sixty",
        Place: "Tgode"
    },
    {
        Name: "Arthu",
        DOB: "Two",
        Place: "Tgode"
    },
    {
        Name: "Amma",
        DOB: "Fifty",
        Place: "Tgode"
    }
   ]
  return (
    <>
      <h1>Family</h1>
      <ul>
        {list.map(func)
      </ul>
    </>
  )
}

export default Home
