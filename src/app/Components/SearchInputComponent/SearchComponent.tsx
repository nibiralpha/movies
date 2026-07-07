"use client";

import Select from "react-select";
import { components, DropdownIndicatorProps } from "react-select";
import { Search } from "lucide-react";
import styles from "./Search.module.css";
import { useRef, useState } from "react";
import { SearchPersonResult, TmdbSearchResponse } from "@app-types/Search";
import { TMDB_IMAGE_BASE_THUMB } from "@Constant/ApiDataHelper";
import { useRouter } from "next/navigation";

interface SearchOption {
  value: number;
  label: string;
  image: string | null;
  type: "movie" | "tv" | "person";
}

interface SearchComponent {
  onChange?: (value: string) => void;
  data?: TmdbSearchResponse;
}

const SearchIcon = (props: DropdownIndicatorProps<SearchOption, false>) => (
  <components.DropdownIndicator {...props}>
    <Search size={18} />
  </components.DropdownIndicator>
);
export default function SearchInputComponent({
  onChange,
  data,
}: Readonly<SearchComponent>) {
  const router = useRouter();

  const searchTimer: number = 1000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [search, setSearch] = useState<string>("");

  const onChangeKeyword = (value: string) => {
    setSearch(value);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (onChange) {
        onChange(value);
      }
    }, searchTimer);
  };

  const searchMovies = async (input: string) => {
    // if (!input) return [];
    onChangeKeyword(input);
  };

  const changePage = (type: "movie" | "tv" | "person", id: number) => {
    if (type === "movie") {
      router.push("/details/" + id);
    }

    if (type === "tv") {
      router.push("/series/details/" + id);
    }

    if (type === "person") {
      router.push("/celebrity/" + id);
    }
  };

  const getName = (searchResult: SearchPersonResult): string => {
    if (
      (searchResult.media_type === "tv" ||
        searchResult.media_type === "person") &&
      searchResult.name !== undefined
    ) {
      return searchResult.name;
    } else if (
      searchResult.media_type === "movie" &&
      searchResult.title !== undefined
    ) {
      return searchResult.title;
    }

    return "Not Found";
  };

  const getTvProgramImage = (searchResult: SearchPersonResult): string => {
    if (
      (searchResult.media_type === "tv" ||
        searchResult.media_type === "movie") &&
      searchResult.poster_path !== null
    ) {
      return searchResult.poster_path;
    } else if (
      searchResult.media_type === "person" &&
      searchResult.profile_path !== null
    ) {
      return searchResult.profile_path;
    }

    return "";
  };

  return (
    <div className={styles.search_select}>
      <Select
        instanceId="movie-search"
        inputValue={search}
        openMenuOnFocus={true}
        isSearchable={true}
        options={
          data?.results.map((item: SearchPersonResult) => ({
            value: item.id,
            label: getName(item),
            image: getTvProgramImage(item),
            type: item.media_type,
          })) || []
        }
        onInputChange={(value, { action }) => {
          if (action === "input-change") {
            searchMovies(value);
          }
          return value;
        }}
        // onFocus={(event) => {
        //   searchMovies(search);
        // }}
        components={{
          DropdownIndicator: SearchIcon,
          IndicatorSeparator: null,
        }}
        formatOptionLabel={(option: SearchOption) => {
          return (
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
              onClick={() => changePage(option.type, option.value)}
            >
              <img
                src={
                  option.image
                    ? `${TMDB_IMAGE_BASE_THUMB}/${option.image}`
                    : "/no_image.jpg"
                }
                width={40}
                height={55}
                style={{
                  objectFit: "cover",
                  borderRadius: 4,
                }}
                alt=""
              />

              <div className={styles.options}>
                <div className={styles.text_background}>{option.label}</div>
                <small className={styles.text_background}>{option.type}</small>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}
