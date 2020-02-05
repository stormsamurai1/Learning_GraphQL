const Users = require('./UserSchema')

//GraphQL já espera que enviemos Promises pra ele, portanto, não precisamos tratar de assincronos

module.exports={
    Query:{
        users: () => {
            return Users.find()
        },

        //o uso de "_" se dá pois o primeiro parâmetro é sobre o contexto, não vem ao caso neste
        //primeiro contato e introdução
        user: (_, { id }) => {
            return Users.findById(id)
        }
    },

    Mutation: {
        createUser: (_, {name, email}) =>{
            return Users.create({name, email})
        }
    }
}