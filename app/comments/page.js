"use client"
import { useState, useEffect } from "react"
import PrimaryBtn from "../componets/primaryBtn"
import Comment from "../componets/comment"
export default function Comments() {
  const [Comments, setComments] = useState([])
  const [Loading, setLoading] = useState(true)
  const [index, setIndex] = useState(10)
  const initalComments = Comments.slice(0, index)
  const getComments = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments")

      const data = await res.json()
      setComments(data)
      setLoading(false)
    } catch (errors) {
      setLoading(false)
      errors.forEach((error) => console.error(error))
    }
  }

  useEffect(() => {
    getComments()
  }, [])
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-14">
      <section className=" flex flex-col items-center gap-4">
        {Loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {initalComments.map((comment, idx) => {
              return <Comment key={idx} data={comment} />
            })}
            <PrimaryBtn
              btnText={"Load More"}
              handleClick={() => {
                setIndex(index + 10)
              }}
            />
          </>
        )}
      </section>
    </main>
  )
}
