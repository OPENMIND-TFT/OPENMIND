import styled from 'styled-components';

const ReactionButtonBoxContainer = styled.div`
  .reaction-button-box {
    display: flex;
    align-items: flex-end;
    border-top: 1px solid var(--Grayscale-30);
    gap: 32px;
    height: 43px;
  }

  .like-button-box,
  .dislike-button-box {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 1.4rem;
    color: var(--Grayscale-40);
  }

  .like-button-box.on {
    color: var(--Blue-50);
    .tumbs-up-image {
      background: url('/assets/images/thumbsUpBlue50.svg');
    }
  }

  .dislike-button-box.on {
    color: var(--Red-50);
    .tumbs-down-image {
      background: url('/assets/images/thumbsDownRed50.svg');
    }
  }

  .tumbs-up-image {
    background: url('/assets/images/thumbsUp.svg');
  }

  .tumbs-down-image {
    background: url('/assets/images/thumbsDown.svg');
  }

  .tumbs-up-image,
  .tumbs-down-image {
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default ReactionButtonBoxContainer;
