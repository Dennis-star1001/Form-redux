const url = "http://localhost/react-form-backend";

export const api = async (page, data) => {
    const request =await fetch(`${url}/${page}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const res = await request.json();
    return res;
}