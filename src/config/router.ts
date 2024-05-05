import Index from '../pages/IndexPage.vue'
import Team from '../pages/TeamPage.vue'
import User from '../pages/UserPage.vue'
import Search from "../pages/SearchPage.vue";
import UserEdit from "../pages/EditUserPage.vue";
import SearchResult from "../pages/SearchResultPage.vue";
import UserLogin from "../pages/UserLoginPage.vue";

const routes = [
    {path: '/', component: Index},
    {path: '/team', component: Team},
    {path: '/user', component: User},
    {path: '/search', component: Search},
    {path: '/user/edit', component: UserEdit},
    {path: '/user/list', component: SearchResult},
    {path: '/user/login', component: UserLogin},
]

export default routes;