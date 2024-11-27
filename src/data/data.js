const fetchDocuments = async () => {
    const response = await fetch('/api/documents');
    data = await response.json();
    return data = Array.isArray(data) ? data : [data];
};

const Data = fetchDocuments();

export { Data }