const getCardData = async (sortBy, itemsPerPage, currentPage) => {
  try {
    const response = await fetch(
      sortBy === '최신순'
        ? `https://openmind-api.vercel.app/3-5/subjects/?limit=${itemsPerPage}&offset=${itemsPerPage * (currentPage - 1)}`
        : `https://openmind-api.vercel.app/3-5/subjects/?limit=${itemsPerPage}&offset=${itemsPerPage * (currentPage - 1)}&sort=name`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error('서버로부터 정보를 가져오지 못했습니다.');
  }
};

export default getCardData;
