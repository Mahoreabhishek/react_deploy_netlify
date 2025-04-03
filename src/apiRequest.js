const apiRequest = async (url = " ", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Pleas reload the app");
  } catch (err) {
    errMsg = err.errMsg;
  } finally {
    return errMsg;
  }
};
export default apiRequest;
