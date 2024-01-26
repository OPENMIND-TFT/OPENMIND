import { useState } from 'react';
import ReactionButtonBoxContainer from './style';

const ReactionButtonBox = ({ question, style }) => {
  const URL = `https://openmind-api.vercel.app/3-5/questions/${question.id}/reaction/`;
  const [likeCount, setLikeCount] = useState(question.like);
  const [dislikeCount, setDislikeCount] = useState(question.dislike);

  const handleLike = async () => {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        type: 'like',
      }),
    });
    setLikeCount(likeCount + 1);
  };

  const handleDislike = async () => {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        type: 'dislike',
      }),
    });
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <ReactionButtonBoxContainer>
      <div className="reaction-button-box" style={style}>
        <div
          className={`like-button-box ${likeCount !== 0 ? 'on' : ''}`}
          onClick={handleLike}
          onKeyDown={() => {}}
          role="presentation"
        >
          <figure className="tumbs-up-image" />
          <span className="like">좋아요</span>
          {likeCount !== 0 && <span className="like-count">{likeCount}</span>}
        </div>
        <div
          className={`dislike-button-box ${dislikeCount !== 0 ? 'on' : ''}`}
          onClick={handleDislike}
          onKeyDown={() => {}}
          role="presentation"
        >
          <figure className="tumbs-down-image" />
          <span className="dislike">싫어요</span>
          {dislikeCount !== 0 && (
            <span className="dislike-count">{dislikeCount}</span>
          )}
        </div>
      </div>
    </ReactionButtonBoxContainer>
  );
};

export default ReactionButtonBox;
