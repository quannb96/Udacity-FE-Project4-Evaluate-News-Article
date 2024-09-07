// Replace checkForName with a function that checks the URL
import { isValidURL } from "./urlChecker";

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
const serverURL = "http://localhost:8000/";

const handleSubmit = async (e) => {
  e.preventDefault();
  const urlInput = document.getElementById("name");
  const { value } = urlInput;
  if (isValidURL(value)) {
    const data = await fetchData(serverURL, { url: value });
    document.getElementById("agreement").innerHTML = data.agreement;
    document.getElementById("subjectivity").innerHTML = data.subjectivity;
    document.getElementById("confidence").innerHTML = data.confidence;
    document.getElementById("irony").innerHTML = data.irony;
    document.getElementById("score_tag").innerHTML = data.score_tag;
  } else {
    alert("Please, Enter a valid article URL");
  }
};

// Function to send data to the server
const fetchData = async (url = "", data = { url: "" }) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const newData = await response.json();
    return newData;
  } catch (error) {
    alert("Sorry, something went wrong!");
    return error;
  }
};

// Export the handleSubmit function
export { handleSubmit };

