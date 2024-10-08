async function getItems() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        response.data.forEach(item => {
            console.log(`ID: ${item.id}, Title: ${item.title}`);
        });
        if(response.status == "200") {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }
}

getItems()

async function getItemById(id) {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(response.data.id, response.data.title)
        if(response.status == "200") {
            console.log(response.status)
        }
    } catch (error) {
        console.log(error)
    }
}

getItemById(3)

async function addData(data) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        console.log(response.data.id, response.data.title)
    } catch (error) {
        console.log(error)
    }
}

addData({title: "Newly Created"});

async function putData(id) {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            title: "steve"
        });
        if(response.status == "201") {
            console.log(response.status)
        }
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

putData(7)

async function deleteData(id) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log("Item deleted", response);
        if(response.status == "200") {
            console.log("Response status code is: ", response.status)
        }
    } catch (error) {
        console.log(error)
    }
}

deleteData(7)