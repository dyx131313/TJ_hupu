import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import DetailPost from "../modules/DetailPost";
import { get, post } from "../../utilities";
import SinglePost from "../modules/SinglePost";
import Rate from "../modules/Rate";
import RatesBlock from "../modules/RatesBlock";

const Detail = (props) => {
  const { postId } = useParams();
  const [posts, setPosts] = useState(null);
  const [rates, setRates] = useState([]);
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    get(`/api/posts/${postId}`)
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
    get(`/api/posts/${postId}/rates`).then((RateObjs) => {
      if (Array.isArray(RateObjs)) {
        let reversedRateObjs = RateObjs.reverse();
        setRates(reversedRateObjs);
      } else {
        console.error("API response is not an array:", RateObjs);
      }
    });
  }, [postId]);

  const addNewRate = async (rate) => {
    const user = await get("/api/whoami");
    if (user._id === undefined) {
      alert("Please login first!");
      return;
    }
    const rateData = {
      ...rate,
      creator_id: user._id,
      creator_name: user.name,
    };

    post(`/api/posts/${postId}/rate`, rateData)
      .then((newRate) => {
        setRates([newRate].concat(rates));
        const body = { rating: newRate.rating };
        post(`/api/posts/${postId}/update`, body).catch((error) => {
          console.error("Error updating post:", error);
        });
        setPosts((prevPost) => ({
          ...prevPost,
          tot_rates: prevPost.tot_rates + 1,
          tot_rating: prevPost.tot_rating + newRate.rating,
          star_ratings: prevPost.star_ratings.map((star_rating) => {
            if (star_rating.stars * 2 === newRate.rating) {
              star_rating.count += 1;
            }
            return star_rating;
          }),
        }));
      })
      .catch((error) => {
        console.error("Error adding rate:", error);
      });
  };

  if (!posts) {
    return <div>加载中...</div>;
  }
  return (
    <div className="Card-container">
      <SinglePost post={posts} whether_detail={true} />
      <Rate
        onSubmit={(rate) => {
          addNewRate(rate);
        }}
      />
      <RatesBlock
        rates={rates}
        // addNewComment={addNewComment}
      />
    </div>
  );
};

export default Detail;
