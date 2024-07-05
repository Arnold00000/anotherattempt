export const fetchUserData = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/user');
    return response.json();
};

export const fetchAdminData = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/admin');
    return response.json();
};


export const createUserData = async (data) => {
    const response = await fetch('http://127.0.0.1:5000/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const createAdminData = async (data) => {
    const response = await fetch('http://127.0.0.1:5000/api/admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};