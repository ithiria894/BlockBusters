import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
// import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentsindex";
// import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/componentIndex";

//IMPORT SMART CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const author = () => {
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  //IMPORT SMART CONTRACT DATA
  const { fetchMyNFTsOrListedNFTs, currentAccount } = useContext(
    NFTMarketplaceContext
  );

  const [nfts, setNfts] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
      setNfts(items);
    });
  }, []);

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      setMyNFTs(items);
    });
  }, []);

  //make a function to console log the nfts
  const consoleLogNFTS = () => {
    console.log(nfts);
    document.getElementById("demo").innerHTML = nfts;
  };

  return (
    <div className={Style.author}>
      {/* <Banner bannerImage={images.creatorbackground2} /> */}
      <AuthorProfileCard currentAccount={currentAccount} />
      {/* <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      /> */}
      <div>
        {/* //call the function */}
        {/* <p id="demo"></p>
        <button onClick={consoleLogNFTS}>Console Log NFTS</button> */}
      </div>
      <div>
        <a>{/* asdfasdf */}</a>
      </div>
      <div>
        <AuthorNFTCardBox
          collectiables={collectiables}
          created={created}
          like={like}
          follower={follower}
          following={following}
          nfts={nfts}
          myNFTS={myNFTs}
        />
      </div>
      {/* <Title
        heading="Popular Creators"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div> */}

      <Brand />
    </div>
  );
};

export default author;
