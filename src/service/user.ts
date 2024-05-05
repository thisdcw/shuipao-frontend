import myAxios from "../plugins/myAxios";
import {getCurrentUserState, setCurrentUserState,} from "../states/user";

export const getCurrentUser = async () => {
    const currentUser = getCurrentUserState();
    if (currentUser) {
        console.log("user ",currentUser)
        return currentUser
    }
    const res = await myAxios.get('/user/current');
    if (res) {
        setCurrentUserState(res.data)
        return res.data
    }
    return null
}
