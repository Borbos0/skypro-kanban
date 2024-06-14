const baseUrl = "https://wedev-api.sky.pro/api/kanban";
export async function getTasks({ token }) {
  if (token === undefined) {
    token = JSON.parse(localStorage.getItem("token"));
  }
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();

  return data;
}
export async function postRegister(name, login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  const data = await response.json();
  return data;
}
export async function postTask({ title, topic, description, date, token }) {
  if (token === undefined) {
    token = JSON.parse(localStorage.getItem("token"));
  }
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      description,
      date,
    }),
  });
  if (response.status === 400) {
    throw new Error("Неккоректные данные");
  }
  const data = await response.json();
  return data;
}

export async function postLogin(login, password) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  const data = await response.json();
  return data;
}

export async function deleteTask({ id, token }) {
  if (token === undefined) {
    token = JSON.parse(localStorage.getItem("token"));
  }
  const response = await fetch(baseUrl + "/" + `${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 400) {
    throw new Error("Неккоректные данные");
  }
  const responseData = await response.json();
  return responseData;
}

export async function editTask({
  title,
  topic,
  status,
  description,
  date,
  _id,
  token,
}) {
  const response = await fetch(baseUrl + "/" + _id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (!response.ok) {
    throw new Error("Неккоректные данные");
  }
  const responseData = await response.json();
  return responseData;
}
