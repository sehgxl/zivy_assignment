export default function Comment({ data }) {
  const { name, email, id, body } = data
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-gray-100 px-5 py-3 text-sm shadow-md shadow-gray-400 transition duration-150 sm:text-base ">
      <p className="border-b-2 border-gray-300 pb-2 ">{body}</p>
      <h1>Name : {name}</h1>
      <h2>Email : {email}</h2>
      <p>ID : {id} </p>
    </div>
  )
}
