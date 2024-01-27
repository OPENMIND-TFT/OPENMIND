const getUserData = async id => {
  const response = await fetch(
    `https://openmind-api.vercel.app/3-5/subjects/${id}/`,
  );
  const data = await response.json();
  return data;
};

export default getUserData;
