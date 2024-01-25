const getUserQuestionData = async id => {
  const response = await fetch(
    `https://openmind-api.vercel.app/3-5/subjects/${id}/questions/`,
  );
  const data = await response.json();
  return data;
};

export default getUserQuestionData;
