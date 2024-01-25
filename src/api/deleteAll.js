const deleteAll = async id => {
  const response = await fetch(
    `https://openmind-api.vercel.app/3-5/subjects/${id}/`,
    {
      method: 'DELETE',
    },
  );

  return response.json();
};

export default deleteAll;
