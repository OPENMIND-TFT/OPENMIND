const deleteAll = async id => {

  await fetch(`https://openmind-api.vercel.app/3-5/subjects/${id}/`, {
    method: 'DELETE',
  });

};

export default deleteAll;
