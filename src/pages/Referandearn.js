import React from 'react';
import FriendsReferred from "./FriendsReferred";

const Referandearn = () => {
    return (
        <div className="flex  flex-col mt-3">
            <div className="flex flex-col md:flex-row">
                <div className="bg-white p-7 md:p-2 rounded-lg  drop-shadow-xl shadow-gray-600"
                >
                    <div className="flex gap-1 md:gap-3 flex-col">
                    <div className="flex gap-10 md:gap-14 flex-wrap md:w-96 md:flex-row ">
                        <div className="flex flex-col"><h1 className="text-fuchsia-900 text-sm font-normal">Referral Earning</h1><h1 className=" text-start text-2xl font-medium"> ₹ 2,200</h1> </div>
                        <div className="flex flex-col"><h1 className="text-fuchsia-900 text-sm font-normal">Total Referral</h1><h1 className=" text-start text-2xl font-medium" > 7</h1> </div>
                        <div className="flex flex-col"><h1 className="text-fuchsia-900 text-sm font-normal">Wallet Balance</h1><h1 className=" text-start text-2xl font-medium">₹ 2,200</h1> </div>
                        <div>
                            <button className="rounded-full my-5 md:my-0.5 p-2  md:mx-28 md:p-2 bg-fuchsia-900 text-white ">Withdraw Balence</button>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="md:ml-24">
                    <div className="flex flex-col">
                        <h1 className="text-2xl pt-3 text-start text-fuchsia-900 font-semibold leading-9">
                            Your Referral Code
                        </h1>
                        <div className="bg-gradient-to-r from-orange-400 to-fuchsia-900 rounded-lg p-0.5">
                            <div className="bg-white px-20 md:px-36 py-2  text-fuchsia-900 font font-medium text-xl leading-loose tracking-widest rounded-lg ">
                                E D C H 5 4
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div>
                <h1 className="text-start font-bold text-fuchsia-900 text-2xl mt-7">How does it Work?</h1>

                <div className="flex flex-col md:flex-wrap md:h-72 gap-x-11   w-80">
                    <div className="flex mt-6 flex-row">
                        <div className="bg-zinc-300  w-[65px] h-[65px] flex items-center justify-center rounded-full">
                            <img width="32px" height="32px" src="invitepeople.png" alt="sample"/>

                        </div>
                        <div className="flex flex-col w-64 pl-3 text-start">
                            <h1 className="font-medium text-base">
                                Invite your Friends
                            </h1>
                            <h1>
                                Share the link tutedude.com with

                                your friends
                            </h1>

                        </div>
                    </div>
                    <div className="flex mt-6 flex-row">
                        <div className="bg-zinc-300  w-[65px] h-[65px] flex items-center justify-center rounded-full">
                            <img width="20px" height="32px" src="rs.png" alt="rs"/>

                        </div>
                        <div className="flex flex-col w-64 pl-3 text-start">
                            <h1 className="font-medium text-base">
                                You get ₹ 200 as referral money
                            </h1>
                            <h1>
                                On total purchase the friend makes, into your wallet
                            </h1>

                        </div>
                    </div>
                    <div className="flex mt-6 flex-row">
                        <div className="bg-zinc-300  w-[65px] h-[65px] flex items-center justify-center rounded-full">
                            <img width="32px" height="32px" src="wallet.png"/>

                        </div>
                        <div className="flex flex-col w-64 pl-3 text-start">
                            <h1 className="font-medium text-base">
                                Transfer money from wallet
                            </h1>
                            <h1>
                                When the wallet balance reaches
                                ₹200 or more, you can withdraw it
                            </h1>

                        </div>
                    </div>

                    <div className="flex mt-6 flex-row">
                    <div className="bg-zinc-300  w-[65px] h-[65px] flex items-center justify-center rounded-full">
                        <img width="32px" height="32px" src="refferalcoupon.png"/>

                    </div>
                    <div className="flex flex-col w-64 pl-3 text-start">
                        <h1 className="font-medium text-base">
                            Friend purchases any course
                        </h1>
                        <h1>
                            Using your REFERRAL CODE in the payments page
                        </h1>

                    </div>
                </div>
                    <div className="flex mt-6 flex-row">
                        <div className="bg-zinc-300  w-[65px] h-[65px] flex items-center justify-center rounded-full">
                            <img width="32px" height="32px" src="discount.png" alt="sample"/>

                        </div>
                        <div className="flex flex-col w-64 pl-3 text-start">
                            <h1 className="font-medium text-base">
                                Your Friend gets ₹ 200 Off
                            </h1>
                            <h1>
                                On his overall fee on successful purchase using your referral code
                            </h1>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Referandearn;