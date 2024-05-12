export async function getTasks({token}) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
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
export async function postTask({title, topic, description, date, token}) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
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
    const data = await response.json();
    return data;
}

export async function postLogin(login, password){
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

export async function editTask({ title, topic, status, description, date, _id, token }) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban" + "/" + _id, {
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
    
      if (response.status === 201) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Не удалось редактировать задачу, попробуйте снова");
      }
    }