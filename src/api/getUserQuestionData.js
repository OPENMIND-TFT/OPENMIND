const getUserQuestionData = async (id, page) => {
  const response = await fetch(
    `https://openmind-api.vercel.app/3-5/subjects/${id}/questions/?limit=1&offset=${page}`,
  );
  const data = await response.json();
  return data;
};

export default getUserQuestionData;
