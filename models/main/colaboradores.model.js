module.exports = (sequelize, DataTypes) => {

    const Colaboradores = sequelize.define('Colaboradores', {

        id: {

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        telefone: {

            type: DataTypes.INTEGER(11),
        },
        nome: {

            type: DataTypes.STRING,
            allowNull: false
        },
        endereco: {

            type: DataTypes.STRING
        },
        nascimento: {

            type: DataTypes.DATE
        },
        email: {

            type: DataTypes.STRING,
            validate: {

                isEmail: {

                    args: true,
                    msg: "E-mail inválido."
                }
            }
        },
        createdAt: {

            type: DataTypes.DATE
        },
        updatedAt: {

            type: DataTypes.DATE
        },
        deletedAt: {

            type: DataTypes.DATE
        }

    },
        {

            createdAt: false,
            updatedAt: false,
            tableName: 'Colaboradores'
        })

    Colaboradores.associate = models => {

        Colaboradores.hasMany(models.Feedbacks, {

            foreignKey: 'colaboradorId',
            as: 'feedbacks'
        })
        
        Colaboradores.hasMany(models.Historicos, {

            foreignKey: 'colaboradorId',
            as: 'historicos'
        })
    }
    return Colaboradores
}