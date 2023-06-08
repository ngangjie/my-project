import { Img } from "react-image";

const UserHeader = ({ name, login, joined, avatarUrl }) => {
    return (
        <div className="flex flex-row items-center w-full mt-10">
            <div className="flex flex-row md:flex-row-reverse items-start pl-4 2xl:w-1/5 xl:w-1/5 lg:w-1/6 md:w-1/6 sm:w-1/6">
                <Img
                    className="rounded-full"
                    src={avatarUrl ? avatarUrl : "OCTOCAT"}
                    width={117}
                    height={117}
                    alt="Picture of the author"
                />
            </div>
            <div className="lg:w-5/6 md:w-5/6 sm:w-full w-5/6 mx-6 md:mx-8 pl-[0.5rem]">
                <div className="flex lg:flex-row flex-col justify-around lg:justify-between items-start">
                    <div className="flex flex-col">
                        <h2 className="text-lm-dark-grey dark:text-dm-white">
                            {name ? name : "The Octocat"}
                        </h2>
                        <a
                            href={`https://github.com/${login ? login : "octocat"}`}
                            className="text-lm-light-blue dark:text-dm-light-blue py-1 atText"
                        >
                            @{login ? login : "octocat"}
                        </a>
                    </div>
                    <span className="text-lm-grey dark:text-dm-white lg:ml-32">
                        Joined{" "}
                        {joined
                            ? new Date(joined).toLocaleString("en-US", {
                                weekday: "short",
                                day: "numeric",
                                year: "numeric",
                            })
                            : "14 Tue 2023"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserHeader;