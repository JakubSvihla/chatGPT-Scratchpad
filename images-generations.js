// const API_KEY =

async function fetchData() {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt:
        "Futuristic skyscrapers with a neon skybridge at night, digital art",
      n: 2,
      size: "1024x1024",
    }),
  });
  const data = await response.json();
  console.log(data);
}

fetchData();
