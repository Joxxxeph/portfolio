
const Header = () => {
  return (
    <header className='min-h-[70px] bg-transparent px-4'>
        <div className="flex justify-between items-center py-3">
            <div>
                <img className="w-[70px]" src="./users.png" alt="" />
            </div>

            <div className="px-4">
                <button className="text-sm px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-700 transition-colors text-white">Trabajemos juntos</button>
            </div>
        </div>
    </header>
  )
}
export default Header


