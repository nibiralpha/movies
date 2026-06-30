"use client";

import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { Search } from "lucide-react";
import styles from "./Search.module.css";
import { ChangeEvent, useRef, useState } from "react";

const SearchIcon = (props: any) => (
  <components.DropdownIndicator {...props}>
    <Search size={18} />
  </components.DropdownIndicator>
);

interface SearchComponent {
  onChange?: (value: string) => void;
}

export default function SearchInputComponent({
  onChange,
}: Readonly<SearchComponent>) {
  const searchTimer: number = 2000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [search, setSearch] = useState<string>("");

  const onchangeKeyword = (value: string) => {
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
    onchangeKeyword(input);

    //   return data.results.map((item: any) => ({
    //     value: item.id,
    //     label: item.title || item.name,
    //     image: item.poster_path || item.profile_path,
    //     type: item.media_type,
    //   }));
  };

  return (
    <div className={styles.search_select}>
      <AsyncSelect
        // onChange={onchangeKeyword}
        loadOptions={searchMovies}
        components={{
          DropdownIndicator: SearchIcon,
          IndicatorSeparator: null,
        }}
        placeholder="Search..."
        formatOptionLabel={(option: any) => (
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
              <div>{option.label}</div>
              <small>{option.type}</small>
            </div>
          </div>
        )}
      />
    </div>
  );
}
