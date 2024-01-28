const getCardData = async (sortBy, currentPage) => {
  try {
    const response = await fetch(
      sortBy === '최신순'
        ? `https://openmind-api.vercel.app/3-5/subjects/?limit=8&offset=${8 * (currentPage - 1)}`
        : `https://openmind-api.vercel.app/3-5/subjects/?limit=8&offset=${8 * (currentPage - 1)}&sort=name`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error('서버로부터 정보를 가져오지 못했습니다.');
  }
};

export default getCardData;
