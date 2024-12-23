const axios = require('axios');
const { APIResponse } = require("../utils/helperFunctions");

module.exports = {
    gateway: async (req, res, next) => {
        const {
            endPoint,
            method,
            body,
            headers
        } = req.body;

        try {


            let config = {
                method,
                url: endPoint,
                headers: headers,
                data: body
            };

            const response = await axios.request(config)
            return APIResponse({
                res,
                message: "Api interface response",
                data: {
                    response: response && response.data ? response.data : {}
                },
            });
        } catch (e) {

            return APIResponse({
                res,
                message: "Error from api interface",
                code: 500,
                data: {
                    error: e
                },
            });
        }
    }
};
