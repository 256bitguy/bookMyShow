export const Header=()=>{
   return(
    <div className="flex justify-center align-middle w-full p-2 ">
    <div className=" w-2/3">
    <div className="  flex justify-between  gap-8">
      <div className="flex flex-1">
        <div className="pr-4">
          <img src="src/assets/bookmyshow.png" alt="bookmyshow" />
        </div>
        <div className=" border border-gray-300 rounded-md flex w-3/5 ">
          <div className="bg-white border-l border-gray-300 justify-start p-2">X</div>
          <input placeholder="Search movies" className="w-4/5"></input>
        </div>
      </div>
      <div className="flex">
        <div className="flex-4  py-2 px-3">mumbai   v</div>
        <div className="flex-4 p-2 text-white">
            <button className="bg-red-500 h-6 w-20   text-sm border rounded-md"> Sign in</button>
            </div>
        <div className="flex-4 py-2 px-3">menu</div>
      </div>
    </div>
    </div>
  </div>
   )
}