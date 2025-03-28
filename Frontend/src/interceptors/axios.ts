import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api/'

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
    if(error.response.status === 401 && !refresh){
        refresh = true;
        const response:any = await axios.post('psychologists/refresh', {}, {withCredentials:true});
        if(response.status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            return axios(error.config)
        }
    }
    refresh = false;
    return error;
})