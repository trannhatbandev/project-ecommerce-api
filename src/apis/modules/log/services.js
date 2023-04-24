const LogModel = require('../../../databases/mongodb/model/log.model')
class LogService {
    saveLog = async (data) => {
        try {
            const log = new LogModel(data);
            await log.save();
        } catch (error) {
            throw error
        }
       
    }
}

module.exports = LogService