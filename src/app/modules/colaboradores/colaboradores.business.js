const repositories = require('./colaboradores.repositories')
const { errors } = require('../../services/error.service.js')

exports.criaColaborador = async (colaborador) => {

    try {

        const colaboradorCriado = await repositories.create(colaborador)

        if (!colaboradorCriado) {

            throw errors.internalServerError(`Houve um erro ao cadastrar um colaborador`)
        }

        return colaboradorCriado

    } catch (error) {

        throw error
    }
}

exports.editaColaborador = async (colaboradorId, colaborador) => {

    try {

        const colaboradorEditado = await repositories.update(colaboradorId, colaborador)

        if (!colaboradorEditado) {

            throw errors.internalServerError(`Houve um erro ao editar o colaborador`)
        }

        return colaboradorEditado

    } catch (error) {

        throw error
    }
}

exports.excluiColaborador = async (colaboradorId) => {

    try {

        const colaboradorExcluido = await repositories.delete(colaboradorId)

        if (!colaboradorExcluido) {

            throw errors.internalServerError(`Houve um erro ao excluir o colaborador.`)
        }

        return colaboradorExcluido

    } catch (error) {

        throw error
    }
}

exports.listaColaboradores = async () => {

    try {

        const colaboradores = await repositories.find()

        if (!colaboradores) {

            throw errors.notFound(`Nenhum colaborador foi encontrado`)
        }

        return colaboradores

    } catch (error) {

        throw error
    }
}

exports.listaColaboradorPorId = async (colaboradorId) => {

    try {

        const colaborador = await repositories.findOne(colaboradorId)

        if (!colaborador) {

            throw errors.notFound(`Nenhum colaborador foi encontrado`)
        }

        return colaborador

    } catch (error) {

        throw error
    }
}