import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FriendListItem from "./FriendListItem";
import { BucketGrid } from "../Bucket/Bucket-Styles";
import PrimarySearchAppBar from "../Header";

const ViewFriend = props => {
  const state = useSelector(state => state);
  const [localBucket, setLocalBucket] = useState([]);
  const [searchString, setSearchString] = useState("");
  // user does not need to hit enter to run the search
  const isEnterReq = true;

  useEffect(_ => {
    if (state.friendBucket.length > 0)
      setLocalBucket(
        state.friendBucket.filter(item => item.completed === false)
      );
  }, []); //eslint-disable-line
  useEffect(
    _ => {
      setLocalBucket(state.friendBucket);
      if (state.friendBucket.length > 0)
        setLocalBucket(
          state.friendBucket.filter(item => item.completed === false)
        );
    },
    [searchString, state.friendBucket]
  );

  return (
    <>
      <PrimarySearchAppBar
        isEnterReq={isEnterReq}
        searchPlaceholder={"Search List..."}
        history={props.history}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <BucketGrid>
        {localBucket.length > 0
          ? localBucket
              .filter(item =>
                item.itemtitle
                  .toLowerCase()
                  .includes(searchString.toLowerCase())
              )
              .map((item, index) => (
                <FriendListItem
                  key={index}
                  item={item}
                  friendName={props.match.params.username}
                />
              ))
          : null}
      </BucketGrid>
    </>
  );
};

export default ViewFriend;
