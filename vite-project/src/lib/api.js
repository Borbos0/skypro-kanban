export async function getTasks({token}) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer ${token.user}`,
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
    console.log(data);
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