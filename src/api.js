async function creatPheed(formData) {
  const name = formData;
  const response = await fetch(
    `https://openmind-api.vercel.app/3-5/subjects/`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        team: '3-5',
      }),
    },
  );

  if (!response.ok) {
    console.error('Error:', response.statusText);
    throw new Error('피드를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export default creatPheed;
