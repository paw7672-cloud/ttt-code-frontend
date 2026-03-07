import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slice/themeSlice";

function DarkTheme() {

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-full bg-black text-white 
      dark:bg-yellow-400 dark:text-black text-sm"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}

export default DarkTheme;