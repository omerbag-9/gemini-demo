/**
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 */

export const home = (req, res) => {
    res.status(200).json({
        msg:"This is home route",
        statusCode:200
    })
};
