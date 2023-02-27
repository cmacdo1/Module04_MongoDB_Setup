const Loan = require('../schemas/loanSchema');

exports.getData = async (req, res) => {
    //get data from database
    const loans = await Loan.find();
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
};
exports.getDataById = async (req, res) => {
    //get data from database
    const {id} = req.params;
    const loans = await Loan.find({_id: id});
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
};
exports.postData = async (req, res) => {
    const newLoan = req.body;
    const loans = await Loan.create(newLoan);
    res.status(201).json({
        status: 'success',
        data: loans
    });
};
exports.updateDataById = async (req, res) => {
    const {id} = req.params;
    const loans = await Loan.updateOne({_id: id});
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
};
exports.patchDataById = async (req, res) => {
    const {id} = req.params;
    const loans = await Loan.patch({_id: id});
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
};
exports.deleteDataById = async (req, res) => {
    const {id} = req.params;
    const loans = await Loan.deleteOne({_id: id});
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
};