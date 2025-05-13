import { rest } from "msw";

const baseURL = "https://drf-bonsaihive-91939050de59.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
          ctx.json({
            "pk":7,
            "username":"alex",
            "email":"",
            "first_name":"",
            "last_name":"",
            "profile_id":7,
            "profile_image":
                "https://res.cloudinary.com/drbyc4bof/image/upload/v1/media/images/pexels-ekaterina-bolovtsova-9130872_lm3vjk"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
]; 