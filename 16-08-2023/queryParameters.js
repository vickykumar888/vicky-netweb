const url="https://www.google.com/?search=microsoft&sorting=asc&department=it"
function queryParameters(url){
    const query ={};
    const search = new URLSearchParams(url.split('?')[1]);
    search.forEach((value,key)=>{
        query[key]=value;
    })
    return query;
}
const query = queryParameters(url);
console.log(query);
