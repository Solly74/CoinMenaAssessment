const Service = {
  makeCall: async (url, method = "GET") => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const reqOptions = {
        method,
        headers,
      };

      const response = await fetch(url, reqOptions);

      return await response.json();
    } catch (err) {
      throw err;
    }
  },
};

export default Service;
