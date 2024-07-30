"use client";

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { nftaddress, nftmarketaddress } from "@config";

import NFT from "D:/Web3/dreamcatcher-fullstack/backend/artifacts/contracts/NFT.sol/NFT.json";
import Dreamcatcher from "D:/Web3/dreamcatcher-fullstack/backend/artifacts/contracts/Dreamcatcher.sol/Dreamcatcher.json";

const Home = () => {
    const [nfts, setNfts] = useState([]);
    const [loadingState, setLoadingState] = useState("not-loaded");
    useEffect(() => {
        //loadNFTs();
    }, []);
    return <div>Test</div>;
};

export default Home;
