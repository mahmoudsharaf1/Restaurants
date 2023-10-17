import axios from 'axios';
import { Get_Restaurant_Details, Get_Restaurants } from './config';

const token = 'Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx'
export const getRestaurants = (callBack) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const params = {
        location: 'san jose',
        limit: '50'
    };

    const config = {
        method: 'get',
        url: Get_Restaurants,
        headers,
        params
    };

    axios(config)
        .then(function (response) {
            callBack({ data: response.data });

        })
        .catch(function (error) {
            console.log(error);
        });
};
export const getRestaurantDetails = (callBack, id) => {
    const headers = {
        Authorization: `Bearer ${token}`
    };


    const config = {
        method: 'get',
        url: `${Get_Restaurant_Details}/${id}`,
        headers,
        params
    };

    axios(config)
        .then(function (response) {
            callBack({ data: response.data });

        })
        .catch(function (error) {
            console.log(error);
        });
};
