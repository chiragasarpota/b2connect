export default function NavigationHeader(props) {
  function handleClick(e) {
    props.setLogin(false);
  }
  return (
    <div className="w-screen h-16 bg-white shadow-md flex flex-col justify-center items-end pr-10">
      {props.login ? (
        <button
          type="button"
          className="py-2 px-5 w-max m-2 bg-indigo-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={handleClick}
        >
          Logout
        </button>
      ) : null}
    </div>
  );
}
