const runTransactionWithRetry = async (txnFunc, session, data) => {
    while (true) {
        try {
            await txnFunc(data, session);
            break;
        } catch (error) {
            if (
                error.hasOwnProperty('errorLabels') &&
                error.errorLabels.includes('TransientTransactionError')
            ) {
                console.info(
                    'TransientTransactionError, retrying transaction ...'
                );
                continue;
            } else {
                throw error;
            }
        }
    }
};

const commitWithRetry = async (session) => {
    while (true) {
        try {
            await session.commitTransaction();
            console.log('Transaction committed.');
            break;
        } catch (error) {
            // Can retry commit
            if (
                error.hasOwnProperty('errorLabels') &&
                error.errorLabels.includes('UnknownTransactionCommitResult')
            ) {
                console.log(
                    'UnknownTransactionCommitResult, retrying commit operation ...'
                );
                continue;
            } else {
                console.log('Error during commit ...');
                throw error;
            }
        }
    }
};
