export const createAndUpdateDocumentValidator = async (req, res, next) => {
    const { name, owner, documentType } = req.body;
    validateParams(res, next, [name, owner, documentType]);
}

export const createOwnerValidator = async (req, res, next) => {
    const { name, lastName } = req.body;
    validateParams(res, next, [name, lastName]);
}

export const createUserValidator = async (req, res, next) => {
    const { name, lastName, idNumber } = req.body;
    validateParams(res, next, [name, lastName, idNumber]);
}

export const associateUsersValidator = async (req, res, next) => {
    const { users } = req.body;
    if (users === undefined){
       return validateParams(res, next, [users]);
    }
    validateParams(res, next, users);
}

const validateParams = (res, next, params = []) => {
    if (params.length === 0 || params.some(param => param === undefined || param === '' || param === null)) {
        res.status(400).json({
            message: 'La solicitud no se pudo procesar. Falta al menos un parámetro obligatorio'
        });
        res.end()
    } else {
        next();
    }
}
