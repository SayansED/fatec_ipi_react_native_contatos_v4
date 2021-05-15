import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () => {

    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, imagemURI TEXT NOT NULL, telefone TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)',
                [],
                () => {resolve()},
                (_, err) => {reject(err)}
            );
        });
    });
    return promise;
}

export const inserirContato = (horaCadastro, nomeContato, imagemURI, telefone, lat, lng) => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_contato (horaCadastro, nome, imagemURI, telefone, lat, lng) VALUES (?, ?, ? , ?, ?, ?)',
                [horaCadastro, nomeContato, imagemURI, telefone, lat, lng],
                (_, resultado) => {resolve(resultado)},
                (_, err) => {reject (err)}
            );
        })
    });
    return promise;
}

export const buscarContatos = () => {
    const promise = new Promise ((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_, resultado) => {resolve(resultado)},
                (_, err) => {reject (err)}
            );
        })
    });
    return promise;
}

init().then(() => {}).catch(() => {})