"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import maginfying from "@/public/assets/magnifying-glass.svg"
import Modelicon from "@/public/assets/model-icon.png"
import SearchManuFacturer from "./SearchManuFacturer";




const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={maginfying}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManuFacturer] = useState("");
    const [searchModel, setSearchModel] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
            return alert("Please provide some input");
        }

        setModel(searchModel)
        setManufacturer(searchManufacturer)
    };

    const updateSearchParams = (model: string, manufacturer: string) => {

        const searchParams = new URLSearchParams(window.location.search);


        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }


        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }


        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    };

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManuFacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManuFacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image
                    src={Modelicon}
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                    alt='car model'
                />
                <input
                    type='text'
                    name='model'
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    );
};

export default SearchBar;