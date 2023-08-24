"use client"
import { useEffect, useState } from "react"

export default function Home() {
  const [BoxOne, setBoxOne] = useState()
  const [BoxTwo, setBoxTwo] = useState()
  const [Loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",
        "https://jsonplaceholder.typicode.com/posts/1",
      ]
      const requests = urls.map((url) => fetch(url))
      const responses = await Promise.all(requests)
      const errors = responses.filter((response) => !response.ok)

      if (errors.length > 0) {
        throw errors.map((response) => Error(response.statusText))
      }

      const json = responses.map((response) => response.json())
      const data = await Promise.all(json)

      setBoxOne(data[0].title)
      setBoxTwo(data[1].title)
      setLoading(false)
    } catch (errors) {
      setLoading(false)
      errors.forEach((error) => console.error(error))
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="flex flex-col">
        {Loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="border-2 border-violet-500 bg-blue-100 px-5 py-3">
              {BoxOne}
            </div>
            <div className="mt-[50px] border-2 border-violet-500 bg-blue-100 px-5 py-3">
              {BoxTwo}
            </div>
          </>
        )}
      </section>
    </main>
  )
}
