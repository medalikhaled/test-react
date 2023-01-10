import { Children, useEffect, useState } from "react";
import "./App.css";
import { MarsPhotos, Photo } from "./types/nasa_mars";
import GridView from "./components/GridView";

// importing API_KEY, in vite uses "import.meta" as a wrapper to classic "process" node function
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

// PageNb is the page number
const PageNb = 25;

//sol (ranges from 0 to max found in endpoint)
const sol = 1000;

function App() {
  // marsPhotos is the state, marsPhotosSet is the function to set the state,
  // We used the fetched object interface as a Generic for Typesafety and autocomplete
  const [marsPhotos, marsPhotosSet] = useState<Photo[]>();

  async function fetchMarsPhotos() {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${PageNb}&api_key=${API_KEY}`
    );
    const data = await response.json();
    marsPhotosSet(data.photos);
    console.log(data.photos, data);
  }

  // useEffect is a hook with an empty Dependancy Array, is called when the component is mounted
  useEffect(() => {
    fetchMarsPhotos();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4">
      {/* <p className="px-4">{JSON.stringify(marsPhotos)}</p> */}
      <h1 className=" block text-8xl text-red-500">Hello</h1>
      <GridView data={marsPhotos}></GridView>
    </div>
  );
}

export default App;
