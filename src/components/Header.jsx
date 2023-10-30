
const Header = () => {
  return (
    <header className="min-h-[70px] bg-transparent px-4">
      <div className="flex justify-between items-center py-3">
        <div>
          <img className="w-[60px] sm:w-[70px]" src="./users.png" alt="" />
        </div>

        <div className="flex py-2">
          <a href="#" className="btn-a">
            <div className="btn-all text-white px-[.5rem] py-[.5rem] sm:px-[1rem]">
              Trabajemos juntos
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header


