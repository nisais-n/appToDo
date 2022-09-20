import axios from   'axios';
const DefaultBaseURL = "https://localhost:7286/";

export const getHeaders = () => {
    return {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          }
    };
};

export const get = (path)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${DefaultBaseURL}/${path}`,getHeaders())
        .then((response)=>{
            resolve(response);
        })
        .catch((error)=>{
            console.error('get',error,path)
        });
    })
}

export const post = (path)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${DefaultBaseURL}/${path}`,getHeaders())
        .then((response)=>{
            resolve(response);
        })
        .catch((error)=>{
            console.error('post',error,path)
        });
    })
}

export const put = (path)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${DefaultBaseURL}/${path}`,getHeaders())
        .then((response)=>{
            resolve(response);
        })
        .catch((error)=>{
            console.error('put',error,path)
        });
    })
}

