export async function sendEmail(data: any) {
  const apiEndpoint = "/api/email";
  console.log(data, "api data");
  return fetch(apiEndpoint, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      alert(err);
      console.log("ERROR:", err);
    });
}
