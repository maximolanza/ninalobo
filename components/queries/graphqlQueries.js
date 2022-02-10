import { gql } from "graphql-request";
export const integrantesGQL = gql`
query members {
  integrantes {
    id
    nombre
    apellido
    apodo
    descripcion
    foto {
      id
      fileName
      handle
      url(transformation: {document: {output: {format: webp}}})
    }
  }
}
  `;


export const discosGQL = gql`
  query discs {
    discos {
      id
      codigo
      titulo
      portada {
        size
        url
        width
      }
    }
  }
    `;




