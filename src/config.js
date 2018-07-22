import { GetENV } from 'lib-env';

const CONFIG = Object.freeze({
    test: {
        db: {
            mongo: {
                url  : 'mongodb://localhost:27017/registry_test?maxPoolSize=2',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            port: 50001,
        },
    },
    staging: {
        db: {
            mongo: {
                url  : 'mongodb://localhost:27017/registry_staging?maxPoolSize=2',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            port: 50001,
        },
    },
    production: {
        db: {
            mongo: {
                url  : 'mongodb://localhost:27017/registry?maxPoolSize=5',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            port: 10001,
        },
    }
    ,
})[GetENV()];

export default CONFIG;

