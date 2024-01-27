import EditButtonContainer from './style';

const EditButton = () => {
  return (
    <EditButtonContainer>
      <button className="edit-button" type="button">
        <img src="/assets/images/edit.svg" alt="수정 버튼" />
        수정하기
      </button>
    </EditButtonContainer>
  );
};

export default EditButton;
