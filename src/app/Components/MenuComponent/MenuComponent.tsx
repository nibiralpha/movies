import { useDispatch, useSelector } from "react-redux";
import SearchInputComponent from "@Components/SearchInputComponent/SearchComponent";
import styles from "./Menu.module.css";
import { AppDispatch, RootState } from "@/src/redux/store";
import { fetchSearchResults } from "@Services/Search/Search";
import { useRouter } from "next/navigation";

export default function MenuComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const searchResult = useSelector(
    (state: RootState) => state.search.data || {},
  );

  const onSearch = (searchedData: string) => {
    dispatch(fetchSearchResults(searchedData));
  };

  const changePage = (id: number, type: "movie" | "tv") => {
    router.push("/details/" + id);
  };

  const changeHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles.menu_container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={"/logo.png"} onClick={changeHome} />
          </div>
        </div>
        {/* <div className={styles.middle}>
          <div className={styles.menus}>
            <div className={styles.menu}>
              <div className={styles.menu_name}>Home</div>
            </div>
          </div>
        </div> */}
        <div className={styles.right}>
          <div className={styles.search}>
            <div className={styles.icon}>
              {/* <img src={"/search_icon.svg"} /> */}
              <SearchInputComponent data={searchResult} onChange={onSearch} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
