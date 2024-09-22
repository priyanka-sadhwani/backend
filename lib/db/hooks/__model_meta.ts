/* eslint-disable */
const metadata = {
    models: {
        userClassProgress: {
            name: 'UserClassProgress', fields: {
                id: {
                    name: "id",
                    type: "Int",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                    isAutoIncrement: true,
                }, userId: {
                    name: "userId",
                    type: "String",
                }, classId: {
                    name: "classId",
                    type: "String",
                }, watched: {
                    name: "watched",
                    type: "Boolean",
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
};
export default metadata;
