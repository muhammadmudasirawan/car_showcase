'use client';
import Image from "next/image";
// import Hero from "../public/assets/hero.png"
import Steering from "../public/assets/steering-wheel.svg"
import Tire from "../public/assets/tire.svg"
import Gas from '../public/assets/gas.svg'
import RightRow from '../public/assets/right-arrow.svg'
import CustomButton from "./CustomButton";


import { CarProps } from "@/Types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { useState } from "react";
import CarDetails from "./CarDetails";




interface CarCardProps {
    car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const [isOpen, SetIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);


    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">{make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px]">
                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={generateCarImageUrl(car)}
                    alt="car model"
                    fill priority
                    className="object-contain" />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src={Steering}
                            width={20}
                            height={20}
                            alt="steering wheel" />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src={Gas}
                            width={20}
                            height={20}
                            alt="gas " />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src={Tire}
                            width={20}
                            height={20}
                            alt="tire wheel" />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title="view More"
                        containerStyles="w-full py[16px]
                    rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading- [17px] front-bold"
                        rightIcon={RightRow}
                        handleClick={() => SetIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => SetIsOpen(false)} car={car} />

        </div>
    )
}

export default CarCard