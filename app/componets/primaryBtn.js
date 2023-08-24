export default function PrimaryBtn({ btnText, handleClick }) {
  return (
    <button
      className="w-max rounded-lg bg-gray-300 px-5 py-3 transition duration-150 hover:scale-110 hover:bg-gray-500 hover:text-white"
      onClick={handleClick}
    >
      {btnText}
    </button>
  )
}
