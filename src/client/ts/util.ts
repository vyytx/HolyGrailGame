import axios from 'axios';

export function checkLoginStatus() {
    const loginToken = localStorage.getItem('loginToken');
    return new Promise((resolve, reject) => {
        axios
            .post('/api/account/isOnline', {loginToken})
            .then((res) => {
                const isOk = res.data;
                if(isOk) {
                    resolve('still logged in');
                }else {
                    reject();
                }
            })
    });
}