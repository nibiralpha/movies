"use client";

import AsyncSelect from "react-select/async";
import { components, DropdownIndicatorProps } from "react-select";
import { Search } from "lucide-react";
import styles from "./Search.module.css";
import { useRef, useState } from "react";
import { SearchPersonResult, TmdbSearchResponse } from "@app-types/Search";

interface SearchOption {
  value: number;
  label: string;
  image: string | null;
  type: "movie" | "tv" | "person";
}

const SearchIcon = (props: DropdownIndicatorProps<unknown, false>) => (
  <components.DropdownIndicator {...props}>
    <Search size={18} />
  </components.DropdownIndicator>
);
interface SearchComponent {
  onChange?: (value: string) => void;
  data?: TmdbSearchResponse;
}

export default function SearchInputComponent({
  onChange,
  data,
}: Readonly<SearchComponent>) {
  const searchTimer: number = 2000;
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
    if (!input) return [];
    onChangeKeyword(input);
  };

  const showData = async (inputValue: string) => {
    console.log("showData function", data);

    return (
      data?.results.map((item: SearchPersonResult) => ({
        value: item.id,
        // label: item.name || item.original_name,
        label: getName(item),
        image: item.profile_path,
        type: item.media_type as "person",
      })) || []
    );
  };

  const getName = (searchResult: SearchPersonResult): string => {
    return "";
  };

  return (
    <div className={styles.search_select}>
      <AsyncSelect
        instanceId="movie-search"
        inputValue={search}
        openMenuOnFocus={true}
        defaultOptions={
          data?.results.map((item: SearchPersonResult) => ({
            value: item.id,
            label: getName(item),
            image: item.profile_path,
            type: item.media_type,
          })) || []
        }
        onInputChange={(value, { action }) => {
          if (action === "input-change") {
            searchMovies(value);
          }

          return value;
        }}
        onFocus={(event) => {
          searchMovies(search);
        }}
        loadOptions={showData}
        components={{
          // DropdownIndicator: SearchIcon,
          IndicatorSeparator: null,
        }}
        formatOptionLabel={(option: SearchOption) => {
          console.log("React Select Dropdown Option Data:", option);

          return (
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <img
                src={
                  option.image
                    ? `https://image.tmdb.org/t/p/w92${option.image}`
                    : "/placeholder.png"
                }
                width={40}
                height={55}
                style={{
                  objectFit: "cover",
                  borderRadius: 4,
                }}
                alt=""
              />

              <div>
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
