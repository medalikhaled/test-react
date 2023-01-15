import { Children, useEffect, useRef, useState } from "react";
import "./App.css";
import { MarsPhotos, Photo } from "./types/nasa_mars";
import GridView from "./components/GridView";
import SelectSol from "./components/SelectSol";

/*
* install this mini vscode extention to see comments Styled:
  https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

  * I use TailwindCSS because it has a smaller bundle size than regular CSS, it works well with PostCSS, and it is efficient to use. Additionally, it allows for easy implementation of design systems using tools such as "cva", "clsx", and "storybook". It also makes it simple to set default fonts, colors, and create a dark mode, as well as responsive CSS. Other solutions to implement Styles are CSS-in-Js using somthing like styled components, using SASS, Or using regular CSS With CSS Modules 
*/

// ? importing API_KEY, in vite uses "import.meta" as a wrapper to classic "process" node function
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

//** PageNb is the page number
const PageNb = 25;

// TODO: ADD DARK MODE (tailwindCSS), + Add your Color Palette to TailwindCSS Config
function App() {
  //* We used the fetched object interface as a Generic for Typesafety and autocomplete
  const [marsPhotos, marsPhotosSet] = useState<Photo[]>();

  // ? sol (ranges from 0 to max found in endpoint)
  const [sol, solSet] = useState<number>(1000);

  // * It's better to use React Query or  SWC for data fetching Instead of using useEffect with the Fetch API

  async function fetchMarsPhotos() {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${PageNb}&api_key=${API_KEY}`
    );
    const data = await response.json();
    marsPhotosSet(await data.photos);
  }

  // * useEffect is a hook with an empty Dependancy Array,the fetch will only happen when the component is mounted

  useEffect(() => {
    fetchMarsPhotos();
  }, [sol]);

  // ! I Didn't use it, But we can use Refs & Portals to create Modals
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex	w-full min-w-[90vw] flex-col items-center justify-center overflow-hidden">
      <header className="py-2">
        <h1 className="block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl  font-extrabold  text-transparent md:text-8xl">
          Mars Photos
        </h1>

        <SelectSol solSet={solSet} />
        <div className="p-4" />
      </header>

      {marsPhotos ? (
        <GridView data={marsPhotos} buttonRef={buttonRef}></GridView>
      ) : (
        <main className="flex h-[90vh] min-h-[90vh] w-full items-center justify-center">
          <h1 className="text-4xl text-blue-500 md:text-8xl">Loading...</h1>
        </main>
      )}
    </div>
  );
}

export default App;
