//06.- Performance y Múltiple async/await

const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
const todoUrl = "https://jsonplaceholder.typicode.com/todos";
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () =>{

    try{

        const inicio = performance.now();
        
        const [ commentsRes, todoRes, photosRes ] = await Promise.all([fetch(commentsUrl), fetch(todoUrl), fetch(photosUrl)]);
        const [ commentsData, todoData, photosData ] = await Promise.all([commentsRes.json(), todoRes.json(), photosRes.json()]);
        
        console.log(commentsData);
        console.log(todoData);
        console.log(photosData);
        
        const fin = performance.now();
        console.log(`La respuesta tarda ${fin - inicio}`);

    } catch (error) {
        console.log(error.message);
    }
}

consultarAPI();