import ApolloClient from 'apollo-boost';
import { setContext } from 'apollo-link-context';

//const authLink = setContext(() => {
//    const token = localStorage.getItem('jwtToken');
//    return{
//        headers: {
//            Authorization: token ? `Bearer ${token}` : ''
//        }
//    };
//});

export default new ApolloClient({
    uri: "http://localhost:4000/graphql",
    request: (operation) => {
        const token = localStorage.getItem('jwtToken')
        operation.setContext({
          headers: {
            authorization: token ? `Bearer ${token}` : ''
          }
        })
    }
})