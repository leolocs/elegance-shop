// /**
//  * Serviço de API
//  * 
//  * Centraliza todas as chamadas à API.
//  * Isso facilita manutenção e testes.
//  */

// // URL base da sua MockAPI
// const API_URL = "https://696b7b27624d7ddccaa15948.mockapi.io/api/products";

// /**
//  * Busca todos os produtos
//  * 
//  * @returns {Promise<Array>} Lista de produtos
//  */
// export async function getProducts() {
//   try {
//     const response = await fetch(`${API_URL}/products`);
    
//     // Verifica se a resposta foi ok (status 200-299)
//     if (!response.ok) {
//       throw new Error(`Erro HTTP: ${response.status}`);
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Erro ao buscar produtos:", error);
//     throw error; // Re-lança o erro para quem chamou
//   }
// }

// /**
//  * Busca um produto pelo ID
//  * 
//  * @param {string} id - ID do produto
//  * @returns {Promise<Object>} Dados do produto
//  */
// export async function getProductById(id) {
//   try {
//     const response = await fetch(`${API_URL}/products/${id}`);
    
//     if (!response.ok) {
//       throw new Error(`Erro HTTP: ${response.status}`);
//     }
    
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Erro ao buscar produto:", error);
//     throw error;
//   }
// }