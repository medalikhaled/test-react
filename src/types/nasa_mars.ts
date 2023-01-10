//This is the type of the Root Object Fetched from The NASA API
export interface MarsPhotos {
  photos: Photo[];
}

/* Inner Objects Types (Interfaces) */

//The Type of the Photo's Object
export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

//The Type of the Camera's Object
export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

//The Type of the Rover's Object
export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}
