
export async function getTasks({token}) {
    console.log(token);
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
        headers: {
            Authorization: `Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k`,
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