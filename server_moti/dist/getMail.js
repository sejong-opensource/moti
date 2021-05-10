"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMail = void 0;
const imaps = require("imap-simple");
const getMail = async (email, password, host) => {
    const searchCriteria = ["UNSEEN"];
    const fetchOptions = {
        bodies: ["HEADER", "TEXT"],
        markSeen: false,
    };
    const config = {
        imap: {
            user: email,
            password: password,
            host: host,
            port: 993,
            tls: true,
            authTimeout: 3000,
            tlsOptions: {
                rejectUnauthorized: false,
            },
        },
    };
    const connection = await imaps.connect(config);
    await connection.openBox("INBOX");
    const mails = await connection.search(searchCriteria, fetchOptions);
    connection.end();
    const results = mails.map(mail => {
        const header = mail.parts.filter(part => {
            return part.which === "HEADER";
        });
        const body = mail.parts.filter(part => {
            return part.which === "TEXT";
        });
        const date = mail.attributes.date;
        // date = header[0].body.date
        const title = header[0].body.subject[0];
        const sender = header[0].body.from[0];
        return { date: date, title: title, sender: sender };
    });
    return results;
};
exports.getMail = getMail;
