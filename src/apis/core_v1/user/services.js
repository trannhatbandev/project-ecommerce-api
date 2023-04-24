const LogService = require('../../modules/log/services');
const ErrorHandler = require("../../../utils/ErrorHandler")
const UserModel = require('../../../databases/mongodb/model/user.model');
const ERecordEnum = require('../../../utils/record.enum');
class UserService {
    logService;
    constructor() {
        this.logService = new LogService();
    }

    saveUser = async (data) => {
        const user = new UserModel(data);
        const saveUser = await user.save();
        await this.logService.saveLog({
            record_type: ERecordEnum.user,
            record_id: saveUser._id,
            data: saveUser,
        });
        return saveUser
    };
}

module.exports = UserService;
