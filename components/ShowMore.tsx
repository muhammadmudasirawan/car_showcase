"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/Types";
import { updateSearchParams } from "@/utils";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10;


        const newPathname = updateSearchParams("limit", `${newLimit}`);

        setLimit(newLimit)
    };

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    btnType="button"
                    title="Show More"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;