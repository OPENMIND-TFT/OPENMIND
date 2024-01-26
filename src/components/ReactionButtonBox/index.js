import ReactionButtonBoxContainer from './style';

const ReactionButtonBox = ({ question, style }) => {
  return (
    <ReactionButtonBoxContainer>
      <div className="reaction-button-box" style={style}>
        <div className="like-button-box on">
          <figure className="tumbs-up-image" />
          <span className="like">좋아요</span>
          <span className="like-count">{question.like}</span>
        </div>
        <div className="dislike-button-box">
          <figure className="tumbs-down-image" />
          <span className="dislike">싫어요</span>
          <span className="dislike-count">{question.dislike}</span>
        </div>
      </div>
    </ReactionButtonBoxContainer>
  );
};

export default ReactionButtonBox;
