import * as imaps from "imap-simple";

export const getEmail = async (email, password, host) => {
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
  const results = await connection.search(searchCriteria, fetchOptions);
  connection.end();
  return results;
};
