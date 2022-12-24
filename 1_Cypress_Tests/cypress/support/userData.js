module.exports = {userData};

function userData() {
    const email = 'Denys.Bielov.QA@gmail.com'
    const name = 'Joseph Biden'
    const pass = 'Password1!'
    const searchInput = ['USB', 'Nitecore', 'Cree', 'LED', 'lumens'][(Math.floor(Math.random() * 5))]

    return {email, name, pass, searchInput}
};
