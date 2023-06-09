// const API_URL = 'http://localhost:8080'
export const API_ROUTES = {
    SIGN_UP: `/signUp`,
    SIGN_IN: `/signIn/do`,
    GET_USER: `/user/get`,
    GET_GAME_INFO:'/info/games'
}

export const APP_ROUTES = {
    SIGN_UP: '/signUp',
    SIGN_IN: '/signIn',

    PLAY: '/play',
    ABOUT: '/about',
    HOME: '/',
    PROFILE: '/profile',

    GAME_TTT:'/play/tictactoe',
    GAME_COINFLIP:'/play/coinflip'
}

export const VALIDATE_PATTERNS = {
    EMAIL: /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    USERNAME: /^[A-Za-z][A-Za-z]{1,29}$/i,
    PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
}