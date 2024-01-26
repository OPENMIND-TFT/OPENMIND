import DropDownContainer from './style';

const KebabDropDown = ({ question }) => {
  return (
    <DropDownContainer>
      {question.answer ? (
        <div className="dropdown-box">
          <li>
            <button type="button">
              <img src="/assets/images/Edit.svg" alt="수정하기 버튼" />
              <span>수정하기</span>
            </button>
          </li>
          <li>
            <button type="button">
              <img src="/assets/images/xIcon.svg" alt="삭제하기 버튼" />
              <span>삭제하기</span>
            </button>
          </li>
        </div>
      ) : (
        <div className="dropdown-box">
          <li>
            <button type="button">
              <img src="/assets/images/xIcon.svg" alt="삭제하기 버튼" />
              <span>답변거절</span>
            </button>
          </li>
        </div>
      )}
    </DropDownContainer>
  );
};

export default KebabDropDown;
