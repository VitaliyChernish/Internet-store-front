import AdminCabinet from "./cabinet/AdminCabinet"
import Login from "./loginForm/Login";
import MainCamera from "./pages/apiCamera/MainCamera";
import MainMagsafe from "./pages/powerbankMagsafe/MainMagsafe";
import MainPage from "./pageElements/mainPage/MainPage";

import {
    LOGIN_FORM,
    ADMIN_CABINET,
    MAIN_CAMERA,
    MAIN_MAGSAFE,
    MAIN_ROUTE,
    SITE_POLITICS,
    ANIMATION_PAGE,
    LED_LIGHTS
} from "./utils/consts";
import ConfidentialPoliticks from "./pageElements/confidentialPoliticks/ConfidentialPoliticks";
import AnimatedPage from "./pages/animatedPage/AnimatedPage";
import MainLedLights from "./pages/ledLights/MainLedLights";


export const authRoutes = [
    {
        path: ANIMATION_PAGE,
        Component: <AnimatedPage />
    },
    {
        path: MAIN_MAGSAFE,
        Component: <MainMagsafe />
    },
    {
        path: LED_LIGHTS,
        Component: <MainLedLights />
    },
    {
        path: MAIN_CAMERA,
        Component: <MainCamera />
    },
    {
        path: ADMIN_CABINET,
        Component: <AdminCabinet />
    },
    {
        path: LOGIN_FORM,
        Component: <Login />
    },
    {
        path: SITE_POLITICS,
        Component: <ConfidentialPoliticks />
    },
    {
        path: MAIN_ROUTE,
        Component: <MainPage />
    }
]
