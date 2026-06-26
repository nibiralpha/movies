import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

const useMovies = () => {

   const sliderMovies = useSelector((state: RootState) => state.slider);

  return {
    sliderMovies,
  };
};

export default useMovies;
