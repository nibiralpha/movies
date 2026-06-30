"use client";

import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { Search } from "lucide-react";
import styles from "./Search.module.css";


const SearchIcon = (props: any) => (
  <components.DropdownIndicator {...props}>
    <Search size={18} />
  </components.DropdownIndicator>
);

export default function SearchInputComponent() {
  const searchMovies = async (input: string) => {
    if (!input) return [];

    const res = await fetch(`/api/search?query=${input}`);
    const data = await res.json();

    return data.results.map((item: any) => ({
      value: item.id,
      label: item.title || item.name,
      image: item.poster_path || item.profile_path,
      type: item.media_type,
    }));
  };

  return (
    <div className={styles.search_select}>
      <AsyncSelect
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
