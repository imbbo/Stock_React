
// 로그인 한 유저의 데이터 객체를 반환하는 함수
export const getLoginUserInfo = () => {
    return {
        token: localStorage.getItem('LOGIN_ACCESS_TOKEN'),
        useremail: localStorage.getItem('LOGIN_USEREMAIL'),
    
    };
};


export const isLogin = () => !!localStorage.getItem('LOGIN_ACCESS_TOKEN');
