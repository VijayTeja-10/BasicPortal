import axios from "axios";
const url=import.meta.env.VITE_BACKEND_URL
const axiosInstance=axios.create({
    baseURL: url,
    headers : {
        'Content-Type' : 'application/json',
    },
})

axiosInstance.interceptors.request.use(
    function(config){
        const token=localStorage.getItem('accessToken')
        console.log('Request =>',config)
        if(token){
            config.headers['Authorization'] =`Bearer ${token}`
        }
        console.log('Modded Request =>',config)
        return config;
    },function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    async function(error){
        const OriginalRequest=error.config;
        if(error.response.status === 401 && !OriginalRequest.retry){
            OriginalRequest.retry=true
            const refreshToken=localStorage.getItem('refreshToken')
            if(!refreshToken){
                localStorage.removeItem('accessToken')
                return Promise.reject(error);
            }
            try{
                const response=await axios.post('/token/refresh/',{refresh:refreshToken})
                localStorage.setItem('accessToken',response.data.access)
                OriginalRequest.headers['Authorization']= `Bearer ${response.data.access}`
                return axiosInstance(OriginalRequest)
            }catch(Rerror){
                localStorage.removeItem('refreshToken')
                localStorage.removeItem('accessToken')
                return Promise.reject(Rerror);
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;